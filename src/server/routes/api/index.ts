import * as express from 'express';
import bookRouter from './Books';
import categoryRouter from './Categories';



const router = express.Router();


router.use('/books', bookRouter);
router.use('/categories', categoryRouter);


export default router;