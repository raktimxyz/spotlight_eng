import { NextResponse } from 'next/server';

export async function GET() {

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/date`, {
            headers: {
                "Accept-Encoding": "gzip,deflate,compress",
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('API সার্ভার থেকে ডাটা আনতে সমস্যা হয়েছে');
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: 'ডাটা লোড করতে সমস্যা হয়েছে' },
            { status: 500 }
        );
    }
}