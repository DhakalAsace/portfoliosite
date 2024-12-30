import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Missing project ID' }, { status: 400 });
  }

  try {
    const filePath = path.join(process.cwd(), `src/content/${id}.md`);
    const content = fs.readFileSync(filePath, 'utf8');
    return NextResponse.json({ content });
  } catch {
    return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
  }
}