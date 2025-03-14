'use client'

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link"
import { motion, useInView } from "framer-motion";

import Header from './../../layouts/header'
import Footer from './../../layouts/footer'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";



export default function Home() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="page page-wrapper" >
            <Header />

            {/* section-1 */}
            <section className="section section-1 m-auto relative" >
                <div className="h-full">
                    <Image src="/images/learn_bg.png" alt="DesigNova" width={0} height={0} sizes="100vw" className="lg:w-full lg:h-screen xl:w-full xl:h-screen w-full h-screen object-cover" quality={100} />

                </div>
            </section>

            {/* Section-2 */}
            <section className="section section-2 my-[25px] sm:my-[75px] md:my-[100px] lg:my-[100px] xl:my-[100px]">
                <div className="container m-auto relative px-8 lg:mx-auto xl:mx-auto">
                    <div className="float-right relative">
                        <Input type="text" placeholder="Search Database" className="w-[350px] border-[#000] pr-8" />
                        <CiSearch className="text-[#000] text-[#000] h-6 w-6 absolute right-[5px] top-3 cursor-pointer" />
                    </div>
                    <div className="clear-both"></div>

                    <div className="grid grid-rows-4 gap-4 mx-4 sm:mx-0 md:mx-0 ld:mx-0 xl:mx-0">
                        <div className="mt-16">
                            <h3 className="flex item-center text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl border-b pb-4 border-[#424242] cursor-pointer">
                                <span className="inline-block w-[50px] sm:w-[175px] md:w-[150px] lg:w-[150px] xl:w-[200px] bg-theme opacity-75 h-7 pt-[5px] rounded-l-sm mr-4 radiant-bg-lg border-t"></span>
                                News
                                <FaCaretDown className="inline-block ml-1" />
                            </h3>
                            <div className="pl-[10px] sm:pl-[50px] md:pl-[50px] lg:pl-[50px] xl:pl-[100px] mt-8 w-[100%] sm:w-[100%] md:w-[75%] lg:w-[75%] xl:w-[75%]">
                                <div>
                                    <h3 className="text-xl">DesigNova Studio</h3>
                                    <p className="text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet maxime provident natus blanditiis consequuntur dolore tenetur esse, a eum dolorum sunt alias voluptatum et rerum quo perspiciatis eos, illum inventore? </p>
                                    <p className=" underline">https://designnova.studio </p>
                                </div>
                                <div className="mt-4 border-t pt-4">
                                    <h3 className="text-xl">DesigNova Studio 2</h3>
                                    <p className="text-md">Ipsum dolor sit amet consectetur, adipisicing. Amet maxime provident natus blanditiis dolore tenetur esse, a eum dolorum sunt alias voluptatum et rerum quo perspiciatis eos, illum? </p>
                                    <p className=" underline">https://designnova2.studio </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16">
                            <h3 className="flex item-center text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl border-b pb-4 border-[#424242] cursor-pointer">
                                <span className="inline-block w-[50px] sm:w-[175px] md:w-[150px] lg:w-[150px] xl:w-[200px] bg-theme opacity-75 h-7 pt-[5px] rounded-l-sm mr-4 radiant-bg-lg border-t"></span>
                                Industry
                                <FaCaretDown className="inline-block ml-1" />
                            </h3>
                            <div className="pl-[10px] sm:pl-[50px] md:pl-[50px] lg:pl-[50px] xl:pl-[100px] mt-8 w-[100%] sm:w-[100%] md:w-[75%] lg:w-[75%] xl:w-[75%]">
                                <div>
                                    <h3 className="text-xl">DesigNova Studio 3</h3>
                                    <p className="text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet maxime provident natus blanditiis consequuntur dolore tenetur esse, a eum dolorum sunt alias voluptatum et rerum quo perspiciatis eos, illum inventore? </p>
                                    <p className=" underline">https://designnova3.studio </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16">
                            <h3 className="flex item-center text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl border-b pb-4 border-[#424242] cursor-pointer">
                                <span className="inline-block w-[50px] sm:w-[175px] md:w-[150px] lg:w-[150px] xl:w-[200px] bg-theme opacity-75 h-7 pt-[5px] rounded-l-sm mr-4 radiant-bg-lg border-t"></span>
                                Manufacturing
                                <FaCaretDown className="inline-block ml-1" />
                            </h3>
                            <div className="pl-[10px] sm:pl-[50px] md:pl-[50px] lg:pl-[50px] xl:pl-[100px] mt-8 w-[100%] sm:w-[100%] md:w-[75%] lg:w-[75%] xl:w-[75%]">
                                <div>
                                    <p className="text-md">No results to show at the moment. </p>
                                </div>

                            </div>
                        </div>

                        <div className="mt-16">
                            <h3 className="flex item-center text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl border-b pb-4 border-[#424242] cursor-pointer">
                                <span className="inline-block w-[50px] sm:w-[175px] md:w-[150px] lg:w-[150px] xl:w-[200px] bg-theme opacity-75 h-7 pt-[5px] rounded-l-sm mr-4 radiant-bg-lg border-t"></span>
                                Branding and Marketing
                                <FaCaretDown className="inline-block ml-1" />
                            </h3>
                            <div className="pl-[10px] sm:pl-[50px] md:pl-[50px] lg:pl-[50px] xl:pl-[100px] mt-8 w-[100%] sm:w-[100%] md:w-[75%] lg:w-[75%] xl:w-[75%]">
                                <div>
                                    <h3 className="text-xl">DesigNova Studio</h3>
                                    <p className="text-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet maxime provident natus blanditiis consequuntur dolore tenetur esse, a eum dolorum sunt alias voluptatum et rerum quo perspiciatis eos, illum inventore? </p>
                                    <p className=" underline">https://designnova.studio </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section >

            {/* section-3 */}
            <section className="section mt-[150px]" >
                <div className="m-auto">
                    <blockquote className="text-6xl italic font-normal text-gray-900 dark:text-white mt-[100px] mb-[-5px] text-center">
                        <motion.h3
                            ref={ref}
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
                            className="text-3xl md:text-5xl lg:text-6xl xl:text-6xl text-center lg:text-5xl md:text-5xl theme-color"
                        >
                            Knowledge is the stepping stone to Greatness
                        </motion.h3>
                    </blockquote>
                </div>
            </section >

            <Footer />
        </div >
    );
}
