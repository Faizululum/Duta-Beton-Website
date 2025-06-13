export default function Input({ title, value, onChange }) {
  return (
    <div className="flex flex-col w-full gap-thin-sm">
      <p className="text-mob-h6 md:text-desk-h6">{title}</p>
      <div className="flex w-full items-center">
        <input
          type="number"
          min="0"
          step="10"
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          placeholder="Masukkan Angka"
          className="w-full rounded-l-xl out-of-range:border-red-500 border-2 border-neutral-grayLight-60 border-r-0 px-thin-lg md:px-regular-sm py-thin-md md:py-thin-lg"
        />
        <span className="bg-primary-red text-white border-2 md:border-4 border-primary-red text-center h-full text-mob-h6 md:text-desk-h6 px-regular-sm py-thin-md rounded-r-xl">m</span>
      </div>
    </div>
  );
}
