import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const message = await prisma.message.findUnique({ where: { id } });
    if (!message) {
      return new Response(JSON.stringify({ error: "Pesan tidak ditemukan" }), { status: 404 });
    }

    return new Response(JSON.stringify(message), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Gagal mengambil pesan" }), { status: 500 });
  }
}

export async function DELETE(_, { params }) {
  try {
    const deleted = await prisma.message.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ success: true, deleted });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Gagal menghapus pesan" }, { status: 500 });
  }
}
