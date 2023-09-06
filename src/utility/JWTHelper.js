import {jwtVerify, SignJWT} from "jose";

export async function createToken(payload) {

  const key = new TextEncoder().encode(process.env.JWT_SECRET);

  return await new SignJWT(payload)
      .setProtectedHeader({alg: 'HS256'})
      .setIssuedAt()
      .setIssuer(process.env.JST_ISSUER)
      .setExpirationTime(process.env.JWT_EXPIRATION_TIME)
      .sign(key);
}

export async function verifyToken(token) {

      const key = new TextEncoder().encode(process.env.JWT_SECRET);
      const result = await jwtVerify(token, key);
      return result['payload'];
}