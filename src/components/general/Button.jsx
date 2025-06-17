import Image from "next/image";
import clsx from "clsx";

const ICONS = {
  arrowRed: {
    fill: "/icons/arrow_red.svg",
    outline: "/icons/arrow_red_outline.svg",
  },
  arrowWhite: {
    outline: "/icons/arrow_red.svg",
    fill: "/icons/arrow_red_outline.svg",
  },
  phoneRed: {
    fill: "/icons/phone_red.svg",
    outline: "/icons/phone_red_outline.svg",
  },
  phoneWhite: {
    outline: "/icons/phone_red.svg",
    fill: "/icons/phone_red_outline.svg",
  },
  arrowYellow: {
    fill: "/icons/arrow_yellow.svg",
    outline: "/icons/arrow_yellow_outline.svg",
  },
};

export default function Button({
  label,
  variant = "filled", // 'filled', 'outline', 'disabled'
  color = "red", // 'red', 'gray'
  icon = "arrowRed", // 'arrowRed', 'phoneRed'
  justify = "between", // 'between', 'center'
}) {
  const base = clsx(
    "group flex w-full items-center gap-1 md:gap-2 rounded-full font-medium text-mob-tagline md:text-desk-tagline pr-thin-xs md:pr-1 pl-thin-md md:pl-3 py-thin-xs md:py-1 transition",
    {
      "justify-between": justify === "between",
      "justify-center": justify === "center",
    }
  );

  const variants = {
    filled: {
      red: "bg-primary-red border-2 border-primary-red text-white hover:bg-transparent hover:border-primary-red hover:text-primary-red",
      yellow:
        "bg-secondary-yellow border-2 border-secondary-yellow text-white hover:bg-transparent hover:border-secondary-yellow hover:text-secondary-yellow",
    },
    outline: {
      red: "bg-transparent border-2 border-primary-red text-primary-red hover:bg-primary-red hover:border-primary-red hover:text-white",
      white:
        "bg-transparent border-2 border-white text-white hover:bg-white hover:border-white hover:text-primary-red",
      yellow:
        "bg-transparent border-2 border-secondary-yellow text-secondary-yellow hover:bg-secondary-yellow hover:border-secondary-yellow hover:text-white",
    },
    disabled: {
      red: "bg-gray-100 border-2 border-gray-300 text-gray-400 cursor-not-allowed",
      white: "bg-gray-100 text-gray-400 cursor-not-allowed",
    },
  };

  const classes = clsx(base, variants[variant][color]);
  const currentIcon = ICONS[icon];

  return (
    <button className={classes} disabled={variant === "disabled"}>
      {label}
      {currentIcon && (
        <div className="relative w-[22px] h-[22px] md:w-[32px] md:h-[32px]">
          {/* Ikon default */}
          <Image
            src={variant === "filled" ? currentIcon.fill : currentIcon.outline}
            alt="icon"
            fill
            sizes="(min-width: 768px) 32px, 22px"
            className={clsx("absolute transition-opacity", {
              "opacity-100 group-hover:opacity-0": variant === "filled",
              "opacity-0 group-hover:opacity-100": variant === "outline",
            })}
          />
          {/* Ikon hover */}
          <Image
            src={variant === "filled" ? currentIcon.outline : currentIcon.fill}
            alt="icon-hover"
            fill
            sizes="(min-width: 768px) 32px, 22px"
            className={clsx("absolute transition-opacity", {
              "opacity-0 group-hover:opacity-100": variant === "filled",
              "opacity-100 group-hover:opacity-0": variant === "outline",
            })}
          />
        </div>
      )}
    </button>
  );
}
