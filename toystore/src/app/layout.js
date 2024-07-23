import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";
import "./globals.css"; // Global styles
import Navbar from './components/Navbar/Navbar'; // Updated path to Navbar.jsx


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Toytopia Store",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> 
        {children}
      </body>
    </html>
  );
}
