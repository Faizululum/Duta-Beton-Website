import Navbar from "@/components/general/Navbar";
import "./globals.css";
import Footer from "@/components/general/Footer";

export const metadata = {
  title: "Duta Beton Mandiri",
  description: "PT. Duta Beton Mandiri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
