import { Poppins, Raleway, Roboto, Sora } from "next/font/google";

// Heading (Poppins): 24px–36px, bold weight (SemiBold or Bold).
// Subheading (Raleway): 18px–24px, medium or regular weight.
// Body Text (Roboto): 14px–16px, regular or light weight.

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const raleway = Raleway({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

const roboto = Roboto({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const sora = Sora({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-sora",
});

// Export the fonts to be used in the application
export { poppins, raleway, roboto, sora };
