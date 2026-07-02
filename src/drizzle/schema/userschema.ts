
import { pgTable,timestamp,uuid, varchar } from 'drizzle-orm/pg-core';
import { roleEnum } from './roleEnum';

export const user = pgTable('user', {
    id: uuid('id').primaryKey(),
    username: varchar('username', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    role: roleEnum('role').notNull().default('user'),
    password: varchar('password', { length: 255 }).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});