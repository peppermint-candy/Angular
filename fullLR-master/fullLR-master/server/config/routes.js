var users = require('../controllers/users.js')

module.exports = function (APP) {
  APP.get('/users', users.index),
  APP.post('/login', users.login),
  APP.post('/register', users.create),
  APP.get('/logout', users.logout),
  APP.get('/session', users.session)
}
