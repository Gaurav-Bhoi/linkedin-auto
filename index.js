import './config/envloader.js';
import app from './src/app.js';
import serverlessExpress from '@codegenie/serverless-express';

let handler;

if (process.env.NODE_ENV === 'production') {
  handler = serverlessExpress({ app });
} else {
  app.listen(3000, () => console.log('Server is running on port 3000'));
}

export { handler };
