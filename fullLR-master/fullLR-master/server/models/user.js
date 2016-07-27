var bcrypt = require('bcrypt')
var UsersSchema = new mongoose.Schema({
  first_name: {type: String, required: true, minlength: 2, maxlength: 256},
  last_name: {type: String, required: true, minlength: 2, maxlength: 256},
  email: {type: String, required: true, minlength: 2, maxlength: 256, unique: true},
  password: {type: String, required: true, minlength: 8, maxlength: 265}
}, {timestamps: true})

UsersSchema.pre('save', function (done) {
  var user = this
  bcrypt.genSalt(10, function (err, salt) {
    if (err) return err
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return err
      user.password = hash
      done()
    })
  })
})

UsersSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

mongoose.model('User', UsersSchema)
