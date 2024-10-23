import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";


import nodemailer from "nodemailer";





const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'akumar07092000@gmail.com',
    pass: 'iksfeonedntyqdaz',
  },
});


export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  const { email } = body;
  console.log({ email });

  try {

  








    const mailOptions = {
      to: email, // recipient's email
      from: 'no-reply@newsportal.com', // sender's email

      subject: "Password Reset Request - News Portal",
      html: `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #2c3e50; text-align: center;">Password Reset Request</h2>
        <p style="font-size: 16px; color: #333;">Dear User,</p>
        <p style="font-size: 16px; color: #333;">
          You recently requested to reset your password for your News Portal account. Please use the code below to complete the process. This code is valid for only <strong>10 minutes</strong>.
        </p>
        <div style="text-align: center; margin: 20px 0;">
          <span style="display: inline-block; background-color: #ff4500; color: white; padding: 10px 20px; font-size: 18px; font-weight: bold; border-radius: 5px;">${resetCode}</span>
        </div>
        <p style="font-size: 16px; color: #333;">If you didn’t request this change, please disregard this email or contact support immediately.</p>
        <p style="font-size: 16px; color: #333;">Best Regards,<br>The News Portal Team</p>
      </div>
      <footer style="text-align: center; margin-top: 20px; font-size: 14px; color: #999;">
        © ${new Date().getFullYear()} News Portal. All rights reserved.<br>
        <a href="https://newsportal.com" style="color: #3498db; text-decoration: none;">Visit our website</a>
      </footer>
    </div>
  `,
    };


    await transporter.sendMail(mailOptions);





    return NextResponse.json({ msg: 'msg sent successfully' });


  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: err.message }, { status: 500 });

  }
}






https://myaccount.google.com/apppasswords?rapt=AEjHL4Nm-W7VQw2mUUu2uurgBEQwHOGsVya5Nzz9TnnuoZ11oxIsrIZITFcSBVjrm9qCTJCXYIekXKAhr4lWd0IYgtGJHSESM3bpXRzSxhO5fTz9y9uBNCM