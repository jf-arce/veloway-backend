import 'dotenv/config';

export const {
  PORT = 3000,
  DATABASE_URL,
  GEOCODING_API_KEY,
  SECRET_KEY_ACCESS_TOKEN,
  SECRET_KEY_REFRESH_TOKEN,
  NODE_ENV = 'development',
  FRONTEND_URL = 'http://localhost:3000'
} = process.env;