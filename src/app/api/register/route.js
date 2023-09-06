import {NextResponse} from 'next/server'
import {createToken} from "@/utility/JWTHelper";
import {sendEmail} from "@/utility/MailHelper";

export async function POST(req, res) {

    const host = req.headers.get("host");

    const {email, password} = await req.json();

    console.log(email, password);

    const payload = {
        email: email,
        password: password
    };

    const token = await createToken(payload);

    const subject = "Verify your email address";
    const text = `Please click the link below to verify your email address. \n\n http://${host}/verify?token=${token}`;
    const email_result = sendEmail(email, subject, text);

    return NextResponse.json({success: true, token: token, email: email_result}, {status: 200});
}