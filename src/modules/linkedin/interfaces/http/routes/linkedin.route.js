import { Router } from 'express';
// import { linkedinPostController, linkedinLogin } from '../controller/controller.index.js';
import { LinkedinController } from '../controller/controller.index.js';

const linkedinRouter = Router();

linkedinRouter.get('/login', LinkedinController.handleLogin);
linkedinRouter.get('/getAccessToken', LinkedinController.getAccessToken);
linkedinRouter.get('/authorizationCallback', LinkedinController.getAccessToken);

export default linkedinRouter;
