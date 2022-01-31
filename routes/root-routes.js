const express = require(`express`)
const router = express.Router()

router.get('/', (req, res) => res.render('Home'))
router.get('*', (req, res) => res.render('err/404'));

module.exports = router