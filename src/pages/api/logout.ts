import { serialize } from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader("Set-Cookie", serialize("paytrack_session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: new Date(0),
    path: "/",
  }));

  res.setHeader("Set-Cookie", serialize("XSRF-TOKEN", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: new Date(0),
    path: "/",
  }));

  res.status(200).json({ message: "Logout sucessful" });
}
