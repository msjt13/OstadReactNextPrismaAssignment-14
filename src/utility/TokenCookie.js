import {createToken} from "@/utility/JWTHelper";

export async function tokenCookie(payload) {

    const token = await createToken(payload);

    return {
        'Set-Cookie': `${process.env.COOKIE_NAME}=${token}; Path=/; HttpOnly; Max-Age=${process.env.COOKIE_MAX_AGE}; SameSite=Strict;`,
    }
}