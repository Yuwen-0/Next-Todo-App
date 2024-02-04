import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const TaskName = searchParams.get('task_name');
  try {
    if (!TaskName) throw new Error('Pet and owner names required');
    await sql`INSERT INTO todos (task_name) VALUES (${TaskName})`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const todos = await sql`SELECT * FROM todos;`;
  return NextResponse.json({ todos }, { status: 200 });
}