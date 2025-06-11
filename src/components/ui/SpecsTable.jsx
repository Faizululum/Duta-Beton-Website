import Image from "next/image";

export default function SpecsTable({
  title,
  variant = "right",
  colors = [],
  tableHeader = [],
  tableData = [],
  imageSrc,
  perMeterNote,
}) {
  const isRight = variant === "right";
  const alignment = isRight ? "text-right items-end" : "text-left items-start";
  const flexDirection = isRight ? "flex-row-reverse" : "flex-row";
  const textAlign = isRight ? "justify-end" : "justify-start";

  return (
    <div className={`flex flex-col gap-thin-sm ${alignment}`}>
      <h4 className="text-mob-h5 md:text-desk-h5 font-medium text-black">
        {title}
      </h4>
      <div className="flex flex-col gap-thin-md">
        {colors.length > 0 && (
          <div className="flex flex-col">
            <h5 className="text-mob-tagline md:text-desk-tagline font-medium text-primary-red">
              Warna
            </h5>
            <div
              className={`flex -space-x-regular-lg md:-space-x-bold-sm ${textAlign}`}
            >
              {colors.map((color, idx) => {
                const colorClass =
                  color.toLowerCase() === "hitam"
                    ? "bg-neutral-black text-white"
                    : color.toLowerCase() === "merah"
                    ? "bg-primary-red text-white"
                    : "bg-neutral-white";
                return (
                  <span
                    key={idx}
                    className={`px-bold-sm md:px-bold-lg py-thin-sm md:py-thin-md rounded-full ${colorClass}`}
                  >
                    {color}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        <div className={`flex ${flexDirection} gap-thin-md`}>
          <table className="text-center h-max border-4 border-white">
            <thead>
              <tr>
                {tableHeader.map((header, idx) => (
                  <th key={idx} className="thead">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx}>
                  {tableHeader.map((key, i) => (
                    <td key={i} className="td-class">{row[key.toLowerCase()]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-col items-center gap-thin-md">
            <div className="w-[64px] md:w-[112px] h-[64px] md:h-[112px] relative">
              <Image src={imageSrc} alt="Pattern" fill />
            </div>
            <p className="text-mob-tagline md:text-desk-tagline font-normal">
              {perMeterNote} pcs/m²
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
