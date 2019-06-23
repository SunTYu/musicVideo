const router = require('./base');
const {dirModel} = require('../model/models').col;

router.post('/addMusicDir', (req, res) => {
    let dir = {
        name: req.body.name,
        discrip: req.body.discrip,
        url: Buffer.from(Math.random() * 10 + Date.now().toString(), 'ascii').toString('base64'),
        type: 'music'
    }
    dirModel.create(dir, (err, doc) => {
        res.send(doc);
    })
})

router.post('/addVideoDir', (req, res) => {
    let dir = {
        name: req.body.name,
        discrip: req.body.discrip,
        url: Buffer.from(Math.random() * 10 + Date.now().toString(), 'ascii').toString('base64'),
        type: 'video'
    }
    dirModel.create(dir, (err, doc) => {
        res.send(doc);
    })
})

router.get('/music', (req, res) => {
    dirModel.find({type: 'music'}, (err, docs) => {
        res.send(docs);
    });
})
router.get('/video', (req, res) => {
    dirModel.find({type: 'video'}, (err, docs) => {
        res.send(docs);
    });
})
module.exports = router;