import fs from 'fs';
import path from 'path';
import express from 'express';
import models from './models';
import router from './controllers';

const app = express();

app.locals.models = models;

app.use(router);

app.listen(8082, () => {

});