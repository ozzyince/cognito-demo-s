var express = require('express')
var router = express.Router()
var cors = require('cors')

/* GET users listing. */
// router.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Credentials', true)
//   res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
//   res.header('Access-Control-Allow-Headers', 'authorization, Origin, X-Requested-With, Content-Type, Accept')
//   next()
// })
// router.all('*', cors());
// router.options('*', cors())
router.get('/', function (req, res, next) {
  // Here we can check the req.user.scope array contains the scope relevant for the REST API operation being invoked
  res.send('Successfully verified JWT token. Extracted information: ' + JSON.stringify(req.user))
})

module.exports = router
