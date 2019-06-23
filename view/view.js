const router = require('./base');
const path = require('path')

router.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

module.exports = router;