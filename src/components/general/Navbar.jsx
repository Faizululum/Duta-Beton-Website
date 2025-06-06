import Link from "next/link";
import Button from "./Button";
import Logo from "../ui/Logo";

export default function Navbar() {
  return (
    <nav className="h-[100px] w-full flex justify-between items-center px-bold-4xl font-roboto font-normal fixed drop-shadow-md bg-white z-50">
      <Logo />
      <div className="flex gap-10 items-center">
        <Link href="/">Beranda</Link>
        <Link href="/about">Tentang</Link>
        <Link href="/product">Produk</Link>
        <Link href="/project">Proyek</Link>
        <Link href="/calculator">Kalkulator</Link>
        <Link href="/contact">
          <Button label="Hubungi Kami" icon="phoneRed" variant="outline" />
        </Link>
      </div>
    </nav>
  );
}
