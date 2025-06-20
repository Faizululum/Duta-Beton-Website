import { PrismaClient } from "@prisma/client";

const prisma = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

async function main() {
  const dummyProjects = [
    {
      title: "GUDANG PABRIK KEMIRISEWU PANDAAN",
      location: "Pandaan",
      product: ["Ready Mix"],
    },
    {
      title: "PLTM KANZIL I",
      location: "Pasuruan",
      product: ["Precast Concrete"],
    },
    {
      title: "PT KARYA SUTARINDO",
      location: "Pasuruan",
      product: ["Concrete Block"],
    },
    {
      title: "REST AREA TOL GEMPOL - PASURUAN",
      location: "Tol Gempol",
      product: ["Stenslag", "Ready Mix"],
    },
    {
      title: "PABRIK CV SKA",
      location: "Pasuruan",
      product: ["Concrete Block"],
    },
    {
      title: "PEKERJAAN JALAN WISATA ANTO BUGO",
      location: "Bugo",
      product: ["Ready Mix"],
    },
    {
      title: "PT MARTHYS ORTHOPAEDIC INDONESIA",
      location: "Pasuruan",
      product: ["Precast Concrete"],
    },
    {
      title: "GEDUNG KAMPUS UNIVERSITAS YUDHARTA",
      location: "Pasuruan",
      product: ["Ready Mix", "Concrete Block"],
    },
    {
      title: "PEMELIHARAAN JALAN PANDAAN-MENDALAN",
      location: "Pandaan",
      product: ["Stenslag"],
    },
    {
      title: "KANTOR PMII",
      location: "Pasuruan",
      product: ["Concrete Block"],
    },
    {
      title: "LINING BETON",
      location: "Pasuruan",
      product: ["Precast Concrete"],
    },
    {
      title: "GEDUNG DORMITORY EDUWISATA",
      location: "Kab. Pasuruan",
      product: ["Concrete Block", "Ready Mix"],
    },
    {
      title: "REKONSTRUKSI RETAINING WALL",
      location: "Tol Bodo",
      product: ["Precast Concrete"],
    },
    {
      title: "PJL KUTOREJO PANDAAN",
      location: "Kutorejo",
      product: ["Stenslag"],
    },
    {
      title: "PENINGKATAN JALAN KALIREJO - SUWAYUWO",
      location: "Kalirejo",
      product: ["Ready Mix"],
    },
    {
      title: "ARJUNO TECHNO PARK",
      location: "Arjuno",
      product: ["Concrete Block", "Precast Concrete"],
    },
    {
      title: "GEDUNG SEKRETARIAT KAB. PASURUAN",
      location: "Pasuruan",
      product: ["Ready Mix", "Stenslag"],
    },
  ];

  for (const project of dummyProjects) {
    await prisma.project.create({
      data: {
        slug: project.title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, ""),
        title: project.title,
        location: project.location,
        product: project.product,
        periodStart: new Date("2024-01-01"),
        periodEnd: new Date("2024-12-31"),
        description: `Deskripsi detail proyek ${project.title}`,
        images: ["/hero.png", "/hero.png", "/hero.png"],
      },
    });
  }
}

main()
  .then(() => {
    console.log("Seed dummy proyek berhasil 🚀");
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
