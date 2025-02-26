import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSideBar } from "./components/AppSideBar"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MoodSic",
  description: "A Moody Listening Experience",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="h-full bg-black">
        <SidebarProvider className="flex h-full">
          <AppSideBar />
          <SidebarTrigger />
          <main className="h-full flex-1 overflow-y-auto py-2">
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}