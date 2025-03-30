"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Hangouts", href: "/hangouts" },
    { name: "Journeys", href: "/journeys" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold flex items-center space-x-2"
        >
          {/* Logo with text */}
          <img
            src="/images/logo-without-text.svg"
            alt="Manma Journey Logo"
            className="h-10"
          />
          <span className="text-base font-medium text-gray-800">
            Namma Journey
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-gray-700 relative",
                pathname === link.href ? "text-crimson_red font-semibold" : ""
              )}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] h-[2px] w-6 bg-red-500 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        <button className="bg-primary text-black px-4 py-2 rounded-md hover:bg-yellow-400">
          Get the App
        </button>
      </div>
    </header>
  );
}
