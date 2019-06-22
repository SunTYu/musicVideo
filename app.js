const express = require('express');
const fs = require('fs');
const path = require('path');
const music = require('./router/music');
const video = require('./router/video');
const app = express();

app.use(express.static(__dirname + '/temp'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use('/', music);
app.use('/', video);
app.listen(3000);