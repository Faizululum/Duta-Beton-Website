import { NextResponse } from "next/server";
import { projects } from "@/lib/data/projects";

export async function GET(req, { params }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}
