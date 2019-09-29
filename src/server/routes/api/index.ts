import * as express from 'express';
import bookRouter from './Books';
import categoryRouter from './Categories';
import { tokenCheckpoint } from '../../middlewares/authCheckpoint';



const router = express.Router();

router.use(tokenCheckpoint);
router.use('/books', bookRouter);
router.use('/categories', categoryRouter);


export default router;