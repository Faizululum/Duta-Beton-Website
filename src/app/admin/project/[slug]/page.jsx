"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import slugify from "slugify";
import { UploadDropzone } from "@/lib/uploadthing";
import { Icon } from "@iconify/react";

export default function AdminEditProject() {
  const router = useRouter();
  const { slug } = useParams();
  const [form, setForm] = useState({
    title: "",
    location: "",
    description: "",
    periodStart: "",
    periodEnd: "",
    product: [],
    images: [],
  });
  const [errors, setErrors] = useState({});
  const categories = [
    "Ready Mix",
    "Concrete Block",
    "Precast Concrete",
    "Stenslag",
  ];

  useEffect(() => {
    fetch(`/api/projects/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) return;
        setForm({
          title: data.title,
          location: data.location,
          description: data.description,
          periodStart: data.periodStart.slice(0, 10),
          periodEnd: data.periodEnd.slice(0, 10),
          product: data.product,
          images: data.images,
        });
      });
  }, [slug]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const res = await fetch(`/api/projects/${slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) router.push("/admin/project");
    else {
      const data = await res.json();
      setErrors(data.errors || { general: data.error });
    }
  };

  return (
    <div className="py-bold-4xl">
      <div className="p-bold-lg pt-regular-lg w-[1256px] mx-auto card-container">
        <h1 className="text-2xl text-center font-bold mb-4">Edit Proyek</h1>
        {errors.general && (
          <p className="text-red-500 mb-2">{errors.general}</p>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-bold-lg">
          {/* Title */}
          <div>
            <label className="font-medium text-mob-h5">Judul Proyek</label>
            <input
              type="text"
              className="w-full rounded-xl border-2 border-neutral-grayLight-60 px-thin-lg md:px-regular-sm py-thin-md md:py-thin-lg"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
          </div>
          {/* Location */}
          <div>
            <label className="font-medium text-mob-h5">Lokasi</label>
            <input
              type="text"
              className="w-full rounded-xl border-2 border-neutral-grayLight-60 px-thin-lg md:px-regular-sm py-thin-md md:py-thin-lg"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              required
            />
          </div>
          {/* Product categories (checkbox array) */}
          <fieldset>
            <legend className="font-medium text-mob-h5 inline-block mr-4 mb-thin-sm">
              Kategori Produk
            </legend>
            {categories.map((cat) => (
              <label key={cat} className="inline-block mr-4">
                <input
                  type="checkbox"
                  className="mr-thin-sm"
                  value={cat}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setForm((prev) => {
                      const arr = new Set(prev.product);
                      checked ? arr.add(cat) : arr.delete(cat);
                      return { ...prev, product: Array.from(arr) };
                    });
                  }}
                />
                {cat.replace(/_/g, " ")}
              </label>
            ))}
          </fieldset>
          {/* Period Date */}
          <div className="grid grid-cols-2 gap-bold-sm">
            <div>
              <label className="font-medium text-mob-h5">
                Waktu awal pengerjaan
              </label>
              <input
                type="date"
                className="w-full rounded-xl border-2 border-neutral-grayLight-60 px-thin-lg md:px-regular-sm py-thin-md md:py-thin-lg"
                value={form.periodStart}
                onChange={(e) =>
                  setForm({ ...form, periodStart: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="font-medium text-mob-h5">
                Waktu akhir pengerjaan
              </label>
              <input
                type="date"
                className="w-full rounded-xl border-2 border-neutral-grayLight-60 px-thin-lg md:px-regular-sm py-thin-md md:py-thin-lg"
                value={form.periodEnd}
                onChange={(e) =>
                  setForm({ ...form, periodEnd: e.target.value })
                }
                required
              />
            </div>
          </div>
          {/* Description */}
          <div>
            <label className="font-medium text-mob-h5">Description</label>
            <textarea
              className="w-full rounded-xl border-2 border-neutral-grayLight-60 px-thin-lg md:px-regular-sm py-thin-md md:py-thin-lg"
              rows={4}
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              required
            />
          </div>
          {/* Upload images */}
          <div>
            <label className="font-medium text-mob-h5">
              Upload Images (1–7)
            </label>
            <UploadDropzone
              endpoint="imageUploader"
              onClientUploadComplete={(res) =>
                setForm((prev) => ({ ...prev, images: res.map((f) => f.url) }))
              }
              onUploadError={(err) => alert(err.message)}
              className="ut-button:bg-primary-red ut-button:text-white h-[300px]"
            />
            <div className="flex flex-wrap gap-2">
              {form.images.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  className="w-48 h-32 rounded-xl"
                  alt={`img-${i}`}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-thin-md">
            <button
              type="button"
              className="flex items-center justify-center gap-thin-sm bg-red-500 text-white py-2 px-4 rounded-xl"
              onClick={async () => {
                const confirmDelete = confirm(
                  "Yakin ingin menghapus proyek ini?"
                );
                if (!confirmDelete) return;
                const res = await fetch(`/api/projects/${slug}`, {
                  method: "DELETE",
                });
                if (res.ok) router.push("/admin/project");
                else alert("Gagal menghapus proyek");
              }}
            >
              <Icon icon="fe:trash" width="24" height="24" />
              Hapus
            </button>
            <button
              type="submit"
              className="flex items-center justify-center gap-thin-sm bg-green-500 text-white py-2 px-4 rounded-xl"
            >
              <Icon icon="akar-icons:edit" width="24" height="24" />
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
