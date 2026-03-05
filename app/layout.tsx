import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

export const metadata: Metadata = {
  title: "Mission Control",
  description: "Broc & Nano — Mission Control Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen overflow-hidden bg-[#0f0f0f] text-white">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
