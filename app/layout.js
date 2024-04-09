import Navbar from "../app/components/Header";
import "./globals.css";
import Footer from "../app/components/Footer";


export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
