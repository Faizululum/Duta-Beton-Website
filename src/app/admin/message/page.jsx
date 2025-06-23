"use client";

import ConfirmModal from "@/components/general/ConfirmModal";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function AdminMessagePage() {
  const [messages, setMessages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const router = useRouter();

  const fetchMessages = () => {
    fetch("/api/message")
      .then((res) => res.json())
      .then(setMessages)
      .catch((err) => console.error("Gagal fetch pesan:", err));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async () => {
    if (!selectedId) return;
    const res = await fetch(`/api/message/${selectedId}`, { method: "DELETE" });
    if (res.ok) {
      toast.success("Pesan berhasil dihapus");
      fetchMessages();
    } else {
      toast.error("Gagal menghapus pesan");
    }
    setShowModal(false);
    setSelectedId(null);
  };

  return (
    <div className="p-32 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Pesan Masuk</h1>
      {/* Tombol kembali */}
      <div className="flex w-full mb-2">
        <Link href="/admin">
          <div className="flex gap-thin-sm w-max items-center text-white bg-green-500 pr-4 pl-3 py-2 rounded-md">
            <Icon icon="ion:arrow-back-circle-outline" width="24" height="24" />
            Dashboard
          </div>
        </Link>
      </div>
      {/* Tabel pesan */}
      <table className="w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">No</th>
            <th className="border p-2">Nama</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">No. HP</th>
            <th className="border p-2">Pesan</th>
            <th className="border p-2">Tanggal</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg, index) => (
            <tr key={msg.id}>
              <td className="border text-center p-2">{index + 1}</td>
              <td className="border p-2">{msg.nama}</td>
              <td className="border p-2">{msg.email}</td>
              <td className="border p-2">{msg.phone || "-"}</td>
              <td className="border p-2 w-64">
                <div className="line-clamp-2 w-full overflow-hidden text-ellipsis">
                  {msg.message}
                </div>
              </td>
              <td className="border p-2">
                {new Date(msg.createdAt).toLocaleDateString("id-ID")}
              </td>
              <td className="border p-2">
                <div className="flex gap-2 items-center justify-center">
                  <Link href={`/admin/message/${msg.id}`}>
                    <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">
                      <Icon icon="mdi:eye-outline" width={20} />
                      Detail
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal konfirmasi */}
      <ConfirmModal
        isOpen={showModal}
        onCancel={() => setShowModal(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
