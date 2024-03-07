import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_eghhqUwQ_B89SvABNJ8xJvG9ocJarTzrB');

export async function POST(req,res) {
    try {
        const data = await req.json();
        const { name, sender, message } = data;

        console.log({ name, sender, message });

        const res = await resend.emails.send({
            from: sender,
            to: ['crpatel6212@gmail.com'],
            subject:`From  ${name}`,
            text: message,
        });

        console.log({ res });

        return NextResponse.json({
            message: 'Messege Sent  ',
            status: 'ok'
        });
    } catch (err) {
        console.error("Error sending email:", err.message);
        return NextResponse.json({
            message: 'Failed to send email',
            status: 'error'
        });
    }
}
