const {Schema} = require('../db/mongoose');

const VideoSchema = new Schema({
    name: String,
    discrip: String,
    url: String,
    user: Number,//上传用户
    delete: Boolean,//删除标记
});

module.exports = VideoSchema;