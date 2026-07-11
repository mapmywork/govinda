import { NextResponse } from 'next/server';
import { prisma as prismaClient } from '../../../lib/prisma';

export async function GET() {
  try {
    const settings = await prismaClient.setting.findMany();
    // Convert array of {key, value} to object { key: value }
    const settingsObj = settings.reduce((acc, curr) => {
      acc[curr.key] = curr.value;
      return acc;
    }, {});
    
    return NextResponse.json(settingsObj, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    
    // Upsert each setting
    for (const [key, value] of Object.entries(body)) {
      await prismaClient.setting.upsert({
        where: { key },
        update: { value: String(value) },
        create: { key, value: String(value) },
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}
