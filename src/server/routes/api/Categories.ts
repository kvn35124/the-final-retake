import {Router} from 'express';
import db from '../../db';

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        let results = await db.Categories.getAll();
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json("This code ain't working");
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        let results = await db.Categories.getOne(req.params.id);
        res.json(results);
    } catch (error) {
        console.log(error);
        res.status(500).json("This code does not work");
    }
})





export default router;