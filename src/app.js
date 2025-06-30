import express, { Router } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import linkedinRouter from './modules/linkedin/interfaces/http/routes/linkedin.route.js';

const app = express();
const stageRouter = Router();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

stageRouter.use('/linkedin', linkedinRouter);

app.use(`/`, stageRouter);

export default app;
