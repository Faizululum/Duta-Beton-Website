import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
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

  // Simpan cookie sederhana
  cookies().set("admin-token", "bolehmasuk", { path: "/", httpOnly: true });

  return NextResponse.json({ message: "Login sukses" });
}
