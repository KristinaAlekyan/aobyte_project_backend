import 'dotenv/config';

export const dbConfig = {
  dbUrl: process.env.DB_URL,
};
export const appConfig = {
  port: process.env.PORT,
};
