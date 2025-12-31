import { NextResponse } from "next/server";
import { users } from "@/lib/mock-db";
import { signToken } from "@/lib/jwt";

export async function POST(req: Request) {
     const { phone_number } = await req.json();

     const existingUser = users.find((u) => u.phone_number === phone_number);

     if (existingUser) {
          return NextResponse.json({
               otp: "1234",
               token: {
                    access: signToken({ phone_number }),
               },
               user: true,
          });
     }

     return NextResponse.json({
          otp: "5678",
          user: false,
     });
}
