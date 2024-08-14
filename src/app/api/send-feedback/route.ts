import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

async function handler(req: NextRequest) {
  const body = await req.json()
  const { feedback } = body

  // create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'dev@aidanlowson.com',
      pass: process.env.EMAIL_PASSWORD!,
    },
    tls: {
      rejectUnauthorized: false,
    },
  } as nodemailer.TransportOptions)
  try {
    await transporter.sendMail({
      from: '"FreeQRGen.net" <dev@aidanlowson.com>',
      to: 'dev@aidanlowson.com',
      subject: 'New Feedback from FreeQRGen.net',
      text: `Feedback:${feedback}`,
      html: `
        <p><strong>Feedback:</strong></p>
        <p>${feedback}</p>
      `,
    })
    return NextResponse.json({
      message: 'Successfully sent feedback',
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json({
      message: 'Failed to send feedback',
    })
  }
}

export { handler as GET, handler as POST }
