import { NextResponse } from 'next/server';
import axios from "axios";

export async function POST(request) {
    const data = await request.json()

    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/hitcount/${data.n_id}`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        // n_id: data.n_id
    });

    return NextResponse.json(data.n_id)
}
