var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = {
  register: function( req,res) {
    // res.json({ status: true, session: session})
    console.log("In register", req.body)
    var user = new User(req.body)
    user.save( function(err) {
      if (err) {
        console.log("ERRRRRRRRRRRRRRRRRRr", err)
        res.json({status: false, errors: err })
      } else{
        console.log('hey mint')
        req.session['userInfo'] = {
          id: user._id,
          first_name: user.first_name
        }

        res.json({status:true, userInfo: req.session['userInfo'] })
      }
    })
  },

  login: function( req,res) {
    User.findOne({email: req.body.email}, function(err, user) {
      if(err) res.json({status:false, errors:err})
      if(user) {
        if(user.validPassword(req.body.password)) {
          req.session['userInfo'] = {
            id: user._id,
            first_name: user.first_name
          }
          res.json({status:true, userInfo: req.sesison['userInfo']})
        }
      }else{
        res.json({status: false, errors: 'User not found '})
      }
    })
  },

  logout: function (req,res) {
    req.session.destroy(function (err) {
      if (err) res.json({status: false, errors: err})
      res.json({status: true})
    })
  }

}
