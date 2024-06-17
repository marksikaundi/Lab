import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Building Africa's Tech Future",
  description:
    "Join us in shaping the future of technology in Africa! Our developer community empowers Africans with the skills and resources to solve problems, drive innovation, and create a more sustainable future.",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
  );
}


// For reference use this link: https://icodethis.com/pro