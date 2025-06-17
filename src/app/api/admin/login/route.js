import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

export async function POST(req) {
  const { username, password } = await req.json();
  const admin = await prisma.admin.findUnique({ where: { username } });

  if (!admin) {
    return NextResponse.json({ error: "User tidak ditemukan" }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, admin.password);
  if (!valid) {
    return NextResponse.json({ error: "Password salah" }, { status: 401 });
  }

  // Generate JWT
  const token = jwt.sign({ id: admin.id, username: admin.username }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  // Simpan token di cookie
  cookies().set("admin-token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24,
    sameSite: "strict",
  });

  return NextResponse.json({ message: "Login sukses" });
}
