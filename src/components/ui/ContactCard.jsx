"use client";

import { useState } from "react";
import Button from "../general/Button";
import ContactInfo from "./ContactInfo";

export default function ContactCard() {
  const [nama, setNama] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="w-full md:w-[700px] md:-ml-regular-md md:z-10 h-max md:min-h-[376px] p-regular-lg pt-thin-lg md:p-regular-lg bg-white shadow-shadow-card-small rounded-2xl">
      <div className="flex flex-col gap-regular-sm md:gap-regular-md">
        <div className="flex flex-col w-full items-center gap-thin-lg">
          <h3 className="text-mob-h4 font-medium md:text-desk-h4 text-center text-primary-red">
            We want to hear from you
          </h3>
          <div className="w-full flex flex-col gap-thin-md md:gap-regular-sm">
            <div className="flex flex-col gap-thin-md md:grid md:grid-cols-2 md:gap-thin-lg">
              <input
                type="text"
                value={nama}
                placeholder="Masukkan nama / email"
                onChange={setNama}
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
          label="Kirim Pesan"
          color="red"
          icon="arrowRed"
          justify="center"
          variant="outline"
        />
        <div className="border-space-gray" />
        <ContactInfo />
      </div>
    </div>
  );
}
