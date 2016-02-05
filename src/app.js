import fs from 'fs';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import models from './models';
import router from './controllers';

const app = express();

app.locals.models = models;

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json());
app.use(express.static('static/public'));

app.use('/api', router);

app.listen(8082, () => {

});