// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
    const response = NextResponse.next();

    const host = request.nextUrl.hostname;
    console.log(host, "hosturl");
    response.headers.set("hostname", host);
    // www.mavrriq.com
    if (host === "www.mavrriq.com") {
        response.headers.set("x-host", host);
    }

    return response;
}
