"use client";

import { useState } from "react";
import Input from "../general/Input";

export default function CalculatorCard({ category }) {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const blockArea = (10.5 * 21) / 100;

  const calculateTotal = () => {
    if (category === "Concrete Block") {
      const totalArea = length * width;
      const totalBlocks = (totalArea / blockArea) * 100;
      return `${Math.ceil(totalBlocks)} Pcs`;
    } else {
      const totalVolume = length * width * height;
      const totalLiters = totalVolume * 1000;
      return `${Math.ceil(totalLiters)} Liter`;
    }
  };

  return (
    <div className="w-full md:w-[600px] md:-ml-regular-md md:z-10 h-max md:min-h-[376px] p-thin-lg md:p-regular-lg bg-white shadow-shadow-card-small rounded-2xl">
      <div className="flex flex-col gap-regular-sm">
        <h3 className="text-mob-h5 md:text-desk-h5 font-medium text-center text-primary-red">
          Hitung Kebutuhan Anda
        </h3>
        <div className="flex flex-col gap-bold-sm">
          <div className="flex flex-col gap-thin-md">
            <Input title="Lebar (m)" value={length} onChange={setLength} />
            <Input title="Panjang (m)" value={width} onChange={setWidth} />
            {category === "Ready Mix" && (
              <Input title="Tinggi (m)" value={height} onChange={setHeight} />
            )}
          </div>
          <div className="flex flex-col gap-thin-md md:flex-row md:items-center justify-between">
            <div className="flex flex-col">
              <h4 className="text-mob-h5 font-medium">Total</h4>
              <p className="text-desc">Total Estimasi Kebutuhan Anda</p>
            </div>
            <div className="w-full md:w-[300px] h-max flex justify-center items-center bg-primary-red rounded-xl">
              <h5 className="font-medium py-thin-lg text-white text-mob-h6">
                {calculateTotal()}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
