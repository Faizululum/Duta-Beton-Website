import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  const project = await prisma.project.findUnique({
    where: { slug: params.slug },
  });
  if (!project)
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(project);
}

export async function PUT(req, { params }) {
  try {
    const existing = await prisma.project.findUnique({
      where: { slug: params.slug },
    });
    if (!existing)
      return NextResponse.json({ error: "Not found" }, { status: 404 });

    const {
      title,
      location,
      description,
      periodStart,
      periodEnd,
      product,
      images,
    } = await req.json();
    const errors = {};

    if (!title) errors.title = "Judul wajib diisi";
    if (!location) errors.location = "Lokasi wajib diisi";
    if (!product?.length) errors.product = "Pilih minimal 1 produk";
    if (!images?.length) errors.images = "Unggah minimal 1 gambar";

    if (Object.keys(errors).length) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const updated = await prisma.project.update({
      where: { slug: params.slug },
      data: {
        title,
        location,
        description,
        periodStart: new Date(periodStart),
        periodEnd: new Date(periodEnd),
        product,
        images,
      },
    });

    return NextResponse.json({ success: true, project: updated });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const deleted = await prisma.project.delete({
      where: { slug: params.slug },
    });
    return NextResponse.json({ success: true, deleted });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to delete project" }, { status: 500 });
  }
}
