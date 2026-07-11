import { NextResponse } from 'next/server';
// Let's use relative path:
import { prisma as prismaClient } from '../../../lib/prisma';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['make', 'model', 'year', 'price', 'type', 'features'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Prepare features string (convert array to JSON string if it's an array)
    const features = Array.isArray(body.features) 
      ? JSON.stringify(body.features) 
      : String(body.features);

    const vehicle = await prismaClient.vehicle.create({
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

    return NextResponse.json(vehicle, { status: 201 });
  } catch (error) {
    console.error('Error adding vehicle:', error);
    return NextResponse.json(
      { error: 'Failed to add vehicle' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const vehicles = await prismaClient.vehicle.findMany({
      orderBy: { createdAt: 'desc' }
    });
    
    // Parse features back to array for the frontend
    const formattedVehicles = vehicles.map(v => ({
      ...v,
      features: (function() {
        try { return JSON.parse(v.features); }
        catch (e) { return v.features.split(','); }
      })()
    }));

    return NextResponse.json(formattedVehicles);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch vehicles' },
      { status: 500 }
    );
  }
}
