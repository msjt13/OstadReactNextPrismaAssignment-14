import {NextResponse} from "next/server";
import {jwtVerify} from "jose";
import {verifyToken} from "@/utility/JWTHelper";
import {tokenCookie} from "@/utility/TokenCookie";

export async function POST(req, res) {

    const {token} = await req.json();

    const payload = await verifyToken(token);

    if (!payload) return NextResponse.json({success: false, response: "Invalid token"}, {status: 500});

    const cookieHeader = await tokenCookie(payload);

    return NextResponse.json({success: true, response: payload}, {status: 200, headers: cookieHeader});
}