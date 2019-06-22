const {Schema} = require('../db/mongoose');

const LabelSchema = new Schema({
    name: String,
    user: Number,//上传用户
    tag: String,
});

module.exports = LabelSchema;