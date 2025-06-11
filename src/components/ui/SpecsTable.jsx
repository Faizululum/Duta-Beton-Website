import Image from "next/image";

export default function SpecsTable() {
  return (
    <div className="flex flex-col gap-thin-sm text-right">
      <h4 className="text-mob-h5 md:text-desk-h5 font-medium text-black">
        Product Paving
      </h4>
      <div className="flex flex-col gap-thin-md">
        <div className="flex flex-col">
          <h5 className="text-mob-tagline md:text-desk-tagline font-medium text-primary-red">
            Warna
          </h5>
          <div className="flex -space-x-regular-lg md:-space-x-bold-sm justify-end">
            <span className="bg-neutral-white px-bold-sm md:px-bold-lg py-thin-sm md:py-thin-md rounded-full">
              Abu Abu
            </span>
            <span className="bg-neutral-black px-bold-sm md:px-bold-lg py-thin-sm md:py-thin-md rounded-full text-white">
              Hitam
            </span>
            <span className="bg-primary-red px-bold-sm md:px-bold-lg py-thin-sm md:py-thin-md rounded-full text-white">
              Merah
            </span>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-thin-md">
          <table className="text-center border-4 border-white">
            <thead>
              <tr>
                <th className="thead">Tebal</th>
                <th className="thead">Lebar</th>
                <th className="thead">Panjang</th>
                <th className="thead">Mutu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td-class">6 cm</td>
                <td className="td-class">10,5 cm</td>
                <td className="td-class">21 cm</td>
                <td className="td-class">K 300</td>
              </tr>
              <tr>
                <td className="td-class">8 cm</td>
                <td className="td-class">10,5 cm</td>
                <td className="td-class">21 cm</td>
                <td className="td-class">K 300</td>
              </tr>
              <tr>
                <td className="td-class">8 cm</td>
                <td className="td-class">10,5 cm</td>
                <td className="td-class">21 cm</td>
                <td className="td-class">K 400</td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-col items-center gap-thin-md">
            <div className="w-[64px] md:w-[112px] h-[64px] md:h-[112px] relative">
              <Image src="/product/pattern.jpg" alt="Pattern" fill />
            </div>
            <p className="text-mob-tagline md:text-desk-tagline font-normal">
              1 M = 44 pcs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
