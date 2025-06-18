import TitleLayout from "../layout/TextLayout";
import TrustedCard from "../ui/TrustedCard";

const logos = [
  { src: "/trusted/logo_1.jpg" },
  { src: "/trusted/logo_2.jpg" },
  { src: "/trusted/logo_3.jpg" },
  { src: "/trusted/logo_4.jpg" },
  { src: "/trusted/logo_5.jpg" },
];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const repeatedLogos = [...shuffleArray(logos), ...shuffleArray(logos)];

export default function TrustedSection() {
  return (
    <div className="space-text-section overflow-x-clip">
      <TitleLayout
        title="Dipercaya Oleh"
        description="Trusted by the best brands in the world"
      />
      <div className="flex flex-col gap-regular-sm md:gap-bold-sm">
        <div className="w-full overflow-x-clip">
          <div className="flex gap-regular-sm md:gap-bold-sm animate-scroll-right w-max">
            {repeatedLogos.map((logo, index) => (
              <TrustedCard
                key={`row1-${index}`}
                src={logo.src}
                alt={`Logo-${index}`}
              />
            ))}
          </div>
        </div>
        <div className="w-full overflow-x-clip">
          <div className="flex gap-regular-sm md:gap-bold-sm animate-scroll-left w-max">
            {repeatedLogos
              .slice()
              .reverse()
              .map((logo, index) => (
                <TrustedCard
                  key={`row2-${index}`}
                  src={logo.src}
                  alt={`Logo-reversed-${index}`}
                />
              ))}
          </div>
        </div>
        <div className="w-full overflow-x-clip">
          <div className="flex gap-regular-sm md:gap-bold-sm animate-scroll-right w-max">
            {repeatedLogos.map((logo, index) => (
              <TrustedCard
                key={`row1-${index}`}
                src={logo.src}
                alt={`Logo-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
