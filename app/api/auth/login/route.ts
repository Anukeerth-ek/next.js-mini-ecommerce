import { NextResponse } from "next/server";
import { users } from "@/lib/store";

export async function POST(req: Request) {
  const { phone } = await req.json();

  if (!phone) {
    return NextResponse.json(
      { error: "Phone number required" },
      { status: 400 }
    );
  }

  // Fake OTP (for now)
  const otp = "1234";

  // Store OTP in memory
  users.set(phone, {
    phone,
    otp,
    name: users.get(phone)?.name,
  });

  return NextResponse.json({
    success: true,
    otp, // ⚠️ frontend only (testing)
  });
}
