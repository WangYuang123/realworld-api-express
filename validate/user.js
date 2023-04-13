const { body } = require('express-validator')
const validate = require("../middleware/validate");
const { User } = require("../model");
const md5 = require('../util/md5')

// 注册
exports.register = validate([
	body('user.username').notEmpty().withMessage('用户名不能为空')
	.custom(async username => {
		const user = await User.findOne({ username })
		if(user) {
			return Promise.reject('用户名已存在')
		}
	}),
	body('user.email').notEmpty().withMessage('邮箱不能为空')
	.isEmail().withMessage('邮箱格式不正确')
	.bail()
	.custom(async email => {
		const user = await User.findOne({ email })
		if(user) {
			return Promise.reject('邮箱已存在')
		}
	}),
	body('user.password').notEmpty().withMessage('密码不能为空'),
])

// 登录
exports.login = [
	// 必填校验
	validate([
		body('user.email')
			.notEmpty().withMessage('邮箱不能为空')
			.isEmail().withMessage('邮箱格式不正确'),
		body('user.password').notEmpty().withMessage('密码不能为空')
	]),
	// 验证用户是否存在
	validate([
		body('user.email').custom(async (email, { req }) => {
			const user = await User.findOne({ email }).select([
				'email',
				'password',
				'username',
				'bio',
				'image'
			])
			if(!user) {
				return Promise.reject('用户不存在')
			}
			// 将数据挂载到请求对象中，后续的中间件也可以直接使用，就不需要重复查询了
			req.user = user
		})
	]),
	// 验证密码是否正确
	validate([
		body('user.password').custom(async(password, { req }) => {
			if(md5(password) !== req.user.password) {
				return Promise.reject('密码错误')
			}
		})
	])
]