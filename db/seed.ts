import { db, like } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(like).values([
    { id: "a", likes: 2 },
    { id: "a2", likes: 2 },
  ]);
}
