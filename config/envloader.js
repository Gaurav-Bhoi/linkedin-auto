import dotenv from 'dotenv';
import path from 'path';

const env = process.env.NODE_ENV || 'development';

const result = dotenv.config({
  path: path.resolve(process.cwd(), `.env.${env}`),
});

if (result.error) {
  throw result.error;
}

console.log(`Loaded ${env} environment variables`);
