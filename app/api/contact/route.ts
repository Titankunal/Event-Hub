import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Configure transporter using Gmail (or any SMTP service)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // your Gmail address
        pass: process.env.MAIL_PASS, // your App Password
      },
    })

    const mailOptions = {
      from: email,
      to: process.env.MAIL_USER, // your email to receive messages
      subject: `New Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error: any) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email", details: error.message }, { status: 500 })
  }
}
