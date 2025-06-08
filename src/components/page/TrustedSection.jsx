import TitleLayout from "../layout/TextLayout";
import TrustedCard from "../ui/TrustedCard";

export default function TrustedSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-regular-lg md:gap-bold-lg w-full overflow-hidden">
      <TitleLayout
        title="Dipercaya Oleh"
        description="Trusted by the best brands in the world"
      />
      <div className="flex flex-col gap-regular-sm md:gap-bold-lg justify-center items-center">
        <div className="flex gap-regular-sm md:gap-bold-lg">
          <TrustedCard />
          <TrustedCard />
          <TrustedCard />
          <TrustedCard />
          <TrustedCard />
        </div>
        <div className="flex gap-regular-sm md:gap-bold-lg">
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
