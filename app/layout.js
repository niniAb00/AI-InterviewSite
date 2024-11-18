import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import Header from "./dashboard/_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HRWise",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="px-5 md:px-20 lg:px-15 bg-[#fcf7ec]">
            <Toaster />

            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
