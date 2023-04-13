const { User } = require('../model')
const _ = require('lodash');
const { jwtSecret } = require('../config/config.default')
const jwt = require('../util/jwt')

// 用户登录
exports.login = async(req, res, next) => {
	try{
		const user = req.user.toJSON()
		// 生成token
		const token = await jwt.sign(
			{
				userId: user._id
			},
			jwtSecret,
			{
				expiresIn: 60 * 60 * 24,
			}
		)
		
		// 移除密码属性
		delete user.password
		
		// 发送成功响应（包含token用户信息）
		res.status(200).json({
			...user,
			token
		})
	}catch(err){
		next(err);
	}
}

// 用户注册
exports.register = async(req, res, next) => {
	try{
		// 1.获取请求数据
		// 2.数据验证
		// 2.1基本数据验证
		// 2.2业务数据验证
		// 3.验证通过，将数据保存到数据库
		// 4.发送成功响应
	
		let user = new User(req.body.user)
		await user.save()
		user = user.toJSON()
		delete user.password
		res.status(201).json({
			user
		})
	}catch(err){
		next(err);
	}
}

//  获取当前用户
exports.getCurrentUser =  async(req, res, next) => {
	try{
		const user = req.user.toJSON()
		res.status(201).json({
			user
		})
	}catch(err){
		next(err);
	}
}

// 更新用户
exports.updateUser = async(req, res, next) => {
	try{
		res.send('put /user')
	}catch(err){
		next(err);
	}
}