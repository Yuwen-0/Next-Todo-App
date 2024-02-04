import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) { 
  const todos = await sql`SELECT * FROM todos;`;
  return NextResponse.json({ todos }, { status: 200 });
}