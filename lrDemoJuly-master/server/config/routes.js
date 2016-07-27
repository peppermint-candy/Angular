var user = require('../controllers/users.js')

module.exports = function (app) {
  app.post('/register', user.register)
  app.post('/login', user.login)
  app.post('/logout', user.logout)
  app.get('/session', user.session)
}
