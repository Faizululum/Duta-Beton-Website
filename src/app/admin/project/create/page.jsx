"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UploadDropzone } from "@/lib/uploadthing";
import slugify from "slugify";

export default function AdminCreateProject() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    location: "",
    description: "",
    periodStart: "",
    periodEnd: "",
    product: [],
    images: [],
  });
  const categories = [
    "Ready Mix",
    "Concrete Block",
    "Precast Concrete",
    "Stenslag",
  ];
  const [errors, setErrors] = useState({});

  const handleUpload = (files) =>
    setForm((prev) => ({ ...prev, images: files }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const slg = slugify(form.title, { lower: true, strict: true });
    const payload = {
      ...form,
      slug: slg,
      product: form.product.filter(Boolean),
    };
    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
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
        <h1 className="text-2xl text-center font-bold mb-4">Tambah Proyek</h1>
        {errors.general && (
          <p className="text-red-500 mb-2">{errors.general}</p>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
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
              className="ut-button:bg-primary-red cursor-pointer ut-button:text-white ut-button:hover:bg-primary-redDark w-full rounded-xl border-2 h-[300px] border-primary-red px-thin-lg md:px-regular-sm py-thin-md md:py-thin-lg"
              endpoint="imageUploader"
              onClientUploadComplete={(resp) =>
                handleUpload(resp.map((f) => f.url))
              }
              onUploadError={(err) => alert(err.message)}
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {form.images.map((u, i) => (
                <img
                  key={i}
                  className="w-48 h-32 object-cover rounded-xl"
                  src={u}
                  alt={`img-${i}`}
                />
              ))}
            </div>
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="font-medium bg-primary-red text-white px-4 py-2 rounded-xl"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
}
