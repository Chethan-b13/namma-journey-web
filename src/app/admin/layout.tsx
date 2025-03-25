import { Toaster } from "@/components/ui/sonner";
import Providers from "./providers";

export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Providers>{children}</Providers>
      <Toaster position="top-center" richColors />
    </>
  );
}
