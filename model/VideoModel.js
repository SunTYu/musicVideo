const {Schema} = require('../db/config.js');

const VideoSchema = new Schema({
    name: String,
    discrip: String,
    url: String,
    user: {type: Number, default: undefined},//上传用户
    dirName: String,
    dirUrl: String,//所属父文件夹
    delete: Boolean,//删除标记
    mimetype: String,
});

module.exports = VideoSchema;