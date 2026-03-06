import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { RightPanel } from "@/components/right-panel";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Mission Control",
  description: "Broc & Nano — Mission Control Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen overflow-hidden bg-[#0a0a0f] text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <div className="flex-1 flex overflow-hidden">
            <main className="flex-1 overflow-auto p-6">
              {children}
            </main>
            <RightPanel />
          </div>
        </div>
      </body>
    </html>
  );
}
