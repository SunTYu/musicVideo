const {Schema} = require('../db/config.js');

const VideoSchema = new Schema({
    name: String,
    discrip: String,
    url: String,
    user: {type: Number, default: undefined},//上传用户
    dirName: String,
    dirId: String,//所属父文件夹
    delete: Boolean,//删除标记
    type: {type: Boolean, default: true},//文件或文件夹,true为文件
    md5: String
});

module.exports = VideoSchema;