'use strict';

var passport = require('passport');

module.exports = {
    register: function (req, res) {

        /** Username and email must be unique thus the function 
         below checks for this two field before creating a new user **/
        var params = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            role_id: req.body.roles,
            login_type: req.body.login_type
        };
        //check for email
        Users.findOne({
            email: params.email
        }).exec((err, usr) => {
            if (err) {
                return res.serverError(err);
            }

            if (!usr) {

                //check for username
                Users.findOne({
                    username: params.username
                }).exec((err, usr) => {
                    if (err) {
                        return res.serverError(err);
                    }

                    if (!usr) {
                        if (!params.role_id) {
                            params.role_id = 4;
                        }
                        Users.create(params).exec(function (err, user) {
                            if (err) {
                                res.serverError(err);
                            }
                            else {
                                res.send(user);
                            }
                        });
                    } else {
                        console.log(usr);
                        var response = {
                            message: 'Username already exists!',
                            error: 401,
                        }
                        return res.json(response);
                    }
                });
            } else {
                console.log(usr);
                var response = {
                    message: 'Email already exists!',
                    error: 401,
                }
                return res.json(response);
            }
        })


    },

    login: function (req, res, next) {
        console.log(req.body);
        passport.authenticate('local', { failureRedirect: '/login' }, function (err, user, response) {
            if (err) {
                console.log(err);
                return next(err);
            }

            if (user) {
                res.json(response);
            }
            else {
                res.json({
                    message: 'Bad username/password combination',
                    error: 401
                });
            }
        })(req, res, next);
    },

    facebookAuth: function (req, res, next) {
        passport.authenticate('facebook', { scope: ['email', 'user_about_me'] })(req, res, next);
    },

    facebookCallback: function (req, res, next) {
        passport.authenticate('facebook', function (err, user) {
            res.json(user);
        })(req, res, next);
    },

    logout: function (req, res) {
        delete req.logout();
        res.json({ success: true })
    }
}