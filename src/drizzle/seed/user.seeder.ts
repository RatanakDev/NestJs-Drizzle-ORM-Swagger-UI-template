import 'dotenv/config'; // must be the first import
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { v4 as uuidv4 } from 'uuid';
import { user } from '../schema/userschema';

async function seedUsers() {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
    });

    const db = drizzle(pool);

    try {
        // Check if any users already exist
        const existingUsers = await db.select().from(user);

        if (existingUsers.length > 0) {
            console.log('Users already exist. Skipping seed.');
            return;
        }

        const seedData = [
            {
                id: uuidv4(),
                username: 'admin',
                email: 'admin@gmail.com',
                role: 'admin' as const,
                password: 'admin123',
            },
        ];

        console.log('Seeding users...');

        const inserted = await db.insert(user).values(seedData).returning();

        console.log(`Inserted ${inserted.length} user(s).`);
    } catch (err) {
        console.error('Seeding failed:', err);
        throw err;
    } finally {
        await pool.end();
    }
}

seedUsers()
    .then(() => {
        console.log('Done.');
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });