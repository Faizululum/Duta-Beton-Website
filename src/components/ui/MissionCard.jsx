import Image from "next/image";

export default function MissionCard({
  title = "Visi",
  image = "/about/view.png",
  description = "Menjadi perusahaan terpercaya di industri beton",
  isList = false,
}) {
  return (
    <div className="flex">
      <div className="w-[64px] md:w-[136px] h-[64px] md:h-[136px] relative -mr-bold-md md:-mr-bold-xl shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100%"
          className="px-[5px] md:p-thin-lg py-[5.5px] bg-white rounded-full border-2 md:border-4 border-primary-red shadow-shadow-icon"
        />
      </div>
      <div className="flex flex-col p-thin-lg md:p-regular-lg pl-regular-sm md:pl-bold-sm bg-white shadow-shadow-card-small rounded-2xl gap-thin-xs md:gap-thin-lg md:-mr-regular-lg w-[346px] md:w-[800px]">
        <div className="bg-primary-red rounded-r-full text-white w-max pl-regular-lg md:pl-bold-sm pr-bold-sm md:pr-bold-lg">
          <h3 className="text-mob-h5 md:text-desk-h2 font-medium">{title}</h3>
        </div>
        <div className="pl-regular-lg md:px-bold-sm text-desc md:text-desk-h6">
          {isList && Array.isArray(description) ? (
            <ul className="list-disc list-outside space-y-1 mx-thin-lg">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="pr-thin-lg">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
