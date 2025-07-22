"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { button } from "framer-motion/client";
import GTranslate from "@/app/utils/Gtranslate";

type SectionKey =
  | "navbar"
  | "hero"
  | "about"
  | "products"
  | "services"
  | "testimonials"
  | "properties"
  | "homedecor"
  | "service"
  | "interior-decor"
  | "homeAccessories"
  | "interiorDecor";

interface NavbarProps {
  onNavClick?: (section: SectionKey) => void;
}

const navLinks: { label: string; section: SectionKey; href: string }[] = [
  { label: "About Us", section: "about", href: "#about" },
  { label: "Home Accessories", section: "homeAccessories", href: "#homeAccessories" },
  { label: "Interior Decor", section: "interiorDecor", href: "#interiorDecor" },
  { label: "Services", section: "services", href: "#services" },
  { label: "Virtual Tour", section: "testimonials", href: "#virtualTour" },
];

interface languagesType<S,N>{
  id:N,
  language:S
}

const languages : languagesType<string,number>[] = [
  {
    id:1,
    language:"Chinese"
  },
  {
    id:2,
    language:"Russian"
  },
  {
    id:3,
    language:"Italian"
  },
  {
    id:4,
    language:"English"
  },
]

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openLanguageSwticher,setOpenLanguageSwitcher] = useState<boolean>(false)
  const languageSwitcherBtn = useRef<HTMLButtonElement | null >(null)
  const languageSwitcherBtnMobile = useRef<HTMLButtonElement | null >(null)
  const languageSwitcheRef = useRef<HTMLElement | null>(null)



  useEffect(()=>{

const btnElement = languageSwitcherBtn.current as HTMLButtonElement
const btnElementMobile = languageSwitcherBtnMobile.current as HTMLButtonElement
const languageSwitcherElement = languageSwitcheRef.current as HTMLElement


console.log(btnElement.getBoundingClientRect());
if (window.innerWidth >= 768) {
  const getDistanceOfBtnFromTheTop =  btnElement.getBoundingClientRect().bottom
  languageSwitcherElement.style.top = `${getDistanceOfBtnFromTheTop}px`
}  
else{
  
  const getDistanceOfBtnFromTheTop =  btnElementMobile.getBoundingClientRect().bottom
  languageSwitcherElement.style.top = `${getDistanceOfBtnFromTheTop}px`
} 


  },[openLanguageSwticher])

  
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const toggleLanguageSwitcher = ():void => setOpenLanguageSwitcher((prev) => !prev);

  return (
    <header  className="w-full bg-white sticky top-0 z-50 shadow-md font-inter overflow-x-hidden">


      <div className="container mx-auto px-2 py-3 flex justify-between items-center ">
        {/* Logo */}
        <div className="flex items-center ">
          <Link href={"/"}><Image
            src="/vest-logo.png"
            alt="Vestvale Logo"
            width={20}
            height={30}
            className="md:w-14 w-10"
            /></Link>
        </div>


          {/* list of languages */}
        <aside ref={languageSwitcheRef} className={`fixed ${openLanguageSwticher ?"flex" :"hidden"} right-[0%] bg-[#D9D9D9] flex-col  w-[120px]`}>
{languages.map((item,_)=>{
return <button className="text-center text-black py-1 hover:bg-white cursor-pointer transition ease-in-out duration-500 py-2" key={item.id}>
{item.language}
</button>
})}
</aside>


        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-8 ">
          {navLinks.map((link) => (
            <Link
              key={link.section}
              href={link.href}
              onClick={(e) => {
                if (link.label == "Virtual Tour") {
                  const el = document.getElementById("virtualTour")
                  el?.scrollIntoView({behavior:"smooth"})
                  setTimeout(()=>{

                    setIsOpen(false);
                  },100)
                  return
                }

                e.preventDefault();
                onNavClick?.(link.section);
              }}
              className="text-[#141414] font-medium hover:text-[#222222] transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>


{/* language switcher btn */}
<div className="hidden md:block " >
<GTranslate/>
           <button 
           onClick={toggleLanguageSwitcher}
           ref={languageSwitcherBtn}
           className="cursor-ponter hidden"> <Image src={"/language-switcher.svg"}
           width={50}
           height={30}
           className="cursor-pointer" alt="language switcher "  /></button>
        </div>
        


        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          {/* language */}
          <GTranslate/>
        <button 
           onClick={toggleLanguageSwitcher}
           ref={languageSwitcherBtnMobile}
           className="cursor-ponter hidden"> <Image src={"/language-switcher.svg"}
           width={30}
           height={30}
           className="cursor-pointer" alt="language switcher "  /></button>
{/* bar */}

          <button
            onClick={toggleMenu}
            className="text-[#9d6b53] focus:outline-none"
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#9d6b53] text-white"
          >
            <div className="px-4 py-2 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.section}
                  href={link.href}
                  className="block py-2 hover:bg-amber-900 px-2 rounded"
                  onClick={(e) => {
                    // e.preventDefault();
                    if (link.label == "Virtual Tour") {
                      const el = document.getElementById("virtualTour")
                      el?.scrollIntoView({behavior:"smooth"})
                      setTimeout(()=>{

                        setIsOpen(false);
                      },100)
                      return
                    }
                    onNavClick?.(link.section);
                    setTimeout(()=>{

                      setIsOpen(false);
                    },100)
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Navbar;
