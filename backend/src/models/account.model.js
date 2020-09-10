const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
	fullname: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	created: { type: Date, default: Date.now },
	role: { type: String, default: 'user' }
});

module.exports = account = mongoose.model('accounts', accountSchema);