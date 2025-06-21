import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { OpenAIService } from './modules/AI/Infrastructure/Services/service.index.js';
import { ArticeUseCase } from './modules/linkedin/application/use-cases/usecase.index.js';
import linkedinRouter from './modules/linkedin/interfaces/http/routes/linkedin.route.js';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

new OpenAIService();
new ArticeUseCase();

app.use('/linkedin', linkedinRouter);
export default app;
