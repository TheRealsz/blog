import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Ver como fazer esse tipo de autenticacao por meio do localStorage ou algo parecido
export function middleware(req: NextRequest) {
    // const token = localStorage.getItem('token')
    // if (!token) {
    //     return NextResponse.redirect('/auth/signup')
    // }
    // return NextResponse.next()
}

export const config = {
    matcher: ['/', '/auth/:path*'],
}   