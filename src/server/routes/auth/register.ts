import { Router } from 'express';
import { hashPassword } from '../../utilities/security/passwords';
import db from '../../db';
import { createToken } from '../../utilities/security/tokens';


const router = Router();

router.post('/', async (req, res) => {
    try {
        const user = {...req.body};
        user.password = hashPassword(req.body.password);
        let { insertId }: any = await db.Users.insert(user.email, user.password, user.role, user.name);
        let token = await createToken({ userid: insertId });
        res.json({
            token,
            userid: insertId,
            role: 'admin'
        });
    } catch (error) {
        console.log(error);
    }
})




export default router;