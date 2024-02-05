import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const req = await request.json();

  try {
    const result = await sql`DELETE FROM todos WHERE id = ${req.id} RETURNING *`;
    // 'result' contains the deleted row, you can use it if needed
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }

  return new NextResponse(JSON.stringify(req), { status: 200 });
}
