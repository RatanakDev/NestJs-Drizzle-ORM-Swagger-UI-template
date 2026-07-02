
import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { schemaConfig } from './schemaConfig';
import 'dotenv/config';

@Injectable()
export class DrizzleService implements OnModuleInit, OnModuleDestroy {
    private readonly logger = new Logger(DrizzleService.name);

    // Drizzle DB instance
    private db!: ReturnType<typeof drizzle>;

    // Keep a reference to the pg Pool so we can close it gracefully on shutdown
    private pool!: Pool;

    async onModuleInit() {
        if (!process.env.DATABASE_URL) {
            // Fail fast with a clear error instead of a cryptic pg connection error later
            throw new Error('DATABASE_URL is not defined in environment variables');
        }

        // Create a new pg Pool using the connection string from environment variables
        this.pool = new Pool({
            connectionString: process.env.DATABASE_URL,
        });

        // Attach Drizzle ORM to the pool, using our combined schema config
        this.db = drizzle(this.pool, { schema: schemaConfig });

    }

    //   run on module destroy to close the pool and avoid memory leaks
    async onModuleDestroy() {
        if (this.pool) {
            await this.pool.end();
            this.logger.log('Database connection pool closed');
        }
    }

    //   Provide a getter for the Drizzle DB instance so other services can use it
    get client() {
        return this.db;
    }
}
