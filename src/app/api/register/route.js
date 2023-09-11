import {NextResponse} from 'next/server'
import {createToken} from "@/utility/JWTHelper";
import {sendEmail} from "@/utility/MailHelper";
import {absoluteUrl} from "@/utility/utils";

export async function POST(req, res) {

    const host = req.headers.get("host");

    const {email, password} = await req.json();

    console.log(email, password);

    const payload = {
        email: email,
        password: password
    };

    const token = await createToken(payload);
    const verify_url = absoluteUrl('/verify?token=' + token,);

    const subject = "Verify your email address";
    const text = `Please click the link below to verify your email address. \n\n ${verify_url}`;
    const email_result = await sendEmail(email, subject, text);

    return NextResponse.json({success: true, token: token, email: email_result}, {status: 200});
}