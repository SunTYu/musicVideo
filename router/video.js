const multer = require('multer');
const upload = multer({dest: 'temp'});
const router = require('./base');
const {videoModel} = require('../model/models').col;
const baseurl = 'http://mv.qvjunping.me'

router.get('/video/:dirUrl', async (req, res) => {
    let page = req.query.page || 0;
    let size = req.query.size || 10;
    let {dirUrl} = req.params;
    let videolist = await videoModel.find({'dirUrl': dirUrl}).skip(Number(page)).limit(Number(size));
    res.send(videolist);
})
router.post('/video/:dirUrl', upload.single('file'), (req, res) => {
    //let reg = /\.[^\.]+$/;
    console.log(req.file);
    let {dirUrl} = req.params;
    let video = {
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
    console.log(video);
    videoModel.create(video, (err, doc) => {
        res.send(doc);
    })
})

module.exports = router;