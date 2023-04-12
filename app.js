const exprss = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router/index')
const errorHandler = require('./middleware/error-handler')
require('./model')

const app = exprss()

app.use(morgan('dev'))
app.use(exprss.json())
app.use(cors())

const PORT = process.env.PORT || 3001

// 挂在路由
app.use('/api', router)

// 统一处理服务端错误中间件
app.use(errorHandler())

app.listen(PORT, () => {
	console.log(`Server is running at http//localhost:${PORT}`)
})