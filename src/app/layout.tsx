import type { Metadata } from "next";
import "./global.css";
import { poppins, raleway, sora } from "@/libs/fonts";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Namma Journey",
  description:
    "Namma Journey is a travel app that helps travellers discover travel plans and join rooms to travel together.",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
