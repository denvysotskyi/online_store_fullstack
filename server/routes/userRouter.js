const Router = require('express')
const router = new Router()

router.get('/auth', (req, res) => {
  res.json({ message: 'User is authenticated' })
})
router.post('/registration', )
router.post('/login', )

module.exports = router