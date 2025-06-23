"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [totalProjects, setTotalProjects] = useState(0);
  const [totalMessages, setTotalMessages] = useState(0);
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  useEffect(() => {
    const fetchData = async () => {
      const resProjects = await fetch("/api/projects");
      const projects = await resProjects.json();
      setTotalProjects(projects.length);

      const resMessages = await fetch("/api/message");
      const messages = await resMessages.json();
      setTotalMessages(messages.length);
    };

    fetchData();
  }, []);

  return (
    <div className="p-32 min-h-screen">
      <div className="flex w-full justify-between items-center mb-2">
        <h1 className="text-2xl font-bold">Dashboard Admin</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded mt-4"
        >
          Logout
        </button>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <Link
          href="/admin/project"
          className="bg-blue-100 text-blue-900 p-6 rounded-lg shadow"
        >
          <h2 className="text-xl font-semibold">Total Proyek</h2>
          <p className="text-3xl font-bold">{totalProjects}</p>
        </Link>
        <Link
          href="/admin/message"
          className="bg-green-100 text-green-900 p-6 rounded-lg shadow"
        >
          <h2 className="text-xl font-semibold">Total Pesan Masuk</h2>
          <p className="text-3xl font-bold">{totalMessages}</p>
        </Link>
      </div>
    </div>
  );
}
