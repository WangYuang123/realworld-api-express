/**
 * 用户相关路由
 */
const express = require('express')
const router = express.Router()
const userController = require('../controller/user')
const userValidator = require('../validate/user')

// 用户登录
router.post('/users/login', userController.login)

// 用户注册
router.post('/users', userValidator.register, userController.register)

// 获取当前登录用户
router.get('/user', userController.getCurrentUser)

// 更新用户
router.put('/user', userController.updateUser)

module.exports = router;