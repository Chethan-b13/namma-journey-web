"use client";

import React, { useEffect, useState } from "react";
import "../../../public/styles/navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavBarProps {
  alwaysVisible?: boolean;
}

const NavBar = ({ alwaysVisible = false }: NavBarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (alwaysVisible) return; // Skip scroll behavior if visible prop is true

    const handleScroll = () => {
      const navbar = document.querySelector(".navbar-container");
      if (window.scrollY > 100) {
        navbar?.classList.remove("navbar-hidden");
        navbar?.classList.add("navbar-visible");
      } else {
        navbar?.classList.add("navbar-hidden");
        navbar?.classList.remove("navbar-visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [alwaysVisible]);

  const isActive = (path: string) => {
    return pathname === path ? "text-secondary" : "";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-md py-4 transition-all duration-300 navbar-container ${
        alwaysVisible ? "navbar-visible" : "navbar-hidden"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          <span className="text-black">Logout</span>
          <span className="text-primary">loud</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`hover:text-secondary ${
              isActive("/") ? "text-secondary" : ""
            } transition-colors`}
          >
            Home
          </Link>
          {/* <a
            href="/about"
            className={`hover:text-secondary ${
              isActive("/about") ? "text-secondary" : ""
            } transition-colors`}
          >
            Our Story
          </a> */}
          <a
            href="/become-host"
            className={`hover:text-secondary ${
              isActive("/become-host") ? "text-secondary" : ""
            } transition-colors`}
          >
            Host with Us
          </a>
          <a
            href="/partner"
            className={`hover:text-secondary ${
              isActive("/partner") ? "text-secondary" : ""
            } transition-colors`}
          >
            Partner
          </a>
          <button className="bg-primary hover:bg-secondary hover:text-white transition-colors text-black px-4 py-2 rounded-lg font-medium">
            Join Now
          </button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute w-full">
          <div className="flex flex-col space-y-4">
            <a
              href="/about"
              className="hover:text-secondary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Story
            </a>
            <a
              href="/become-host"
              className="hover:text-secondary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Host with Us
            </a>
            <a
              href="/partner"
              className="hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Partner
            </a>
            <button className="bg-primary hover:bg-secondary/90 text-black px-4 py-2 rounded-lg font-medium w-full">
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
