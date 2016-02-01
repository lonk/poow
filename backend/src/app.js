import express from 'express';
import models from './models';

const app = express();

app.locals.models = models;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(8082, () => {

});