"use client";

import { useState } from "react";
import Button from "../general/Button";
import ContactInfo from "./ContactInfo";
import toast from "react-hot-toast";

export default function ContactCard() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nama.trim() || !email.trim() || !message.trim()) {
      toast.error("Nama, email, dan pesan wajib diisi");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Format email tidak valid");
      return;
    }

    const res = await fetch("/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nama, email, phone, message }),
    });

    const data = await res.json();
    if (res.ok) {
      toast.success("Pesan berhasil dikirim!");
      setNama("");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      toast.error(data.error || "Gagal mengirim pesan");
    }
  };

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="w-full md:w-[700px] md:-ml-regular-md md:z-10 h-max md:min-h-[376px] p-regular-lg pt-thin-lg md:p-regular-lg bg-white shadow-shadow-card-small rounded-2xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-regular-sm md:gap-regular-md"
      >
        <div className="flex flex-col w-full items-center gap-thin-lg">
          <h3 className="text-mob-h4 font-medium md:text-desk-h4 text-center text-primary-red">
            We want to hear from you
          </h3>
          <div className="w-full flex flex-col gap-thin-md md:gap-regular-sm">
            <input
              type="text"
              value={nama}
              placeholder="Masukkan nama"
              onChange={(e) => setNama(e.target.value)}
              className="w-full rounded-xl border-2 border-neutral-grayLight-60 px-thin-lg md:px-regular-sm py-thin-md md:py-thin-lg"
            />
            <div className="flex flex-col gap-thin-md md:grid md:grid-cols-2 md:gap-thin-lg">
              <input
                type="email"
                value={email}
                placeholder="Masukkan email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border-2 border-neutral-grayLight-60 px-thin-lg md:px-regular-sm py-thin-md md:py-thin-lg"
              />
              <input
                type="number"
                value={phone}
                placeholder="Masukkan nomor telepon"
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border-2 border-neutral-grayLight-60 px-thin-lg md:px-regular-sm py-thin-md md:py-thin-lg"
              />
            </div>
            <textarea
              type="text"
              value={message}
              placeholder="Masukkan pesan"
              onChange={(e) => setMessage(e.target.value)}
              className="w-full min-h-[100px] max-h-[125px] rounded-xl border-2 border-neutral-grayLight-60 px-thin-lg md:px-regular-sm py-thin-md md:py-thin-lg"
            />
          </div>
        </div>
        <Button
          type="submit"
          label="Kirim Pesan"
          color="red"
          icon="arrowRed"
          justify="center"
          variant="outline"
        />
        <div className="border-space-gray" />
        <ContactInfo />
      </form>
    </div>
  );
}
