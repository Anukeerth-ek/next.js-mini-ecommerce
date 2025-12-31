import { NextResponse } from "next/server";
import { users } from "@/lib/mock-db";
import { signToken } from "@/lib/jwt";

export async function POST(req: Request) {
  const { name, phone_number } = await req.json();

  const user_id = `ARM${Date.now()}`;

  const newUser = {
    user_id,
    name,
    phone_number,
  };

  users.push(newUser);

  return NextResponse.json({
    token: {
      access: signToken({ phone_number }),
    },
    user_id,
    name,
    phone_number,
    message: "Login Successful",
  });
}
