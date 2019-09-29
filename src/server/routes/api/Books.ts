import {Router} from 'express';
import db from '../../db';
import {isAdmin} from '../../middlewares/authCheckpoint';



const router = Router();



router.get(`/`, async (req, res, next) => {
    try {
        let books: any = await db.Books.getAll();
        res.json(books);
    } catch (error) {
        console.log(error)
        res.status(500).json('The code is not working');
    }
})

router.get(`/:id`, async (req, res, next) => {
    try {
        let [book]: any = await db.Books.getOne(req.params.id);
        res.json(book);
    } catch (error) {
        console.log(error);
        res.status(500).json('This code is not working');
    }
})

router.delete(`/:id`, isAdmin, async (req, res, next) => {
    try {
        let result = await db.Books.destroy(req.params.id);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json("this code is not working");
    }
})

router.post(`/`, isAdmin, async (req, res, next) => {
   try {
       let result = await db.Books.insertOne(req.body.title, req.body.author, req.body.price, req.body.categoryid);
       res.json(result);
   } catch (error) {
       console.log(error);
       res.status(500).json('This code not working');
   }
})

router.put(`/:id`, isAdmin, async (req, res, next) => {
    try {
        let result = await db.Books.edit(req.body.title, req.body.author, req.body.price, req.params.id);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json("This code ain't working");
    }
})

export default router;