/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var md5 = require('md5');
module.exports = {

  attributes: {
    full_name: {
      type: 'string'
    },
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string'
    },
    phone: {
      type: 'string'
    },
    last_seen: {
      type: 'datetime'
    },
    user_images: {
      type: 'string'
    },
    ic: {
      type: 'string'
    },
    login_type: {
      type: 'string'
    },
    role_id: {
      type: 'integer'
    },
    hasMobile: {
      type: 'integer',
      defaultsTo: 0
    },
    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    },
  },
  beforeCreate: function (user, cb) {
    user.password = md5(user.password);
    cb();
  }
};

