import { Icon } from "@iconify/react";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-thin-md">
      <h4 className="text-mob-h5 md:text-desk-h5 font-medium">Kontak Kami</h4>
      <div className="flex flex-col gap-thin-sm md:gap-thin-md">
        <div className="flex flex-col gap-thin-sm md:grid md:grid-cols-2">
          <a
            href="/contact"
            className="flex gap-thin-sm md:gap-thin-md transition-all duration-300 hover:scale-[1.02] group hover:shadow-shadow-card-medium cursor-pointer"
          >
            <div className="bg-white rounded-full border-2 h-max border-neutral-white p-thin-sm md:p-thin-md group-hover:shadow-shadow-card-small group-hover:bg-primary-red transition-all duration-300">
              <Icon
                icon="ph:envelope"
                className="text-primary-red w-bold-sm h-bold-sm md:w-bold-lg md:h-bold-lg group-hover:text-white"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-col justify-center -space-y-thin-sm">
              <h6 className="text-mob-h6 md:text-desk-h6 font-medium">Email</h6>
              <p className="text-desc">info@dutabeton.com</p>
            </div>
          </a>
          <a
            href="/contact"
            className="flex gap-thin-sm md:gap-thin-md transition-all duration-300 hover:scale-[1.02] group hover:shadow-shadow-card-medium cursor-pointer"
          >
            <div className="bg-white rounded-full border-2 h-max border-neutral-white p-thin-sm md:p-thin-md group-hover:shadow-shadow-card-small group-hover:bg-primary-red transition-all duration-300">
              <Icon
                icon="ph:phone-call"
                className="text-primary-red w-bold-sm h-bold-sm md:w-bold-lg md:h-bold-lg group-hover:text-white"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-col justify-center -space-y-thin-sm">
              <h6 className="text-mob-h6 md:text-desk-h6 font-medium">
                Nomor Telepon
              </h6>
              <p className="text-desc">(0343) 614666 - (081) 2345678</p>
            </div>
          </a>
        </div>
        <a
          href="/contact"
          className="flex gap-thin-sm md:gap-thin-md transition-all duration-300 hover:scale-[1.02] group hover:shadow-shadow-card-medium cursor-pointer"
        >
          <div className="bg-white rounded-full border-2 h-max border-neutral-white p-thin-sm md:p-thin-md group-hover:shadow-shadow-card-small group-hover:bg-primary-red transition-all duration-300">
            <Icon
              icon="ph:map-pin-area"
              className="text-primary-red w-bold-sm h-bold-sm md:w-bold-lg md:h-bold-lg group-hover:text-white"
              aria-hidden="true"
            />
          </div>
          <div className="flex flex-col justify-center -space-y-thin-sm">
            <h6 className="text-mob-h6 md:text-desk-h6 font-medium">Lokasi</h6>
            <p className="text-desc leading-3 md:leading-5">
              Dsn.Sawur - Ds.Pucangsari, Kec.Purwosari Kab.Pasuruan - Jatim
              67162
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
