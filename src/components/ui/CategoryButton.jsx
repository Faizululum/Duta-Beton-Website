import { Icon } from "@iconify/react";

export default function CategoryButton({ categoryName, isActive, onClick }) {
  const baseStyle =
    "flex w-full items-center justify-center py-thin-sm md:py-thin-md gap-thin-sm rounded-full transition-all duration-900";

  const activeStyle = "bg-primary-red text-white font-medium";
  const inactiveStyle = "bg-neutral-white text-neutral-grayDark font-normal";

  return (
    <button
    aria-pressed={isActive}
      type="button"
      className={`${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}
      onClick={onClick}
    >
      <p className="text-mob-tagline md:text-desk-tagline">{categoryName}</p>
      {isActive && (
        <Icon
          icon="iconamoon:arrow-down-2"
          width="20"
          height="20"
          className="md:hidden"
        />
      )}
    </button>
  );
}
