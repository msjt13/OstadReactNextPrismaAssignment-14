import {verifyToken} from "@/utility/JWTHelper";

export async function checkCookieAuth(req) {

  const token_cookie = req.cookies.get(process.env.COOKIE_NAME);
  const token = token_cookie['value'];
  console.log('token: ', token)

  if (!token) return false;

  const payload = await verifyToken(token);

  if (!payload) return false;

  return payload;
}