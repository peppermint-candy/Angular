var User = mongoose.model('User')
module.exports = (function () {
  return {
    index: function (req, res) {
      User.find({}, function (err, users) {
        if (err) res.json({status: false, errors: err})
        res.json({status: true, users: users, session: req.session})
      })
    },
    create: function (req, res) {
      console.log('here', req.body)
      var user = new User(req.body)
      user.save(function (err) {
        if (err) res.json({status: false, errors: err})
        req.session.userInfo = {
          id: user._id,
          first_name: user.first_name
        }
        console.log('yaaaay', req.session)
        res.json({status: true, user: req.session.userInfo})
      })
    },
    login: function (req, res) {
      User.findOne({email: req.body.email}, function (err, user) {
        if (err) res.json(err)
        if (user.validPassword(req.body.password, user.password)) {
          req.session.userInfo = {
            id: user._id,
            first_name: user.first_name
          }
          res.json({status: true, user: req.session.userInfo})
        } else {
          res.json({status: false, errors: 'Login not valid'})
        }
      })
    },
    logout: function (req, res) {
      req.session.destroy(function (err) {
        if (err) res.json({status: false, errors: err})
        res.json({status: true})
      })
    },
    session: function (req, res) {
      res.json({status: true, user: req.session.userInfo})
    }
  }
})()
