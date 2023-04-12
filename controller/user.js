const { User } = require('../model')

// 用户登录
exports.login = async(req, res, next) => {
	try{
		JSON.parse('faf')
		res.send('post /user/login')
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
		res.send('get /user')
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