import "dotenv/config";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";

const migrationClient = postgres(process.env.DATABASE_URL!, { max: 1 });

async function runMigrations() {
 await migrate(drizzle(migrationClient), {
  migrationsFolder: "./src/drizzle/migrations",
});
   await migrationClient.end();
}

runMigrations().catch((error) => {
   console.error("Migration failed:", error);
   process.exit(1);
});