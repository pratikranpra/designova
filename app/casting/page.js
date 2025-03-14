'use client'

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link"
import { motion, useInView } from "framer-motion";

import { Button } from "@/components/ui/button"
import Header from './../../layouts/header'
import Footer from './../../layouts/footer'

export default function Home() {
    // Footer text
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    return (
        <div className="page page-wrapper" >
            <Header />

            {/* section-1 */}
            <section className="section section-1 m-auto relative" >
                <div className="h-full">
                    <Image src="/images/cad_bg.png" alt="DesigNova" width={0} height={0} sizes="100vw" className="lg:w-full lg:h-screen xl:w-full xl:h-screen w-full h-screen object-cover" quality={100} />

                </div>
            </section>

            {/* Section-2 */}
            <section className="section section-2 my-[25px] sm:my-[75px] md:my-[100px] lg:my-[100px] xl:my-[100px]">
                <div className="container m-auto relative">
                    <hr className="hidden lg:block md:block xl:block" />
                    <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-[#7D8494] top-[-30px] left-[2.5%] z-49 bg-[#fff] px-[20px] lg:text-3xl md:text-3xl lg:top-[-22px] md:top-[-22px] lg:absolute xl:absolute md:absolute">Forging and crafting beauty, always with the expectise you expect</h3>

                </div>
                <div className="h-[20px] sm:h-[40px] md:h-[40px] lg:h-[40px] xl:h-[40px] theme-bg bg-theme rounded-sm block m-auto w-[75%] w-[95%] sm:w-[75%] md:w-[75%] lg:w-[75%] xl:w-[75%] m-auto mb-8 radiant-bg my-12 sm:my-22 md:my-22 lg:my-22 xl:my-22"></div>

                <div className="container m-auto relative">
                    <div className="m-auto">
                        <h3 className="text-2xl lg:text-3xl xl:text-3xl text-center theme-color">A Experience Partner in creating stunning jewelry.</h3>
                        <p className="text-lg mt-8 w-[95%] sm:w-[90%] md:w-[75%] lg:w-[75%] xl:w-[75%] text-center m-auto">Jewelry casting is a precise science that transforms raw materials into intricate, beautiful pieces. This process involves creating molds, melting metals, and carefully pouring them to form detailed designs. Working with an expert in jewelry casting is crucial because we bring a deep understanding of metallurgy, mold-making, and finishing techniques. Our expertise ensures that each piece is crafted with precision, minimizing defects and maximizing durability and aesthetic appeal. Aligning with an experienced caster can also troubleshoot potential issues, optimize the use of materials, and  maintain consistent quality, resulting in superior jewelry that stands the test of time.</p>

                        <div className="mt-12 text-center">
                            <Link href="/partnership"><Button size="xl" variant="theme">Partner with Us Today</Button></Link>
                        </div>
                    </div>

                    <div className="mt-16 w-[95%] sm:w-[90%] md:w-[75%] lg:w-[75%] xl:w-[75%] m-auto">
                        <h3 className="text-[24px] bg-theme text-center text-white py-1 rounded-sm radiant-bg rounded-b-[0]">The Roots of Metal Forging in Jewelry</h3>

                        <div className="text-outer px-6">

                            <h3 className="text-2xl underline my-8 mb-2">Introduction</h3>
                            <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl pl-6">Metal forging is one of the oldest techniques known to humanity, dating back thousands of years. This process, which involves shaping metal using compressive forces, has been pivotal in the creation of jewelry. From ancient civilizations to modern times, the art of forging has evolved significantly, leading to remarkable advancements in jewelry making.</p>

                            <h3 className="text-2xl underline mt-8 mb-0">Ancient Beginnings</h3>
                            <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl mt-4 pl-6">The origins of metal forging can be traced back to ancient Mesopotamia, around 4000 BC. Early humans discovered that metals like gold, silver, and copper could be shaped using heat and tools. Gold was the first metal to be forged, primarily because of its malleability and resistance to tarnish. Ancient Egyptians and Mesopotamians were among the first to use these metals to create intricate jewelry pieces, symbolizing wealth and status.</p>

                            <h3 className="text-2xl underline mt-8 mb-0">Bronze and Iron Ages</h3>
                            <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl mt-4 pl-6">As civilizations advanced, so did their metalworking techniques. The Bronze Age saw the introduction of bronze, an alloy of copper and tin, which was used to create more durable and complex jewelry. The Iron Age followed, bringing with it the ability to forge iron, which was harder and more versatile than bronze. These advancements allowed for the creation of more intricate and varied jewelry designs.</p>

                            <h3 className="text-2xl underline mt-8 mb-0">Medieval and Renaissanve Periods</h3>
                            <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl mt-4 pl-6"> During the medieval period, blacksmiths and metalworkers refined their techniques, leading to the production of more sophisticated jewelry. The Renaissance era marked a significant turning point, with the introduction of new metals and alloys, such as platinum and palladium, which offered greater durability and aesthetic appeal2. This period also saw the development of more advanced tools and techniques, such as the use of molds and dies for casting. </p>

                            <h3 className="text-2xl underline mt-8 mb-0">Industry Revolution</h3>
                            <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl mt-4 pl-6"> The Industrial Revolution brought about significant advancements in metal forging. The invention of the steam engine and the development of new machinery allowed for mass production of jewelry. This period also saw the introduction of new forging techniques, such as drop forging and press forging, which improved the precision and efficiency of the process. </p>

                            <h3 className="text-2xl underline mt-8 mb-0">Modern Advancements</h3>
                            <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl mt-4 pl-6"> In the 20th and 21st centuries, metal forging has continued to evolve with the advent of new technologies. Computerized numerical control (CNC) systems and induction heating have revolutionized the forging process, allowing for greater precision and consistency4. Modern techniques also focus on reducing material waste and improving the environmental sustainability of the forging process. </p>

                            <h3 className="text-2xl underline mt-8 mb-0">Conclusion</h3>
                            <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl mt-4 pl-6"> The history of metal forging in jewelry is a testament to human ingenuity and adaptability. From ancient techniques to modern innovations, the art of forging has continually evolved, leading to the creation of beautiful and durable jewelry pieces. As technology continues to advance, the future of metal forging in jewelry looks promising, with endless possibilities for new designs and techniques. </p>

                        </div>

                    </div>
                </div>
            </section >

            {/* section-3 */}
            < section className="section mt-[150px]" >
                <div className="">
                    <blockquote className="text-6xl italic font-normal text-gray-900 dark:text-white my-[100px] text-center mb-[-5px]">
                        <motion.h3
                            ref={ref}
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
                            className="text-3xl md:text-5xl lg:text-6xl xl:text-6xl text-center lg:text-5xl md:text-5xl theme-color"
                        >There is no reward greater than making the digital reality reality</motion.h3>
                    </blockquote>
                </div>
            </section >

            <Footer />
        </div >
    );
}
