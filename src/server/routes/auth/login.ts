import { Router } from 'express';
import * as passport from 'passport';
import { createToken } from '../../utilities/security/tokens';


const router = Router();

router.post('/', passport.authenticate('local'), async (req: any, res) => {
    try {
        let token = await createToken({ userid: req.user.id });
        res.json({token, userid: req.user.id, role: req.user.role} );
    } catch (error) {
        console.log(error);
    }
})




export default router