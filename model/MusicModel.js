const {Schema} = require('../db/config.js');

const MusicSchema = new Schema({
    name: String,
    discrip: String,
    url: String,
    user: Number,//上传用户
    dirName: String,
    dir: String,//所属父文件夹
    delete: Boolean,//删除标记
    type: {type: Boolean, default: true},//文件或文件夹,true为文件
    md5: String,
});

module.exports = MusicSchema;