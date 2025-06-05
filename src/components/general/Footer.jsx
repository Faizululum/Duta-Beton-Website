import { Icon } from "@iconify/react";
import Image from "next/image";
import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full gap-6 h-[400px] font-roboto bg-neutral-grayDark border-t-8 border-primary-red justify-center px-bold-4xl text-white">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-thin-lg">
          <Logo />
          <div className="flex flex-col gap-regular-md w-[280px]">
            <h2 className="text-desk-h6 font-bold uppercase">
              PT. Duta Beton Mandiri
            </h2>
            <div className="flex flex-col gap-thin-sm">
              <div className="flex items-center gap-2">
                <Icon
                  icon="ph:map-pin-area"
                  width="48"
                  className="text-primary-red"
                />
                <p className="text-desk-tiny font-light">
                  Dsn.Sawur - Ds.Pucangsari, Kec.Purwosari Kab.Pasuruan - Jatim
                  67162
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  icon="ph:phone-call"
                  width="32"
                  className="text-primary-red"
                />
                <p className="text-desk-tiny font-light">
                  Telp  : (0343) 614666
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  icon="ph:envelope"
                  width="32"
                  className="text-primary-red"
                />
                <p className="text-desk-tiny font-light">
                  Email  : info@dutabeton.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[500px] justify-between">
          <div className="flex flex-col gap-thin-lg">
            <span className="text-desk-tagline font-bold">Menu</span>
            <div className="flex flex-col gap-1 text-desk-tiny font-light">
              <p>Beranda</p>
              <p>Tentang Kami</p>
              <p>Produk</p>
              <p>Proyek</p>
              <p>Kalkulator</p>
              <p>Hubungi Kami</p>
            </div>
          </div>
          <div className="flex flex-col gap-thin-lg">
            <span className="text-desk-tagline font-bold">Produk Kami</span>
            <div className="flex flex-col gap-1 text-desk-tiny font-light -ml-1">
              <div className="flex items-center">
                <Icon icon="basil:caret-right-outline" width="24" />
                <p>Ready Mix</p>
              </div>
              <div className="flex items-center">
                <Icon icon="basil:caret-right-outline" width="24" />
                <p>Concrete Block</p>
              </div>
              <div className="flex items-center">
                <Icon icon="basil:caret-right-outline" width="24" />
                <p>Stenslag</p>
              </div>
              <div className="flex items-center">
                <Icon icon="basil:caret-right-outline" width="24" />
                <p>Precast Concrete</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-thin-lg">
            <span className="text-desk-tagline font-bold">Social Media</span>
            <div className="flex flex-col gap-1 text-desk-tiny font-normal">
              <div className="flex items-center gap-1">
                <Icon icon="mdi:linkedin" width="24" />
                <p>dutabeton</p>
              </div>
              <div className="flex items-center gap-1">
                <Icon icon="mdi:instagram" width="24" />
                <p>@dutabetonmandiri</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[335px] h-[212px] bg-secondary-yellow" />
      </div>
      <div className="border-2 border-white w-full" />
    </footer>
  );
}
