import express from 'express';

const router = new express.Router();

router.get('/test', (req, res, next) => {
	return res
	    .status(200)
	    .json({
	        res: 'test'
	    })
	    .end();
});

export default router;