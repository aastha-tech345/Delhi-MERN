const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    created_by:{type:String}
});

const Role = mongoose.model('role', roleSchema, 'role');

module.exports = {
    Role
};