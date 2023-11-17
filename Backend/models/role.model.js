const mongoose = require('mongoose');

const rolePermissionSchema = new mongoose.Schema({
    p_add: { type: String },
    p_edit: { type: String },
    p_view: { type: String },
    p_delete: { type: String },
    ownership_check: { type: String },
    section_name: { type: String },
    section_slug: { type: String },
});

const roleSchema = new mongoose.Schema({
    role_name: { type: String },
    permission: [rolePermissionSchema],
    added_by: { type: String },
});

const Role = mongoose.model('Role', roleSchema, 'role');

module.exports = {
    Role
}
