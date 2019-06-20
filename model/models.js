const {mongoose,Schema} = require('../db/config');

const musicSchema = require('./MusicModel');
const videoSchema = require('./VideoModel');

mongoose.col = {};
mongoose.col.musicModel = mongoose.model('Music', musicSchema);
mongoose.col.videoModel = mongoose.model('Video', videoSchema);

module.exports = mongoose;