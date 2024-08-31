import { Inter } from "next/font/google";
import "../globals.css";
import DashNav from "@/components/DashComponents/DashNav";
import LeftSideBar from "@/components/DashComponents/LeftSideBar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Building Africa's Tech Future",
  description:
    "Join us in shaping the future of technology in Africa! Our developer community empowers Africans with the skills and resources to solve problems, drive innovation, and create a more sustainable future.",
};

export default function CoursesLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>
          <DashNav />

          <LeftSideBar />
          <div className="p-8 px-4 lg:ml-72 mt-14 mr-0">{children}</div>
        </body>
      </ClerkProvider>
    </html>
  );
}
