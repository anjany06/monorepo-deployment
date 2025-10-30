import { client } from "@repo/db/client";

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default async function Home() {
  const user = await client.user.findFirst();
  
  return (
    <div>
      <h1>Hello World from Next.js!</h1>
      {user ? (
        <p>User found: {user.username}</p>
      ) : (
        <p>No user found</p>
      )}
    </div>
  );
}