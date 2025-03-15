import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";



export const metadata = {
  title: "Step Up Web Profile",
  description: "Step Up Project",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased pt-[108px] lg:pt-[211px] px-5`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
