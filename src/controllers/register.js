import express from 'express';
import bcrypt from 'bcryptjs';
import Promise from 'bluebird';

const hashBcrypt = Promise.promisify(bcrypt.hash);

const router = new express.Router();

router.post('/register', (req, res, next) => {
    if(req.body.userpass != req.body.userconf) {
        return next(new Error('Passwords are not equals'));
    }

    if(req.body.userpass.length < 6) {
        return next(new Error('Password is too short'));
    }

    if(req.body.username.length < 3 || req.body.username.length > 12) {
        return next(new Error('Username is too short or too long'));
    }

    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(req.body.usermail)) {
        return next(new Error('Mail is incorrect'));
    }

    req.app.locals.models.User.filter({
        pseudo: req.body.username
    }).run()
    .then((result) => {
        if(result.length > 0) {
            return next(new Error('Username already took by another user'));
        } else {
            return hashBcrypt(req.body.userpass, 10);
        }
    })
    .then((hash) => {
        return req.app.locals.models.User.save({
            pseudo: req.body.username,
            password: hash,
            email: req.body.usermail,
            bio: req.body.userbio
        });
    })
    .then((result) => {
        return res
            .status(200)
            .json({
                status: 'ok'
            })
            .end();
    });
});

export default router;