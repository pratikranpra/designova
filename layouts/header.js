'use client'

import { static_const } from '../lib/constants';

import Link from 'next/link'
import { useState, useEffect } from "react";

/*import { Home, Menu, ShoppingBag, User, Search, IndianRupee, X } from "lucide-react";
import { Icons } from "@/components/ui/icons"*/

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

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
import { Separator } from '@radix-ui/react-select';


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
              <h3 className='text-2xl font-light niramit-3 lg:text-4xl lg:text-3xl md:text-2xl'>{static_const['site_title']}</h3>
            </Link>
          </div>
          <div className="header-menu-item three flex flex-row hidden d-none">
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

          <div className='navigation-outer hidden md:block'>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Facets</NavigationMenuTrigger>
                  <NavigationMenuContent className="shadow-xl">

                    <div className="row-span-3-">
                      <Link href="/facets" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          <span className='text-[20px] text-bold theme-color'>Explore Facets</span>
                        </NavigationMenuLink>
                      </Link>
                    </div>

                    <ul className="grid gap-3 p-4 lg:grid-rows-[.75fr_1fr] min-w-[225px]">
                      <li className="row-span-3">
                        <Link href="/3d-cad" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <span className='underline underline-offset-[6px] decoration-[#7D8494]'>CAD Design</span>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li className="row-span-3">
                        <Link href="/creation" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <span className='underline underline-offset-[6px] decoration-[#7D8494]'>Creation</span>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li className="row-span-3">
                        <Link href="/casting" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <span className='underline underline-offset-[6px] decoration-[#7D8494]'>Casting</span>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li className="row-span-3">
                        <Link href="/finishing" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <span className='underline underline-offset-[6px] decoration-[#7D8494]'>Finishing</span>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li className="row-span-3">
                        <Link href="/setting" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <span className='underline underline-offset-[6px] decoration-[#7D8494]'>Setting</span>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li className="row-span-3">
                        <Link href="/branding" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <span className='underline underline-offset-[6px] decoration-[#7D8494]'>Branding</span>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li className="row-span-3">
                        <Link href="/partnership" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <span className='underline underline-offset-[6px] decoration-[#7D8494]'>Partnership</span>
                          </NavigationMenuLink>
                        </Link>
                      </li>

                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>


                <NavigationMenuItem>
                  <NavigationMenuTrigger>Story</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 lg:grid-rows-[.75fr_1fr] min-w-[225px]">
                      <li className="row-span-3">
                        <Link href="/our-story" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <span className='underline underline-offset-[6px] decoration-[#7D8494]'>Our Story</span>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li className="row-span-3">
                        <Link href="/sustainability" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <span className='underline underline-offset-[6px] decoration-[#7D8494]'>Sustainability</span>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li className="row-span-3">
                        <Link href="/our-team" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <span className='underline underline-offset-[6px] decoration-[#7D8494]'>Our Team</span>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li className="row-span-3">
                        <Link href="/partnership" legacyBehavior passHref>
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            <span className='underline underline-offset-[6px] decoration-[#7D8494]'>Partnership / Brands</span>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>


                <NavigationMenuItem>
                  <Link href="/learn" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Learn
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact-us" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
                    <div className="submenu">
                      <ul className="pl-4 pt-1">
                        <li className="row-span-3">
                          <Link href="/3d-cad" className='text-[18px] my-[4px] inline-block'>CAD Design</Link>
                        </li>
                        <li className="row-span-3">
                          <Link href="/creation" className='text-[18px] my-[4px] inline-block'>Creation</Link>
                        </li>
                        <li className="row-span-3">
                          <Link href="/casting" className='text-[18px] my-[4px] inline-block'>Casting</Link>
                        </li>
                        <li className="row-span-3">
                          <Link href="/finishing" className='text-[18px] my-[4px] inline-block'>Finishing</Link>
                        </li>
                        <li className="row-span-3">
                          <Link href="/setting" className='text-[18px] my-[4px] inline-block'>Setting</Link>
                        </li>
                        <li className="row-span-3">
                          <Link href="/branding" className='text-[18px] my-[4px] inline-block'>Branding</Link>
                        </li>
                        <li className="row-span-3">
                          <Link href="/partnership" className='text-[18px] my-[4px] inline-block'>Partnership</Link>
                        </li>
                      </ul>
                    </div>

                  </div>
                  <div className='m-[20px]'>
                    <Link className='text-[18px]' href={"/story"}>Story</Link>
                    <div className="submenu">
                      <ul className="pl-4 pt-1">
                        <li className="row-span-3">
                          <Link href="/our-story" className='text-[18px] my-[4px] inline-block'>Our Story</Link>
                        </li>
                        <li className="row-span-3">
                          <Link href="/sustainability" className='text-[18px] my-[4px] inline-block'>Sustainability</Link>
                        </li>
                        <li className="row-span-3">
                          <Link href="/our-team" className='text-[18px] my-[4px] inline-block'>Our Team</Link>
                        </li>
                        <li className="row-span-3">
                          <Link href="/partnership" className='text-[18px] my-[4px] inline-block'>Partnership / Brands</Link>
                        </li>
                      </ul>
                    </div>
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