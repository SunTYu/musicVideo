const multer = require('multer');
const upload = multer({dest: 'temp'});
const router = require('./base');
const {musicModel} = require('../model/models').col;
const baseurl = 'localhost:3000'

router.get('/music', async (req, res) => {
    let page = req.query.page || 0;
    let size = req.query.size || 10;
    let musiclist = await musicModel.find({}).skip(page).limit(size);
    res.send(musiclist);
})
router.post('/music', upload.single('file'), (req, res) => {
    //let reg = /\.[^\.]+$/;
    console.log(req.file);
    let video = {
        name: req.body.name || req.file.originalname,
        discrip: req.body.discrip,
        url: baseurl + '/' + req.file.filename,
        dirName: req.body.dirName,
        dirUrl: req.body.dirUrl || Buffer.from(Date.now().toString(), 'ascii').toString('base64'),//所属父文件夹
        delete: false,
        mimetype: req.file.mimetype,
        type: req.body.type || true,
        //md5: String
    };
    videoModel.create(music, (err, doc) => {
        res.send(doc);
    })
})

module.exports = router;