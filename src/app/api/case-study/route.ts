import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// GET handler for case studies
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'Missing project ID' }, { status: 400 });
  }

  try {
    const filePath = path.join(process.cwd(), `src/content/${id}.md`);
    const content = fs.readFileSync(filePath, 'utf8');
    return NextResponse.json({ content });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
  }
}
