import NavbarWrapper from "@/components/general/NavbarWrapper";
import Footer from "@/components/general/Footer";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Duta Beton Mandiri",
  description: "PT. Duta Beton Mandiri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-roboto">
        <NavbarWrapper />
        <Toaster position="top-right" reverseOrder={false} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
