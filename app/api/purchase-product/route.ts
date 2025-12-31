import { NextResponse } from "next/server";
import { getUserFromRequest } from "@/lib/auth";
import { orders } from "@/lib/mock-db";

export async function POST(req: Request) {
  const user = getUserFromRequest(req as any);

  if (!user) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const { product_id } = await req.json();

  const order = {
    id: `ORD${Date.now()}`,
    total_amount: 899,
    payment_status: "Paid",
    product_id,
  };

  orders.push(order);

  return NextResponse.json({
    message: "Order created successfully",
    order,
  });
}
