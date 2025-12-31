import { NextResponse } from "next/server";
import { getUserFromRequest } from "@/lib/auth";
import { orders } from "@/lib/mock-db";

export async function GET(req: Request) {
  const user = getUserFromRequest(req as any);

  if (!user) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  return NextResponse.json({
    orders,
  });
}
