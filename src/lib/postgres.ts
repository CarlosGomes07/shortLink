import postgres from 'postgres';

export const sql = postgres('postgresql://carlos:docker1@localhost:5432/shortlinks')
