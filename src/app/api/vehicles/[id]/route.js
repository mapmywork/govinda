import { NextResponse } from 'next/server';
import { prisma as prismaClient } from '../../../../lib/prisma';

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();

    const features = Array.isArray(body.features) 
      ? JSON.stringify(body.features) 
      : String(body.features);

    const vehicle = await prismaClient.vehicle.update({
      where: { id },
      data: {
        make: String(body.make),
        model: String(body.model),
        year: parseInt(body.year),
        price: parseFloat(body.price),
        type: String(body.type),
        imageUrl: body.imageUrl || null,
        features: features,
        isAvailable: body.isAvailable !== undefined ? Boolean(body.isAvailable) : true,
      }
    });

    return NextResponse.json(vehicle, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update vehicle' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    
    await prismaClient.vehicle.delete({
      where: { id }
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete vehicle' }, { status: 500 });
  }
}
