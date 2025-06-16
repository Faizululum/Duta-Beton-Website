import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const projects = await prisma.project.findMany();
  return NextResponse.json(projects);
}

export async function POST(req) {
  try {
    const data = await req.json();
    const {
      title,
      slug,
      location,
      product,
      description,
      periodStart,
      periodEnd,
      images,
    } = data;

    const errors = {};
    if (!title) errors.title = "Judul wajib diisi";
    if (!slug) errors.slug = "Slug tidak terbentuk";
    if (!location) errors.location = "Lokasi wajib diisi";
    if (!product || product.length === 0)
      errors.product = "Minimal 1 produk dipilih";
    if (!description) errors.description = "Deskripsi wajib diisi";
    if (!periodStart) errors.periodStart = "Tanggal mulai wajib diisi";
    if (!periodEnd) errors.periodEnd = "Tanggal akhir wajib diisi";
    if (!images || images.length < 1)
      errors.images = "Minimal 1 gambar harus diunggah";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const project = await prisma.project.create({
      data: {
        title,
        slug,
        location,
        product,
        description,
        periodStart: new Date(periodStart),
        periodEnd: new Date(periodEnd),
        images,
      },
    });

    return NextResponse.json({ success: true, project });
  } catch (error) {
    console.error("POST /api/projects error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat menyimpan data" },
      { status: 500 }
    );
  }
}
