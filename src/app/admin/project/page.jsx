"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function AdminProjectPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then(setProjects)
      .catch((err) => console.error("Gagal fetch data:", err));
  }, []);

  return (
    <div className="p-32 h-min-screen">
      <h1 className="text-2xl font-bold mb-4">Data Proyek</h1>
      <div className="flex w-full mb-2 justify-between">
        <Link href="/admin">
          <div className="flex gap-thin-sm w-max items-center text-white bg-green-500 pr-4 pl-3 py-2 rounded-md">
            <Icon icon="ion:arrow-back-circle-outline" width="24" height="24" />
            Dashboard
          </div>
        </Link>
        <Link href="/admin/project/create">
          <div className="flex gap-thin-xs w-max items-center text-white bg-blue-500 px-4 py-2 rounded-md">
            <Icon icon="flowbite:circle-plus-outline" width="24" height="24" />
            Tambah Proyek
          </div>
        </Link>
      </div>
      <table className="w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">No</th>
            <th className="border p-2">Judul</th>
            <th className="border p-2">Gambar</th>
            <th className="border p-2">Lokasi</th>
            <th className="border p-2">Kategori Produk</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((proj, index) => (
            <tr key={index}>
              <td className="border text-center p-2">{index + 1}</td>
              <td className="border p-2">{proj.title}</td>
              <td className="border p-2">
                <Image
                  src={proj.images[0] || "/placeholder.png"}
                  alt={proj.title}
                  width={80}
                  height={50}
                  className="object-cover"
                />
              </td>
              <td className="border p-2">{proj.location}</td>
              <td className="border p-2">{proj.product.join(", ")}</td>
              <td className="border p-2 w-max">
                <div className="flex gap-thin-sm w-full justify-center">
                  <Link href={`/admin/project/${proj.slug}`} className="h-full">
                    <div className="flex gap-thin-xs w-max items-center text-white bg-green-500 px-4 py-2 rounded-md">
                      <Icon icon="akar-icons:edit" width="24" height="24" />
                      Edit
                    </div>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
