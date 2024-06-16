import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Lupleg Challenge Dashboard",
  description:
    "Lupleg Coding Challenge Dashboard for all users free to take part in the challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
