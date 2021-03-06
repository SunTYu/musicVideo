const express = require('express');
const fs = require('fs');
const path = require('path');
const dir = require('./router/dir')
const music = require('./router/music');
const video = require('./router/video');
const app = express();

app.use(express.static(__dirname + '/temp'));
app.use(express.static(__dirname + '/view/static'));
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/test.html');
});

app.use('/', dir);
app.use('/', music);
app.use('/', video);
app.listen(3000);