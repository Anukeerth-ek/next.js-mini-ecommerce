import { NextResponse } from "next/server";
import { users } from "@/lib/store";

export async function POST(req: Request) {
  const { phone } = await req.json();

  if (!phone) {
    return NextResponse.json({ error: "Phone required" }, { status: 400 });
  }

  // fake OTP
  const otp = "123456";

  users.set(phone, { otp });

  return NextResponse.json({
    success: true,
    message: "OTP sent (use 123456)",
  });
}
