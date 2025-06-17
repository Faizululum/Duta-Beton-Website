import { Icon } from "@iconify/react";
import Logo from "../ui/Logo";
import Link from "next/link";

export default function Footer() {
  const footLinks = [
    { label: "Beranda", href: "/" },
    { label: "Tentang", href: "/about" },
    { label: "Proyek", href: "/project" },
    { label: "Kalkulator", href: "/calculator" },
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
              <a
                href="/"
                className="flex hover-red items-center gap-thin-sm md:gap-2"
              >
                <Icon
                  icon="ph:map-pin-area"
                  className="text-primary-red w-regular-lg h-regular-lg md:w-bold-lg md:h-bold-lg"
                  aria-hidden="true"
                />
                <p className="text-mob-tiny md:text-desk-tiny font-light">
                  Dsn.Sawur - Ds.Pucangsari, Kec.Purwosari Kab.Pasuruan - Jatim
                  67162
                </p>
              </a>
              <a
                href="/"
                className="flex hover-red items-center gap-thin-sm md:gap-2"
              >
                <Icon
                  icon="ph:phone-call"
                  className="text-primary-red w-regular-lg h-regular-lg md:w-bold-sm md:h-bold-sm"
                  aria-hidden="true"
                />
                <p className="text-mob-tiny md:text-desk-tiny font-light">
                  (0343) 614666
                </p>
              </a>
              <a
                href="/"
                className="flex hover-red items-center gap-thin-sm md:gap-2"
              >
                <Icon
                  icon="ph:envelope"
                  className="text-primary-red w-regular-lg h-regular-lg md:w-bold-sm md:h-bold-sm"
                  aria-hidden="true"
                />
                <p className="text-mob-tiny md:text-desk-tiny font-light">
                  info@dutabeton.com
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-[500px] justify-between">
          <div className="flex flex-col gap-thin-xs md:gap-thin-lg">
            <span className="text-mob-tagline md:text-desk-tagline font-bold">
              Menu
            </span>
            <div className="flex flex-col space-y-thin-sm md:space-y-thin-lg mt-thin-sm text-mob-tiny md:text-desk-tiny font-light">
              {footLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover-red">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-thin-xs md:gap-thin-lg">
            <span className="text-mob-tagline md:text-desk-tagline font-bold">
              Produk Kami
            </span>
            <div className="flex flex-col gap-thin-xs md:gap-1 text-mob-tiny md:text-desk-tiny font-light -ml-1">
              <Link
                className="flex items-center hover-red"
                href="/product/ready-mix"
              >
                <Icon
                  icon="basil:caret-right-outline"
                  className="w-regular-md h-regular-md md:w-regular-lg md:h-regular-lg"
                  aria-hidden="true"
                />
                Ready Mix
              </Link>
              <Link
                className="flex items-center hover-red"
                href="/product/concrete-block"
              >
                <Icon
                  icon="basil:caret-right-outline"
                  className="w-regular-md h-regular-md md:w-regular-lg md:h-regular-lg"
                  aria-hidden="true"
                />
                Concrete Block
              </Link>
              <Link
                className="flex items-center hover-red"
                href="/product/stenslag"
              >
                <Icon
                  icon="basil:caret-right-outline"
                  className="w-regular-md h-regular-md md:w-regular-lg md:h-regular-lg"
                  aria-hidden="true"
                />
                Stenslag
              </Link>
              <Link
                className="flex items-center hover-red"
                href="/product/precast-concrete"
              >
                <Icon
                  icon="basil:caret-right-outline"
                  className="w-regular-md h-regular-md md:w-regular-lg md:h-regular-lg"
                  aria-hidden="true"
                />
                Precast Concrete
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-thin-xs md:gap-thin-lg">
            <span className="text-mob-tagline md:text-desk-tagline font-bold">
              Social Media
            </span>
            <div className="flex flex-col gap-thin-xs md:gap-1 text-mob-tiny md:text-desk-tiny font-normal">
              <a href="/" className="hover-red flex items-center gap-1">
                <Icon
                  icon="mdi:linkedin"
                  className="w-regular-md h-regular-md md:w-regular-lg md:h-regular-lg"
                  aria-hidden="true"
                />
                <p>dutabeton</p>
              </a>
              <a href="/" className="hover-red flex items-center gap-1">
                <Icon
                  icon="mdi:instagram"
                  className="w-regular-md h-regular-md md:w-regular-lg md:h-regular-lg"
                  aria-hidden="true"
                />
                <p>@dutabetonmandiri</p>
              </a>
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
