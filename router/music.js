const multer = require('multer');
const upload = multer({dest: 'temp'});
const router = require('./base');
const {musicModel} = require('../model/models').col;
const baseurl = 'http://mv.qvjunping.me'

router.get('/music/:dirUrl', async (req, res) => {
    let page = req.query.page || 0;
    let size = req.query.size || 10;
    let {dirUrl} = req.params;
    let musiclist = await musicModel.find({'dirUrl': dirUrl}).skip(Number(page)).limit(Number(size));
    res.send(musiclist);
})
router.post('/music/:dirUrl', upload.single('file'), (req, res) => {
    //let reg = /\.[^\.]+$/;
    let {dirUrl} = req.params;
    let music = {
        name: req.body.name || req.file.originalname,
        discrip: req.body.discrip,
        url: baseurl + '/' + req.file.filename,
        dirName: req.body.dirName,
        dirUrl: dirUrl || Buffer.from(Date.now().toString(), 'ascii').toString('base64'),//所属父文件夹
        delete: false,
        mimetype: req.file.mimetype,
        type: req.body.type || true,
        //md5: String
    };
    musicModel.create(music, (err, doc) => {
        res.send(doc);
    })
})

module.exports = router;