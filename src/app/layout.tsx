import type { Metadata } from "next";
import "./global.css";
import { poppins, raleway, sora } from "@/libs/fonts";

export const metadata: Metadata = {
  title: "Logoutloud",
  description:
    "Logoutloud is an app that helps people disconnect from technology and reconnect with each other through meaningful in-person experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${raleway.variable} ${sora.variable} bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
