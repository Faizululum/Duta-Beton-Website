export default function ProjectDetailCard({
  title,
  product,
  location,
  periodStart,
  periodEnd,
  description,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-regular-sm md:gap-bold-sm w-full">
      <div className="flex flex-col gap-thin-lg p-thin-lg bg-white md:w-[376px] rounded-xl shadow-shadow-card-small">
        <div className="flex flex-col gap-thin-lg">
          <div className="flex flex-col -space-y-thin-sm px-thin-lg md:px-regular-md">
            <h4 className="text-mob-h4 font-medium">Detail Proyek</h4>
            <p className="text-mob-h6 font-normal text-primary-red">{title}</p>
          </div>
          <div className="border-space-gray" />
        </div>
        <div className="flex flex-col gap-thin-md px-thin-lg md:px-regular-md">
          <div className="flex flex-col -space-y-thin-xs">
            <p className="text-mob-tagline text-primary-red">Produk</p>
            <h6 className="text-mob-h6 font-medium">
              {product.map((p) => p.replace("_", " ")).join(", ")}
            </h6>
          </div>
          <div className="border-space-gray border-t-0" />
          <div className="flex flex-col -space-y-thin-xs">
            <p className="text-mob-tagline text-primary-red">Lokasi</p>
            <h6 className="text-mob-h6 font-medium">{location}</h6>
          </div>
          <div className="border-space-gray border-t-0" />
          <div className="flex flex-col -space-y-thin-xs">
            <p className="text-mob-tagline text-primary-red">
              Waktu Pengerjaan
            </p>
            <h6 className="text-mob-h6 font-medium">
              {new Date(periodStart).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}{" "}
              -{" "}
              {new Date(periodEnd).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </h6>
          </div>

          <div className="border-space-gray border-t-0" />
        </div>
      </div>
      <div className="flex flex-col gap-thin-lg p-thin-lg w-full bg-white rounded-xl shadow-shadow-card-small">
        <div className="flex flex-col gap-thin-lg">
          <div className="flex flex-col -space-y-thin-sm px-thin-lg md:px-regular-md">
            <h4 className="text-mob-h4 font-medium">Deskripsi Proyek</h4>
            <p className="text-mob-h6 font-normal text-primary-red">{title}</p>
          </div>
          <div className="border-space-gray" />
        </div>
        <div className="flex flex-col gap-thin-md px-thin-lg md:px-regular-md">
          <p className="text-desc">{description}</p>
        </div>
      </div>
    </div>
  );
}
