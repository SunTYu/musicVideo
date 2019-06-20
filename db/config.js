const mongoose = require('mongoose');
const dburl = 'mongodb://localhost:27017/mv'


mongoose.connect(dburl, {useNewUrlParser: true});
module.exports = {
    mongoose,
    Schema: mongoose.Schema,
}