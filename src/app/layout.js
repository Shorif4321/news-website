import Footer from "@/components/shared/Footer";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

export const metadata = {
  title: "daily start news portal",
  description: "The daily star is working for general public",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
