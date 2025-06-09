import TitleLayout from "../layout/TextLayout";
import TrustedCard from "../ui/TrustedCard";

export default function TrustedSection() {
  return (
    <div className="space-text-section overflow-hidden">
      <TitleLayout
        title="Dipercaya Oleh"
        description="Trusted by the best brands in the world"
      />
      <div className="flex flex-col gap-regular-sm md:gap-bold-sm justify-center items-center">
        <div className="flex gap-regular-sm md:gap-bold-sm">
          <TrustedCard />
          <TrustedCard />
          <TrustedCard />
          <TrustedCard />
          <TrustedCard />
        </div>
        <div className="flex gap-regular-sm md:gap-bold-sm">
          <TrustedCard />
          <TrustedCard />
          <TrustedCard />
          <TrustedCard />
          <TrustedCard />
          <TrustedCard />
        </div>
      </div>
    </div>
  );
}
