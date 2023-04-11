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
		res.send('post /users')
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