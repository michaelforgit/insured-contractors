import { NextResponse } from 'next/server';

export async function GET(request: Request, context: { params: any }) {
  try {
    const { placeId } = context.params;

    const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${process.env.NEXT_PUBLIC_GOOGLE_API}`

    const response = await fetch(apiUrl, { mode: 'cors' });
    const data = await response.json();
    return NextResponse.json({ rating: data?.result?.rating });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error..." });
  }
}
