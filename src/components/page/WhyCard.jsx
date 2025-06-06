import CardValue from "../ui/CardValue";

export default function WhyCard() {
  return (
    <div className="h-max flex justify-center -mt-bold-lg z-10 mb-bold-3xl">
      <div className="shadow-shadow-card rounded-xl md:rounded-3xl bg-white w-[400px] md:w-max h-max pt-thin-lg md:pt-regular-lg pb-regular-lg md:p-bold-lg">
        <div className="flex flex-col gap-thin-lg">
          <div className="flex flex-col text-center">
            <h2 className="text-mob-h4 md:text-desk-h4 font-medium capitalize">
              Kenapa Pilih Kami
            </h2>
            <p className="text-mob-tiny md:text-desk-tiny font-normal text-primary-red">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-regular-sm md:gap-bold-sm w-full items-center">
            <CardValue />
            <CardValue />
            <CardValue />
          </div>
        </div>
      </div>
    </div>
  );
}
