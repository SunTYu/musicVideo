const {mongoose,Schema} = require('../db/config');

const musicSchema = require('./MusicModel');
const videoSchema = require('./VideoModel');
const dirSchema = require('./DirModel');
mongoose.col = {};
mongoose.col.musicModel = mongoose.model('Music', musicSchema);
mongoose.col.videoModel = mongoose.model('Video', videoSchema);
mongoose.col.dirModel = mongoose.model('Dir', dirSchema);

module.exports = mongoose;