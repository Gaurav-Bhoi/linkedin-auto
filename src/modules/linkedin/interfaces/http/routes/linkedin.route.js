import { Router } from 'express';
import { linkedinPostController } from '../controller/controller.index.js';

const linkedinRouter = Router();

linkedinRouter.get('/postArticle', linkedinPostController);

export default linkedinRouter;
