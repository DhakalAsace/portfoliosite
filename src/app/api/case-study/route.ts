import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// GET handler for case studies
export async function GET(request: NextRequest) {
  try {
    // Get the id from searchParams instead of params
    const id = request.nextUrl.searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'Missing case study ID' },
        { status: 400 }
      );
    }

    // Your case study fetching logic here
    const filePath = path.join(process.cwd(), `src/content/${id}.md`);
    const content = fs.readFileSync(filePath, 'utf8');
    return NextResponse.json({ content });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch case study' },
      { status: 500 }
    );
  }
}
