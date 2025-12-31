import { NextRequest } from "next/server";
import { verifyToken } from "./jwt";

export const getUserFromRequest = (req: NextRequest) => {
  const auth = req.headers.get("authorization");
  if (!auth) return null;

  const token = auth.split(" ")[1];
  try {
    return verifyToken(token);
  } catch {
    return null;
  }
};
