import express from 'express';
import bcrypt from 'bcryptjs';
import Promise from 'bluebird';
import jwt from 'jsonwebtoken';

const secret = 'test';
const tokenOptions = {
    expiresIn: '24h'
};

const compareBcrypt = Promise.promisify(bcrypt.compare);

const router = new express.Router();

router.post('/login', (req, res, next) => {
    let user;
    req.app.locals.models.User.filter({
        pseudo: req.body.username
    }).run()
    .then((result) => {
        if(result.length == 0) {
            return next(new Error('User not found'));
        } else {
            user = result[0];
            return compareBcrypt(req.body.userpass, result[0].password);
        }
    })
    .then((match) => {
        if(!match) {
            return next(new Error('User not found'));
        } else {
            delete user.password;
            user.token = jwt.sign({
                id: user.id
            }, secret, tokenOptions);
            return res
                .status(200)
                .json({
                    user
                })
                .end();
        }
    });
});

export default router;