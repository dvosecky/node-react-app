const router = require('express').Router()

router.get('/hello', (req, res, next) => {
	res.send('hello from the API!')
})

module.exports = router