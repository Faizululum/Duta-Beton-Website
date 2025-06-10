import Image from "next/image";

const gradientVariants = {
  yellow: "gradient-yellow",
  red: "gradient-red",
  white: "gradient-white",
  gray: "gradient-gray",
};

const textVariants = {
  black: "text-black text-gray-700",
  white: "text-white text-white",
};

export default function BenefitCard({
  title = "Hemat Waktu",
  description = "Uji mutu dan kwalitas lebih terjamin keakuratannya",
  icon = "/product/benefit_1.svg",
  gradient = "white", // "yellow" | "red" | "white" | "gray"
  textColor = "black", // "black" | "white"
}) {
  return (
    <div
      className={`flex p-thin-md md:pl-thin-lg pr-regular-sm gap-regular-sm rounded-full items-center w-[325px] md:w-[400px] h-max ${
        gradientVariants[gradient] || ""
      }`}
    >
      <div>
        <div className="w-bold-2xl md:w-bold-3xl h-bold-2xl md:h-bold-3xl relative flex items-center bg-white justify-center rounded-full">
          <Image src={icon} alt={title} fill className="object-cover" />
        </div>
      </div>
      <div className="flex flex-col -space-y-thin-xs">
        <h3
          className={`text-mob-h5 md:text-desk-h5 font-medium ${
            textColor === "white" ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-desc ${
            textColor === "white" ? "text-white" : "text-gray-700"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
