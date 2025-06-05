// components/ui/Button.jsx
import Image from "next/image";
import clsx from "clsx";

const ICONS = {
  arrowRed: "/icons/arrow_red.svg",
  phoneRed: "/icons/phone_red.svg",
};

export default function Button({
  label,
  variant = "filled",     // 'filled', 'outline', 'disabled'
  color = "red",           // 'red', 'gray'
  icon = "arrow",          // 'arrow', 'phone'
  onClick,
}) {
  const base = "flex items-center gap-2 rounded-full font-medium text-desk-tagline pr-1 pl-3 py-1 transition";

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

  const classes = clsx(
    base,
    variants[variant][color]
  );

  return (
    <button className={classes} disabled={variant === "disabled"} onClick={onClick}>
      {label}
      {icon && (
        <Image src={ICONS[icon]} alt="icon" width={32} height={32} />
      )}
    </button>
  );
}
