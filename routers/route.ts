import express, {Request,Response,NextFunction} from 'express';
import { addLinks, getKey } from '../controller/link.controller';

const router = express.Router();

router.post('/',addLinks)
router.get('/:key',getKey)
export = router;
