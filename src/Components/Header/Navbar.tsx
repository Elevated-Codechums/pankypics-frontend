import Link from "next/link";
import Instagram from "../../assets/instagram.svg";
import Menu from "./Menu";
import HamburgerOpen from "../../assets/hamburger-open.svg";
import HamburgerClose from "../../assets/hamburger-close.svg";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";


import useScrollState from "@/Hooks/useScrollState";
import { racing_sans } from "@/libs/fonts";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const isScrolled = useScrollState();

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  useEffect(() => {
    setIsClient(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  if (!isClient) return null;

  return (
    <motion.div
      className="fixed z-50 top-0 left-0 w-full"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className={`flex items-center justify-center px-10 mt-10 py-3 text-2xl bg-brown-900 text-headtext drop-shadow-md ${
          isScrolled ? "opacity-0" : ""
        }`}
      >
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/my-favourites">My Favourites</Link>
          <Link href="/albums">Albums</Link>
		  <div>
          <Link href="/">
            <span className="font-racing_sans font-bold text-6xl">PankyPics</span>
          </Link>
        </div>
          <Link href="/about-me">About Me</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="hidden md:flex">
          <Link href="/">
            <Instagram />
          </Link>
        </div>
        <div className="md:hidden flex hover:cursor-pointer">
          {isOpen ? (
            <HamburgerClose onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <HamburgerOpen onClick={() => setIsOpen(!isOpen)} />
          )}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            className="flex flex-col items-center justify-center bg-brown-900 text-headtext drop-shadow-md gap-5 py-5"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <Link href="/my-favourites">My Favourites</Link>
            <Link href="/albums">Albums</Link>
            <Link href="/about-me">About Me</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/">
              <span className="mt-5">
                <Instagram />
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
