// 文章列表
exports.articleList = async(req, res, next) => {
	try{
		res.send('文章列表')
	}catch(err){
		next(err);
	}
}

// 推送文章列表
exports.feedList = async(req, res, next) => {
	try{
		res.send('推送文章列表')
	}catch(err){
		next(err);
	}
}

// 获取文章
exports.getArticleDetail = async(req, res, next) => {
	try{
		res.send('获取文章')
	}catch(err){
		next(err);
	}
}

// 获取文章
exports.getArticleDetail = async(req, res, next) => {
	try{
		res.send('获取文章')
	}catch(err){
		next(err);
	}
}

// 创建文章
exports.createArticle = async(req, res, next) => {
	try{
		res.send('创建文章')
	}catch(err){
		next(err);
	}
}

// 更新文章
exports.updateArticle = async(req, res, next) => {
	try{
		res.send('更新文章')
	}catch(err){
		next(err);
	}
}

// 删除文章
exports.delArticle = async(req, res, next) => {
	try{
		res.send('删除文章')
	}catch(err){
		next(err);
	}
}





