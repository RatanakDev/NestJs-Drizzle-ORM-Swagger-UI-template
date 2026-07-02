import { defineConfig } from 'drizzle-kit'
import 'dotenv/config'

export default defineConfig({
    // database connection options
    dialect: 'postgresql',
    // path to your schema files
    schema: './src/drizzle/schema/**/*.ts',
    // path to your migration files
    out: './src/drizzle/migrations',
    // database connection
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    // other options
    strict:true,
    verbose: true,
})