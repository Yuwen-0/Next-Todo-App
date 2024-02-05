import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) { 
  request.headers.set('Cache-Control', 'no-store, max-age=0');
  try {
    const todos = await sql`SELECT * FROM todos;`;
    return NextResponse.json({ todos }, { status: 200 });
  } catch (error: any) {
    console.error('Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}