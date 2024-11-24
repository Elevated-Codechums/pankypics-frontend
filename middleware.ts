import { NextResponse } from "next/server";

interface MiddlewareRequest {
	cookies: {
		get: (name: string) => string | undefined;
	};
	nextUrl: {
		clone: () => MiddlewareUrl;
	};
}

interface MiddlewareUrl {
	pathname: string;
	clone: () => MiddlewareUrl;
}

export async function middleware(req: MiddlewareRequest) {
	const token = req.cookies.get("authToken"); // Assuming an auth token is stored in cookies

	const url = req.nextUrl.clone();
	const { pathname } = url;

	// Redirect authenticated users away from /login or /register
	if (token && (pathname === "/login" || pathname === "/register")) {
		url.pathname = "/admin";
		return NextResponse.redirect(url.toString());
	}

	// Protect /admin route for unauthenticated users
	if (!token && pathname.startsWith("/admin")) {
		url.pathname = "/login";
		return NextResponse.redirect(url.toString());
	}

	// Proceed as usual
	return NextResponse.next();
}
