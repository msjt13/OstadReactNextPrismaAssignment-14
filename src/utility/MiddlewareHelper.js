import {verifyToken} from "@/utility/JWTHelper";

export async function checkCookieAuth(req) {

  const cookies = req.cookies;
  const token = cookies[process.env.COOKIE_NAME];

  if (!token) return false;

  const payload = await verifyToken(token);

  if (!payload) return false;

  return payload;
}