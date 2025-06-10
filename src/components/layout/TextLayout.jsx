export default function TitleLayout({ title, description, align = "center" }) {
  const alignmentClass =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`flex flex-col ${alignmentClass}`}>
      <h2 className="text-mob-h4 md:text-desk-h4 font-medium capitalize">
        {title}
      </h2>
      <p className="text-mob-tagline md:text-desk-tagline font-normal text-primary-red">
        {description}
      </p>
    </div>
  );
}

export function BodyLayout({ title, description, subtitle = "" }) {
  return (
    <div className="flex flex-col gap-thin-md md:gap-thin-lg">
      <h1 className="text-mob-h2 font-medium md:text-desk-h2">{title}</h1>
      <h3 className="text-mob-tagline md:text-desk-tagline font-medium">
        {subtitle}
      </h3>
      <p className="text-desc">{description}</p>
    </div>
  );
}
