var APP = require('./server/config/config.js')
require('./server/config/mongoose.js')
require('./server/config/routes.js')(APP)
APP.listen(process.env.PORT, function () {
  console.log(process.env.PORT)
})
