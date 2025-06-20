import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;


export async function POST(req) {
  const { username, password } = await req.json();

  const admin = await prisma.admin.findUnique({ where: { username } });
  if (!admin) {
    return NextResponse.json({ error: "Username atau password salah" }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, admin.password);
  if (!valid) {
    return NextResponse.json({ error: "Username atau password salah" }, { status: 401 });
  }

  const res = NextResponse.json({ message: "Login sukses" });

  res.cookies.set("admin-token", "allowed", {
    path: "/",
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    sameSite: "strict",
  });

  return res;
}
