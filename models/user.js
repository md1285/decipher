const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: String,
    email: {
        type: String,
        required: true
    },
    password: String,
}, {timestamps: true});

userSchema.set('toJSON', {
    transform: function(doc, ret) {
      // remove the password property when serializing doc to JSON
      delete ret.password;
      return ret;
    }
  });

module.exports = mongoose.model('User', userSchema);