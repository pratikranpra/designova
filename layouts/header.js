'use client'

import { static_const } from '../lib/constants';

import Link from 'next/link'
import Image from "next/image";
import { useState, useEffect } from "react";

/*import { Home, Menu, ShoppingBag, User, Search, IndianRupee, X } from "lucide-react";
import { Icons } from "@/components/ui/icons"*/
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function HeaderLogin() {
  const logo_url = "/images/" + static_const['site_logo']
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <div className={`z-50 ${isSticky ? 'sticky-header' : 'absolute-header'} `}>
    <div className="z-50 sticky-header shadow-xl">
      <div className="container container-lg lg:px-[20px] xl:px-0 md:px-[20px] px-[20px] m-auto">
        <div className="flex items-center header-menu justify-between my-4">
          <div className="header-menu-item one">
            <Link href="/">
              {/* <Image className='mt-4' src={logo_url} height={200} width={200} alt="Design Nova" loading="lazy" quality={100} /> */}
              <h3 className='text-2xl font-light niramit-3 lg:text-4xl lg:text-3xl md:text-2xl'>{static_const['site_title']}</h3>
            </Link>
          </div>
          <div className="header-menu-item three flex flex-row hidden md:flex lg:flex xl:flex">
            <div className='mx-[20px]'>
              <Link className='text-[18px]' href={"/facets"}>Facets</Link>
            </div>
            <div className='mx-[20px]'>
              <Link className='text-[18px]' href={"/our-story"}>Story</Link>
            </div>
            <div className='mx-[20px]'>
              <Link className='text-[18px]' href={"/learn"}>Learn</Link>
            </div>
            <div className='mx-[20px] mr-0'>
              <Link className='text-[18px]' href={"/contact-us"}>Contact Us</Link>
            </div>
          </div>

          <div className='block md:hidden lg:hidden xl:hidden'>
            <Sheet className="z-51">
              <SheetTrigger asChild>
                <div>
                  <svg width="30" height="30" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1.25" x2="32" y2="1.25" stroke="black" strokeWidth="1.5" />
                    <line y1="9.25" x2="32" y2="9.25" stroke="black" strokeWidth="1.5" />
                    <line y1="17.25" x2="32" y2="17.25" stroke="black" strokeWidth="1.5" />
                  </svg>
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="ml-6">Menu</SheetTitle>
                  <SheetDescription>

                  </SheetDescription>
                </SheetHeader>
                <div className="py-8 px-4">
                  <div className='m-[20px]'>
                    <Link className='text-[18px]' href={"/facets"}>Facets</Link>
                  </div>
                  <div className='m-[20px]'>
                    <Link className='text-[18px]' href={"/story"}>Story</Link>
                  </div>
                  <div className='m-[20px]'>
                    <Link className='text-[18px]' href={"/learn"}>Learn</Link>
                  </div>
                  <div className='m-[20px] mr-0'>
                    <Link className='text-[18px]' href={"/contact-us"}>Contact Us</Link>
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div >
  );
}