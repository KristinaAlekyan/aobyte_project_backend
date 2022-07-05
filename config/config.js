import 'dotenv/config';

console.log("process.env.DB_URL", process.env.DB_URL)

export const dbConfig = {
    dbUrl: process.env.DB_URL,
};

export const appConfig = {
    port: process.env.PORT,
};
