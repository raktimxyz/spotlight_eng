import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || 1;
    const cat = searchParams.get('cat');

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category-contents/${cat}?page=${page}`, {
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