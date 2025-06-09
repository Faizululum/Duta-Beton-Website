export default function ClientCard({
  count = "100+",
  label = "Client Reviews",
  textColor = "text-secondary-yellow",
  bgColor = "bg-white",
  border = false,
}) {
  return (
    <div
      className={`flex flex-col w-max h-max rounded-full py-thin-sm md:py-thin-md px-regular-md md:px-bold-sm text-center ${textColor} ${bgColor} ${
        border ? "border-2 md:border-4 border-current bg-transparent" : ""
      }`}
    >
      <h2 className="text-mob-h3 md:text-desk-h1 font-medium -mb-thin-md md:-mb-regular-sm">
        {count}
      </h2>
      <p className="text-mob-h6 md:text-desk-h5 font-normal">{label}</p>
    </div>
  );
}
