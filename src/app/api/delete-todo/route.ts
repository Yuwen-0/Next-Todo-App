import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(request: Request) {
  const req = await request.json();
  console.log(req);
  try {
  await sql`DELETE FROM todos WHERE id = ${req.id}`;
  } catch (error) {
    console.error(error);
  }
  return new NextResponse(JSON.stringify(req), { status: 200 });
}