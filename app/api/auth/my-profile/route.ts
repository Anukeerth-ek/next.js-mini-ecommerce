import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jwt";
import { users } from "@/lib/store";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const decoded = verifyToken(token) as { phone: string };
  const user = users.get(decoded.phone);

  return NextResponse.json({
    phone: decoded.phone,
    name: user?.name ?? null,
  });
}
