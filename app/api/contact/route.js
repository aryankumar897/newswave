import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";

export const revalidate = 0;
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
  const { name, email, message } = body;
  console.log({ name, email, message });

  try {










    const mailOptions = {
      to: "akumar07092000@gmail.com", // recipient's email
      from: email, // sender's email

      subject: "Help me Request - News Portal",
      html: `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #2c3e50; text-align: center;">help me Request</h2>
        <p style="font-size: 16px; color: #333;">Dear User,</p>
        <p style="font-size: 16px; color: #333;">
        ${name}
        </p>
        <div style="text-align: center; margin: 20px 0;">
          <span style="display: inline-block; background-color: #ff4500; color: white; padding: 10px 20px; font-size: 18px; font-weight: bold; border-radius: 5px;">${email}</span>
        </div>
        <p style="font-size: 16px; color: #fff;   background-color: blue;">${message}</p>
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


