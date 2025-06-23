"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import ConfirmModal from "@/components/general/ConfirmModal";
import toast from "react-hot-toast";

export default function MessageDetailPage() {
  const params = useParams();
  const id = params?.id;

  const router = useRouter();
  const [message, setMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/message/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data || data.error) {
          toast.error("Pesan tidak ditemukan");
          router.push("/admin/message");
        } else {
          setMessage(data);
        }
      });
  }, [id]);

  const handleDelete = async () => {
    const res = await fetch(`/api/message/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      toast.success("Pesan berhasil dihapus");
      router.push("/admin/message");
    } else {
      toast.error("Gagal menghapus pesan");
    }
    setShowModal(false);
  };

  if (!message) return <div className="p-32">Loading...</div>;

  return (
    <div className="p-32 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Detail Pesan</h1>
      <div className="flex w-full mb-2 justify-between">
        <Link href="/admin/message">
          <div className="flex gap-thin-sm w-max items-center text-white bg-green-500 pr-4 pl-3 py-2 rounded-md">
            <Icon icon="ion:arrow-back-circle-outline" width="24" height="24" />
            Kembali
          </div>
        </Link>
        <button
          onClick={() => setShowModal(true)}
          className="flex gap-thin-sm w-max items-center text-white bg-primary-red pr-4 pl-3 py-2 rounded-md"
        >
          <Icon icon="fe:trash" width="24" height="24" />
          Hapus Pesan
        </button>
      </div>

      <div className="space-y-4">
        <p>
          <strong>Nama:</strong> {message.nama}
        </p>
        <p>
          <strong>Email:</strong> {message.email}
        </p>
        <p>
          <strong>No. HP:</strong> {message.phone || "-"}
        </p>
        <p>
          <strong>Pesan:</strong> {message.message}
        </p>
        <p>
          <strong>Tanggal:</strong>{" "}
          {new Date(message.createdAt).toLocaleString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>

      <ConfirmModal
        isOpen={showModal}
        onCancel={() => setShowModal(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
