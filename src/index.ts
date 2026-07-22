import { drizzle } from 'drizzle-orm/neon-http';

const dbUrl = process.env.DATABASE_URL;

if(!dbUrl){
    throw new Error('db not set');
}

const db=drizzle(dbUrl);

export {db};