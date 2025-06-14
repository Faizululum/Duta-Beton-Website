import CardImage from "@/components/ui/CardImage";
import SpecsTable from "@/components/ui/SpecsTable";

export default function SpecsItem({
  imageSrc,
  imageAlt,
  imageAlign,
  specsProps,
}) {
  const isRight = imageAlign === "right";

  return (
    <div
      className={`flex flex-col w-full md:flex-row${
        isRight ? "-reverse" : ""
      } gap-thin-lg md:gap-bold-3xl justify-center md:justify-start items-center`}
    >
      <CardImage
        src={imageSrc}
        alt={imageAlt}
        align={imageAlign}
        variant="medium"
      />
      <SpecsTable {...specsProps} />
      <div className="border-space-gray md:hidden" />
    </div>
  );
}
