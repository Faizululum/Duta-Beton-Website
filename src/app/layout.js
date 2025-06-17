import Navbar from "@/components/general/Navbar";
import "./globals.css";
import Footer from "@/components/general/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Duta Beton Mandiri",
  description: "PT. Duta Beton Mandiri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-roboto">
        <Navbar />
        <Toaster position="top-right" reverseOrder={false} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
