import nodemailer from "nodemailer";
import {NextResponse} from "next/server";

export async function sendEmail(toEmail, subject, text) {

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    const mailOptions = {
        from: 'Sarwar Jahan <msjt13@gmail.com>',
        to: toEmail,
        subject: subject,
        text: text
    };

    try {
        const result = await transporter.sendMail(mailOptions);
        return {success: true, response: result};
    } catch (error) {
        console.error(error);
        return {success: false, response: error};
    }
}