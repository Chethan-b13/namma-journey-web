import type { Metadata } from "next";
import "../../public/styles/global.css";
import { poppins, raleway, roboto } from "@/libs/fonts";
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
        className={`${poppins.variable} ${raleway.variable} ${roboto.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
