import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const taskName = searchParams.get('task_name');

    if (!taskName) {
      throw new Error('Task name is required');
    }

    // Use DEFAULT for the id column if you're using BIGSERIAL
    await sql`INSERT INTO todos (task_name, is_done) VALUES (${taskName}, false)`;

    const todos = await sql`SELECT * FROM todos;`;

    return NextResponse.json({ todos }, { status: 200 });
  } catch (error: any) {
    console.error('Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
