console.log('loaded models')
var mongoose = require('mongoose'),
  bcrypt = require('bcrypt')

var UserSchema = new mongoose.Schema({
  first_name: {type: String, required: true, minlength: 2, maxlength: 256},
  last_name: {type: String, required: true, minlength: 2, maxlength: 256},
  email: {type: String, required: true, minlength: 6, maxlength: 256, unique: true},
  password: {type: String, required: true, minlength: 8, maxlength: 256}
}, {timestamps: true})

UserSchema.methods.validPassword = function (enterdPassword) {
  return bcrypt.compareSync(enterdPassword, this.password)
}

UserSchema.pre('save', function (next) {
  var user = this
  bcrypt.genSalt(10, function (err, salt) {
    if (err) console.log(err)
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) console.log(err)
      user.password = hash
      next()
    })
  })
})

mongoose.model('User', UserSchema)
