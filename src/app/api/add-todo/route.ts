import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const taskName = searchParams.get('task_name');
    const id = searchParams.get('id');
    console.log(taskName, id);
    if (!taskName || !id) {
      throw new Error('Missing task_name or id');
    }

    // Use DEFAULT for the id column if you're using BIGSERIAL
    await sql`INSERT INTO todos (id,task_name, is_completed) VALUES (${id},${taskName}, false)`;

    const todos = await sql`SELECT * FROM todos;`;

    return NextResponse.json({ todos }, { status: 200 });
  } catch (error: any) {
    console.error('Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
