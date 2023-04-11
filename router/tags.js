/**
 * 标枪相关路由
 */
const express = require('express')
const router = express.Router()

// 获取标签
router.get('/', async (req, res, next) => {
	try{
		res.send('get /tags')
	}catch(err){
		next(err);
	}
})

module.exports = router