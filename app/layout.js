import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AuraScale ",
  description:
    "Helping skin and dental clinics get more local patients through Google Maps optimization and mobile-first landing pages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-white text-neutral-950 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
