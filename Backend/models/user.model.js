const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String },
    mobile: { type: String },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    role:{type:String},
    role_id: {type:String },
    parent_id: { type: String }
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 15);
    }
    next();
});

userSchema.methods.getAuthToken = async function () {
    let params = {
        id: this._id,
        email: this.email,
        password: this.password,
        role: this.role 
    };
    let secretKey = "gdshskfjkdggndh";
    var tokenValue = jwt.sign(params, secretKey);
    this.tokens = this.tokens.concat({ token: tokenValue });
    await this.save();
    return tokenValue;
};
const User = mongoose.model('User', userSchema, 'User');

module.exports = {
    User
};
