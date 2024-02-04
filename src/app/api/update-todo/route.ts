import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function POST(request: Request) {
  const req = await request.json();
  console.log(req);
  await sql`UPDATE todos SET is_completed = ${req.is_done} WHERE id = ${req.id}`;
  return new NextResponse(JSON.stringify(req), { status: 200 });
}