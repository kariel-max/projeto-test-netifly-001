import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', ( req: Request, res: Response) => {
    res.send('sua massagem foi resebida');
})

export {router};