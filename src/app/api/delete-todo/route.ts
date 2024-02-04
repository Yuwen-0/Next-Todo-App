import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 //todo şu silmedeki id ile local den silmesini kaldır taskla silsin şurdanda tabledaki idyi bigserial yap
export async function POST(request: Request) {
  const req = await request.json();
  console.log(req);
  try {
  await sql`DELETE FROM todos WHERE id = ${req.id} AND task_name = ${req.task}`;
  } catch (error) {
    console.error(error);
  }
  return new NextResponse(JSON.stringify(req), { status: 200 });
}