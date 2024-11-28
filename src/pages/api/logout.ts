import { serialize } from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  // TODO rever processo logout com laravel 
  res.setHeader("Set-Cookie", serialize("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    expires: new Date(0), // Expira imediatamente
    path: "/",
  }));

  res.status(200).json({ success: true });
}
