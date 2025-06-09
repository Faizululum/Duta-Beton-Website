import Image from "next/image";
import clsx from "clsx";

const ICONS = {
  arrowRedFill: "/icons/arrow_red.svg",
  arrowRedOutline: "/icons/arrow_red_outline.svg",
  phoneRedFill: "/icons/phone_red.svg",
  phoneRedOutline: "/icons/phone_red_outline.svg",
  arrowYellowFill: "/icons/arrow_yellow.svg",
  arrowYellowOutline: "/icons/arrow_yellow_outline.svg",
};

export default function Button({
  label,
  variant = "filled", // 'filled', 'outline', 'disabled'
  color = "red",       // 'red', 'gray'
  icon = "arrowRed",   // 'arrowRed', 'phoneRed'
  justify = "between", // 'between', 'center'
  onClick,
}) {
  const base = clsx(
    "flex w-full items-center gap-1 md:gap-2 rounded-full font-medium text-mob-tagline md:text-desk-tagline pr-thin-xs md:pr-1 pl-thin-md md:pl-3 py-thin-xs md:py-1 transition",
    {
      "justify-between": justify === "between",
      "justify-center": justify === "center",
    }
  );

  const variants = {
    filled: {
      red: "bg-primary-red text-white",
      yellow: "bg-secondary-yellow text-secondary-yellow",
    },
    outline: {
      red: "bg-transparent border-2 border-primary-red text-primary-red",
      white: "bg-transparent border-2 border-white text-white",
      yellow: "bg-transparent border-2 border-secondary-yellow text-secondary-yellow",
    },
    disabled: {
      red: "bg-gray-100 border-2 border-gray-300 text-gray-400 cursor-not-allowed",
      white: "bg-gray-100 text-gray-400 cursor-not-allowed",
    },
  };

  const classes = clsx(base, variants[variant][color]);

  return (
    <button
      className={classes}
      disabled={variant === "disabled"}
      onClick={onClick}
    >
      {label}
      {icon && (
        <div className="relative w-[22px] h-[22px] md:w-[32px] md:h-[32px]">
          <Image
            src={ICONS[icon] || ICONS.arrowRedFill}
            alt="icon"
            fill
            sizes="(min-width: 768px) 32px, 22px"
          />
        </div>
      )}
    </button>
  );
}
