import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

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
