import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
