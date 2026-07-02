// src/db/schema/enums.ts
import { pgEnum } from 'drizzle-orm/pg-core';

export const roleEnum = pgEnum('role', ['admin', 'user']);