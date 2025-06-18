"use client";

import Image from "next/image";
import clsx from "clsx";

export default function CardValue({
  variant = "white",
  title,
  desc,
  number,
  image,
}) {
  const variantStyles = {
    white: {
      bg: "gradient-white",
      text: "text-black",
      circleBg: "bg-neutral-grayLight",
      border: "border-primary-red",
    },
    yellow: {
      bg: "gradient-yellow",
      text: "text-black",
      circleBg: "bg-white",
      border: "border-neutral-grayDark",
    },
    gray: {
      bg: "gradient-gray",
      text: "text-white",
      circleBg: "bg-black",
      border: "border-primary-red",
    },
  };

  const styles = variantStyles[variant];

  return (
    <div
      className={clsx(
        "w-[345px] h-[513px] rounded-3xl hover:shadow-shadow-card-strong px-bold-sm py-bold-lg transition-all duration-300 ease-in-out hover:-translate-y-2",
        styles.bg
      )}
    >
      <div className={clsx("flex flex-col gap-bold-lg", styles.text)}>
        <div className="flex flex-col gap-bold-sm">
          <div className="flex justify-between items-center">
            <Image src={image} alt={title} width={82} height={125} />
            <div className="flex flex-col h-full w-full items-end">
              <div
                className={clsx(
                  styles.circleBg,
                  "rounded-full w-5 h-5 md:w-7 md:h-7 p-2 opacity-25"
                )}
              />
              <div
                className={clsx(
                  "flex relative rounded-full w-16 h-16 md:w-20 md:h-20 p-2 opacity-25 items-center justify-center",
                  styles.circleBg
                )}
              />
              <h2 className="absolute flex w-16 h-16 md:w-20 md:h-20 text-mob-h4 mt-5 md:mt-7 md:text-desk-h4 font-medium text-center justify-center items-center opacity-35">
                {number}
              </h2>
            </div>
          </div>
          <div className={clsx("border-t-4 w-bold-4xl", styles.border)} />
        </div>
        <div className="flex flex-col gap-regular-sm">
          <h3 className="text-mob-h5 md:text-desk-h5 font-medium">{title}</h3>
          <p className="text-mob-tagline md:text-desk-tagline font-normal">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
