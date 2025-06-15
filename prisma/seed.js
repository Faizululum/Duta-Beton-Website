import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.project.create({
    data: {
      slug: "saygon-inn",
      title: "Saygon Inn & Cottage",
      location: "Pasuruan, East Java",
      product: ["Ready Mix", "Concrete Block"],
      periodStart: new Date("2022-01-01"),
      periodEnd: new Date("2022-12-31"),
      description: "Deskripsi detail proyek Saygon Inn...",
      images: ["/hero.png", "/hero.png", "/hero.png"],
    },
  });
}

main()
  .then(() => {
    console.log("Seed berhasil 🎉");
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
