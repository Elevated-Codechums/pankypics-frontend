import HamburgerOpen from "../../assets/hamburger-open.svg";
import HamburgerClose from "../../assets/hamburger-close.svg";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useScrollState from "@/Hooks/useScrollState";
import Instagram from "../../assets/instagram.svg";
import Link from "next/link";
import { cn } from "@/libs/utils"; 


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isScrolled = useScrollState();

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      className={cn(
        "fixed z-50 top-0 left-0 w-full transition-all pt-7 duration-300",
        isScrolled && "shadow-lg backdrop-blur-md"
      )}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex  items-center px-64  justify-between py-4">
        {/* Left Section */}
        <div
          className={cn(
            "hidden md:flex items-center gap-10 space-x-6 text-xl text-headtext"
          )}
        >
          <Link href="/my-favourites" className="hover:underline">
            My Favourites
          </Link>
          <Link href="/albums" className="hover:underline">
            Albums
          </Link>
        </div>

        {/* Center Section */}
        <Link
          href="/"
          className={cn(
            "font-racing_sans text-6xl   gap-10 text-headtext mx-12"
          )}
        >
          PankyPics
        </Link>

        {/* Right Section */}
        <div
          className={cn(
            "hidden md:flex items-center space-x-6 gap-10 text-xl text-headtext"
          )}
        >
          <Link href="/about-me" className="hover:underline">
            About Me
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/" className="hover:scale-110 transition-transform">
            <Instagram />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          {isOpen ? (
            <HamburgerClose
              onClick={() => setIsOpen(false)}
              className={cn("cursor-pointer text-white")}
            />
          ) : (
            <HamburgerOpen
              onClick={() => setIsOpen(true)}
              className={cn("cursor-pointer text-white")}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            className={cn(
              "flex flex-col items-center bg-brown-900 text-headtext gap-4 py-6 md:hidden"
            )}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <Link href="/my-favourites" className="text-xl hover:underline">
              My Favourites
            </Link>
            <Link href="/albums" className="text-xl hover:underline">
              Albums
            </Link>
            <Link href="/about-me" className="text-xl hover:underline">
              About Me
            </Link>
            <Link href="/contact" className="text-xl hover:underline">
              Contact
            </Link>
            <Link
              href="/"
              className="mt-4 hover:scale-110 transition-transform"
            >
              <Instagram />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
