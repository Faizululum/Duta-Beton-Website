import Image from "next/image";

export default function ProjectImageSmall({ src }) {
  return (
    <div className="w-[85px] md:w-[206px] h-[52px] md:h-[126px] relative">
      <Image
        src={src}
        alt="project"
        fill
        className="bg-neutral-white object-cover rounded-md md:rounded-lg"
      />
    </div>
  );
}

export function ProjectImageLarge({ image, title, location }) {
  return (
    <div className="w-full md:w-[900px] h-[230px] md:h-[552px] relative rounded-lg">
      <Image
        src={image}
        alt="project"
        fill
        className="bg-neutral-white object-cover rounded-lg md:rounded-2xl"
      />
      <div className="absolute rounded-lg md:rounded-2xl bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/45 via-black/25 via-45% to-black/0 to-65% pointer-events-none" />
      <div className="flex flex-col absolute text-white w-full h-full justify-end px-thin-lg md:px-bold-sm py-thin-md md:py-regular-lg">
        <h4 className="text-mob-h5 md:text-desk-h3 font-medium">{title}</h4>
        <p className="text-mob-h6 md:text-desk-h5 font-normal">{location}</p>
      </div>
    </div>
  );
}
