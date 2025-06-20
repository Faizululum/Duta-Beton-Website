"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (res.ok) {
      toast.success("Login berhasil");
      router.push("/admin/project");
    } else {
      toast.error(data.error || "Login gagal");
    }
  };

  if (!mounted) return null;

  return (
    <div className="h-screen flex items-center">
      <form
        onSubmit={handleLogin}
        className="flex flex-col mx-auto gap-regular-lg card-container pb-regular-lg w-[400px]"
      >
        <h1 className="text-desk-h5 font-bold text-center">Login Admin</h1>
        <div className="flex flex-col gap-thin-md">
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full rounded-xl border-2 border-neutral-grayLight-60 px-thin-lg md:px-regular-sm py-thin-md md:py-thin-lg"
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-xl border-2 border-neutral-grayLight-60 px-thin-lg md:px-regular-sm py-thin-md md:py-thin-lg"
          />
        </div>
        <button className="bg-primary-red hover:bg-primary-redDark text-white py-2 rounded-xl">
          Login
        </button>
      </form>
    </div>
  );
}
