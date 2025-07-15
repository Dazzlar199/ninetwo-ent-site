import { NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs";

export async function POST(req) {
  try {
    const data = await req.json();

    const result = await emailjs.send(
      process.env.NEXT_EMAILJS_SERVICE_ID,
      process.env.NEXT_EMAILJS_TEMPLATE_ID,
      {
        name: data.name,
        birth: data.birth,
        gender: data.gender,
        email: data.email,
        message: data.message,
        vocalLink: data.vocalLink,
        danceLink: data.danceLink,
        sns: data.sns,
      },
      {
        publicKey: process.env.NEXT_EMAILJS_PUBLIC_KEY,
        privateKey: process.env.NEXT_EMAILJS_PRIVATE_KEY,
      }
    );

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("EmailJS Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
