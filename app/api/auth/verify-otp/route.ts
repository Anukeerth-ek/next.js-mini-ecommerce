import { NextResponse } from "next/server";
import { users } from "@/lib/store";
import { signToken } from "@/lib/jwt";

export async function POST(req: Request) {
  const { phone, otp, name } = await req.json();

  const user = users.get(phone);

  if (!user || user.otp !== otp) {
    return NextResponse.json({ error: "Invalid OTP" }, { status: 401 });
  }

  // Save name if new user
  if (name) {
    user.name = name;
  }

  users.set(phone, user);

  const token = signToken({ phone });

  const res = NextResponse.json({
    success: true,
    isNewUser: !user.name,
  });

  res.cookies.set("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  });

  return res;
}
