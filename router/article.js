/**
 * 文章相关路由
 */
const express = require('express')
const router = express.Router()

// 文章列表
router.get('/', async(req, res, next) => {
	try{
		res.send('get /article')
	}catch(err){
		next(err);
	}
})

// 推送文章
router.get('/feed', async(req, res, next) => {
	try{
		res.send('get /article/feed')
	}catch(err){
		next(err);
	}
})

// 获取文章
router.get('/:slug', async(req, res, next) => {
	try{
		res.send('get /article/:slug')
	}catch(err){
		next(err);
	}
})

// 创建文章
router.post('/', async(req, res, next) => {
	try{
		res.send('post /article')
	}catch(err){
		next(err);
	}
})

// 更新文章
router.put('/:slug', async(req, res, next) => {
	try{
		res.send('put /article/:slug')
	}catch(err){
		next(err);
	}
})

// 删除文章
router.delete('/:slug', async(req, res, next) => {
	try{
		res.send('delete /article/:slug')
	}catch(err){
		next(err);
	}
})

// 添加评论
router.post('/:slug/comments', async(req, res, next) => {
	try{
		res.send('post /article/:slug/comments')
	}catch(err){
		next(err);
	}
})

// 获取某个文章的评论
router.get('/:slug/comments', async(req, res, next) => {
	try{
		res.send('get /article/:slug/comments')
	}catch(err){
		next(err);
	}
})

// 删除评论
router.delete('/:slug/comments/:id', async(req, res, next) => {
	try{
		res.send('delete /article/:slug/comments/:id')
	}catch(err){
		next(err);
	}
})

// 喜欢文章
router.post('/:slug/favorite', async(req, res, next) => {
	try{
		res.send('post /article/:slug/favorite')
	}catch(err){
		next(err);
	}
})

// 取消喜欢文章
router.delete('/:slug/favorite', async(req, res, next) => {
	try{
		res.send('delete /article/:slug/favorite')
	}catch(err){
		next(err);
	}
})


module.exports = router