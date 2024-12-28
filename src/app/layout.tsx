import type { Metadata } from "next";
import "./globals.css";
import PreventScroll from "@/components/PreventScroll";
import Dock from "@/components/Dock";
import MenuBar from "@/components/MenuBar";
import ContextMenu from "@/components/ContextMenu";

export const metadata: Metadata = {
  title: "Aayan Khan - Portfolio",
  description: "Hey, I'm Aayan Khan, a full-stack developer. I love building things for the web and I'm passionate about learning new technologies and building projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <PreventScroll />
        <ContextMenu />
        <MenuBar />
        {children}
        <Dock />
      </body>
    </html>
  );
}
