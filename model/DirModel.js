const {Schema} = require('../db/config.js');

const DirSchema = new Schema({
    name: String,
    discrip: String,
    url: String,
    type: String,
});

module.exports = DirSchema;