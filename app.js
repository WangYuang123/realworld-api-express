const exprss = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = exprss()

app.use(morgan('dev'))
app.use(exprss.json())
app.use(cors())

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
	res.send('hello word')
})
app.post('/', (req, res) => {
	console.log(req.body)
	res.send("hello word")
})

app.listen(PORT, () => {
	console.log(`Server is running at http//localhost:${PORT}`)
})