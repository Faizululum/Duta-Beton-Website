import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export async function POST(req) {
  try {
    const { nama, email, phone, message } = await req.json();

    if (!nama || !email || !message) {
      return NextResponse.json(
        { error: "Semua field wajib diisi" },
        { status: 400 }
      );
    }

    const newMessage = await prisma.message.create({
      data: {
        nama,
        email,
        phone,
        message,
      },
    });

    return NextResponse.json({ success: true, message: newMessage });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat menyimpan pesan" },
      { status: 500 }
    );
  }
}
