import fs from 'fs';
import path from 'path';
import express from 'express';

// Controllers subrouters
const router = new express.Router();

const controllers = fs
    .readdirSync(__dirname)
    .filter(f => (f.slice(-3) === '.js' && f !== 'index.js'))
    .sort()
    .map(f => require(path.join(__dirname, f)).default);


controllers.forEach(controller => {
    router.use(controller);
});

export default router;