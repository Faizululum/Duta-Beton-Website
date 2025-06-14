import { Icon } from "@iconify/react";
import Logo from "../ui/Logo";

export default function Footer() {
  const menu = [
    "Beranda",
    "Tentang Kami",
    "Produk",
    "Proyek",
    "Kalkulator",
    "Hubungi Kami",
  ];

  return (
    <footer className="flex flex-col w-full gap-6 h-auto md:h-[400px] font-roboto bg-neutral-grayDark border-t-8 border-primary-red justify-center px-regular-lg py-bold-lg lg:py-0 lg:px-bold-4xl text-white">
      <div className="flex flex-col md:flex-row gap-regular-sm md:gap-0 items-start md:items-center justify-between w-full">
        <div className="flex flex-col gap-thin-lg">
          <Logo />
          <div className="flex flex-col gap-thin-md md:gap-regular-md w-full md:w-[280px]">
            <h2 className="text-mob-h6 md:text-desk-h6 font-bold uppercase">
              PT. Duta Beton Mandiri
            </h2>
            <div className="flex flex-col gap-thin-xs md:gap-thin-sm">
              <div className="flex items-center gap-thin-sm md:gap-2">
                <Icon
                  icon="ph:map-pin-area"
                  className="text-primary-red w-regular-lg h-regular-lg md:w-bold-lg md:h-bold-lg"
                  aria-hidden="true"
                />
                <p className="text-mob-tiny md:text-desk-tiny font-light">
                  Dsn.Sawur - Ds.Pucangsari, Kec.Purwosari Kab.Pasuruan - Jatim
                  67162
                </p>
              </div>
              <div className="flex items-center gap-thin-sm md:gap-2">
                <Icon
                  icon="ph:phone-call"
                  className="text-primary-red w-regular-lg h-regular-lg md:w-bold-sm md:h-bold-sm"
                  aria-hidden="true"
                />
                <p className="text-mob-tiny md:text-desk-tiny font-light">
                  Telp  : (0343) 614666
                </p>
              </div>
              <div className="flex items-center gap-thin-sm md:gap-2">
                <Icon
                  icon="ph:envelope"
                  className="text-primary-red w-regular-lg h-regular-lg md:w-bold-sm md:h-bold-sm"
                  aria-hidden="true"
                />
                <p className="text-mob-tiny md:text-desk-tiny font-light">
                  Email  : info@dutabeton.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-[500px] justify-between">
          <div className="flex flex-col gap-thin-xs md:gap-thin-lg">
            <span className="text-mob-tagline md:text-desk-tagline font-bold">
              Menu
            </span>
            <ul className="space-y-thin-xs md:space-y-thin-md text-mob-tiny md:text-desk-tiny font-light">
              {menu.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-thin-xs md:gap-thin-lg">
            <span className="text-mob-tagline md:text-desk-tagline font-bold">
              Produk Kami
            </span>
            <div className="flex flex-col gap-thin-xs md:gap-1 text-mob-tiny md:text-desk-tiny font-light -ml-1">
              <div className="flex items-center">
                <Icon
                  icon="basil:caret-right-outline"
                  className="w-regular-md h-regular-md md:w-regular-lg md:h-regular-lg"
                  aria-hidden="true"
                />
                <p>Ready Mix</p>
              </div>
              <div className="flex items-center">
                <Icon
                  icon="basil:caret-right-outline"
                  className="w-regular-md h-regular-md md:w-regular-lg md:h-regular-lg"
                  aria-hidden="true"
                />
                <p>Concrete Block</p>
              </div>
              <div className="flex items-center">
                <Icon
                  icon="basil:caret-right-outline"
                  className="w-regular-md h-regular-md md:w-regular-lg md:h-regular-lg"
                  aria-hidden="true"
                />
                <p>Stenslag</p>
              </div>
              <div className="flex items-center">
                <Icon
                  icon="basil:caret-right-outline"
                  className="w-regular-md h-regular-md md:w-regular-lg md:h-regular-lg"
                  aria-hidden="true"
                />
                <p>Precast Concrete</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-thin-xs md:gap-thin-lg">
            <span className="text-mob-tagline md:text-desk-tagline font-bold">
              Social Media
            </span>
            <div className="flex flex-col gap-thin-xs md:gap-1 text-mob-tiny md:text-desk-tiny font-normal">
              <div className="flex items-center gap-1">
                <Icon
                  icon="mdi:linkedin"
                  className="w-regular-md h-regular-md md:w-regular-lg md:h-regular-lg"
                  aria-hidden="true"
                />
                <p>dutabeton</p>
              </div>
              <div className="flex items-center gap-1">
                <Icon
                  icon="mdi:instagram"
                  className="w-regular-md h-regular-md md:w-regular-lg md:h-regular-lg"
                  aria-hidden="true"
                />
                <p>@dutabetonmandiri</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[335px] h-[212px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5688.91517588073!2d112.7327684334812!3d-7.729874225412678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d13f22105d89%3A0x5e78e0ed6b6f1d42!2sPT.%20Duta%20Beton%20Mandiri!5e0!3m2!1sen!2sid!4v1749865387377!5m2!1sen!2sid"
            className="w-full h-full rounded-xl"
          />
        </div>
      </div>
      <div className="border-2 border-white w-full" />
    </footer>
  );
}
