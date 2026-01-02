import { NextResponse } from "next/server";
import { users } from "@/lib/store";
import { signToken } from "@/lib/jwt";

export async function POST(req: Request) {
  const { phone, otp, name } = await req.json();

  console.log("VERIFY INPUT", phone, otp);
  console.log("STORE USER", users.get(phone));

  const user = users.get(phone);

  if (!user || user.otp !== otp) {
    return NextResponse.json({ error: "Invalid OTP" }, { status: 401 });
  }

  if (name) user.name = name;

  const token = signToken({ phone });

  const res = NextResponse.json({
    phone,
    name: user.name,
  });

  res.cookies.set("token", token, {
    httpOnly: true,
    path: "/",
  });

  return res;
}
