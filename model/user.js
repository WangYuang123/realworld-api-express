const mongoose = require('mongoose')
const {createAt, updateAt} = require('./base-model')

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	bio: {
		type: String,
		default: null
	},
	image: {
		type: String,
		default: null
	},
	createAt,
	updateAt
})

module.exports = userSchema