// components/ui/Button.jsx
import Image from "next/image";
import clsx from "clsx";

const ICONS = {
  arrowRed: "/icons/arrow_red.svg",
  phoneRed: "/icons/phone_red.svg",
};

export default function Button({
  label,
  variant = "filled", // 'filled', 'outline', 'disabled'
  color = "red", // 'red', 'gray'
  icon = "arrow", // 'arrow', 'phone'
  onClick,
}) {
  const base =
    "flex items-center gap-1 md:gap-2 rounded-full font-medium text-mob-tagline md:text-desk-tagline pr-thin-xs md:pr-1 pl-thin-md md:pl-3 py-thin-xs md:py-1 transition";

  const variants = {
    filled: {
      red: "bg-primary-red text-white",
    },
    outline: {
      red: "bg-transparent border-2 border-primary-red text-primary-red",
      white: "bg-transparent border-2 border-white text-white",
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
            src={ICONS[icon]}
            alt="icon"
            fill
            sizes="(min-width: 768px) 32px, 22px"
          />
        </div>
      )}
    </button>
  );
}
