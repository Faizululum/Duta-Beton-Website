import "./globals.css";

export const metadata = {
  title: "Duta Beton Mandiri",
  description: "PT. Duta Beton Mandiri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
