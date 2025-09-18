import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
	try {
		const { name, email, message, service } = await req.json();

		// Configure transporter
		const transporter = nodemailer.createTransport({
			service: "gmail", // Or use Outlook, Yahoo, or custom SMTP
			secure: true,
			auth: {
				user: process.env.SMTP_USER, // your email
				pass: process.env.SMTP_PASS, // app password
			},
		});

		// Send email
		await transporter.sendMail({
			from: `"Prosmith Website" <${process.env.SMTP_USER}>`,
			to: process.env.RECEIVER_EMAIL, // your main email
			subject: "New Contact Form Submission",
			html: `
        <h2>New Contact Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
		});

		return NextResponse.json({
			success: true,
			message: "Email sent successfully",
		});
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ success: false, message: "Failed to send email" },
			{ status: 500 }
		);
	}
}
