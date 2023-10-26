import { NextResponse } from 'next/server';
import {headers} from 'next/headers'

export async function POST(req) {
    const {token, user} = await req.json();

    const cookies = headers()
    cookies.set('auth', token);

   


    return new Response('Hello, Next.js!', {status: 200})


}