const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    account_created: {
        type: String,
        default: Date.now()
    }
})


userSchema.pre('save', function(next){
    let user = this
    if(!user.isModified('password')) return next()
    bcrypt.genSalt(10, function (err, salt){
        if(err) return next(err)
        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err)
            
            user.password = hash
            next()
        })
    })
})

userSchema.methods.comparePassword = function(candidatePass, cb){
    bcrypt.compare(candidatePass, this.password, function(err, isMatch) {
        if(err) return cb(err)

        cb(null, isMatch)
    })
}

const userModel = mongoose.model('user', userSchema)
module.exports = userModel