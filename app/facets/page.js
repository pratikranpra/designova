'use client'

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link"
import { motion, useInView } from "framer-motion";

import Header from './../../layouts/header'
import Footer from './../../layouts/footer'

import { Button } from "@/components/ui/button"

export default function Home() {
    const imageStyle = {
        objectFit: "cover"
    }

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="page page-wrapper" >
            <Header />

            {/* section-1 */}
            <section className="section section-1 m-auto relative" >
                <div className="h-full">
                    <Image src="/images/facets/facets-bg.png" alt="DesigNova" width={0} height={0} sizes="100vw" className="lg:w-full lg:h-screen xl:w-full xl:h-screen w-full h-screen object-cover" quality={100} />

                    <div className="absolute top-0 left-0 justify-center items-center bg-black/25 opacity-100 h-[100%] w-[100%] flex flex-col md:px-[50px]">
                        <h3 className="text-2xl xl:text-6xl lg:text-4xl text-white mr-0 lg:mr-[25%] xl:mr-[25%] md:text-4xl md:mr-[10%]">Together working in collaboration</h3>
                        <h3 className="text-2xl xl:text-6xl lg:text-4xl text-white text-right float-right mt-[50px] ml-0 xl:ml-[25%] lg:ml-[25%] md:text-4xl md:ml-[10%]">the impossible become possible</h3>
                    </div>
                </div>
            </section>

            {/* Section-2 */}
            <section className="section section-2 my-[100px]">
                <div className="container m-auto relative">
                    <hr className="hidden lg:block md:hidden xl:block" />
                    <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-[#7D8494] top-[-30px] left-[25%] z-49 bg-[#fff] px-[20px] lg:text-3xl md:text-3xl lg:top-[-22px] md:top-[-22px] lg:absolute xl:absolute md:block md:mb-0">Explore the Art behind each Creation</h3>

                    <div className="outer-facets xl:mt-[75px] lg:mt-[75px] mt-0">
                        <div className="lg:grid lg:grid-cols-2">
                            <div className="text-center lg:text-right sm:mr-[100px]">

                                {/* <div className="text-center m-auto m-auto">
                                    <Image src="/images/facets/facet1.png" alt="DesigNova" width={400} height={400} quality={100} className="w-[200px] h-[200px] transform hover:scale-95 transition-transform duration-650 ease-in-out shadow-xl md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] rounded-md" />
                                    <h3 className="text-xl md:text-3xl lg:text-3xl xl:text-3xl my-[10px] md:my-[25px] lg:my-[25px] xl:my-[25px]">CAD Design</h3>
                                    <Link className="" href="/3d-cad"><Button size="lg" variant={"theme"}>Learn More</Button> </Link>
                                </div> */}

                                <div className="text-center m-auto inline-block mt-[75px]">
                                    <h3 className="text-xl md:text-3xl lg:text-3xl xl:text-3xl my-[25px] bg-theme mb-0 text-white py-2">CAD Design</h3>
                                    <div className="relative ">
                                        <Image src="/images/facets/facet1.png" alt="DesigNova" width={500} height={500} quality={100} className="rounded-0 object-cover h-[400px] w-[400px] shadow-xl" />
                                        <Link className="absolute bottom-[25px] left-[32.5%] transform hover:scale-95 transition-transform duration-500 ease-in-out" href="/3d-cad"><Button size="xl" variant={"theme"}>Learn More</Button> </Link>
                                    </div>
                                </div>

                                <div className="text-center m-auto inline-block mt-[75px]">
                                    <h3 className="text-xl md:text-3xl lg:text-3xl xl:text-3xl my-[25px] bg-theme mb-0 text-white py-2">Casting</h3>
                                    <div className="relative">
                                        <Image src="/images/facets/facet2.png" alt="DesigNova" width={400} height={400} quality={100} className="rounded-0 object-cover h-[400px] w-[400px] shadow-xl" />
                                        <Link className="absolute bottom-[25px] left-[32.5%] transform hover:scale-95 transition-transform duration-500 ease-in-out" href="/casting"><Button size="lg" variant={"theme"}>Learn More</Button></Link>
                                    </div>
                                </div>
                                <div className="text-center m-auto inline-block mt-[75px]">
                                    <h3 className="text-xl md:text-3xl lg:text-3xl xl:text-3xl my-[25px] bg-theme mb-0 text-white py-2">Finishing</h3>
                                    <div className="relative">
                                        <Image src="/images/facets/facet3.png" alt="DesigNova" width={400} height={400} quality={100} className="rounded-0 object-cover h-[400px] w-[400px] shadow-xl" />
                                        <Link className="absolute bottom-[25px] left-[32.5%] transform hover:scale-95 transition-transform duration-500 ease-in-out" href="/finishing"><Button size="lg" variant={"theme"}>Learn More</Button></Link>
                                    </div>
                                </div>
                                <div className="text-center m-auto inline-block mt-[75px]">
                                    <h3 className="text-xl md:text-3xl lg:text-3xl xl:text-3xl my-[25px] bg-theme mb-0 text-white py-2">Setting</h3>
                                    <div className="relative">
                                        <Image src="/images/facets/facet4.png" alt="DesigNova" width={400} height={400} quality={100} className="rounded-0 object-cover h-[400px] w-[400px] shadow-xl" />
                                        <Link className="absolute bottom-[25px] left-[32.5%] transform hover:scale-95 transition-transform duration-500 ease-in-out" href="/setting"><Button size="lg" variant={"theme"}>Learn More</Button></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center lg:text-left sm:mr-[100px]">
                                <div className="lg:mt-[200px]"></div>
                                <div className="text-center m-auto inline-block mt-[75px]">
                                    <h3 className="text-xl md:text-3xl lg:text-3xl xl:text-3xl my-[25px] bg-theme mb-0 text-white py-2">Creation</h3>
                                    <div className="relative">
                                        <Image src="/images/facets/facet5.png" alt="DesigNova" width={400} height={400} quality={100} className="rounded-0 object-cover h-[400px] w-[400px] shadow-xl" />
                                        <Link className="absolute bottom-[25px] left-[32.5%] transform hover:scale-95 transition-transform duration-500 ease-in-out" href="/creation"><Button size="lg" variant={"theme"}>Learn More</Button></Link>
                                    </div>
                                </div>
                                <div className="text-center m-auto inline-block mt-[75px]">
                                    <h3 className="text-xl md:text-3xl lg:text-3xl xl:text-3xl my-[25px] bg-theme mb-0 text-white py-2">Branding</h3>
                                    <div className="relative">
                                        <Image src="/images/facets/facet6.png" alt="DesigNova" width={400} height={400} quality={100} className="rounded-0 object-cover h-[400px] w-[400px] shadow-xl" />
                                        <Link className="absolute bottom-[25px] left-[32.5%] transform hover:scale-95 transition-transform duration-500 ease-in-out" href="/branding"><Button size="lg" variant={"theme"}>Learn More</Button></Link>
                                    </div>
                                </div>
                                <div className="text-center m-auto inline-block mt-[75px]">
                                    <h3 className="text-xl md:text-3xl lg:text-3xl xl:text-3xl my-[25px] bg-theme mb-0 text-white py-2">Partnership</h3>
                                    <div className="relative">
                                        <Image src="/images/facets/facet7.png" alt="DesigNova" width={400} height={400} quality={100} className="rounded-0 object-cover h-[400px] w-[400px] shadow-xl" />
                                        <Link className="absolute bottom-[25px] left-[32.5%] transform hover:scale-95 transition-transform duration-500 ease-in-out" href="/partnership"><Button size="lg" variant={"theme"}>Learn More</Button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section-3 */}
            <section className="section mt-[150px]">
                <div className="m-auto">
                    <blockquote className="text-6xl italic font-normal text-gray-900 dark:text-white my-[100px] mb-[-5px] text-center">
                        <motion.h3
                            ref={ref}
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
                            className="text-3xl sm:text-2xl lg:text-6xl xl:text-6xl text-center lg:text-5xl md:text-5xl theme-color"
                        >
                            Collaboration and Team Work
                        </motion.h3>
                    </blockquote>
                </div>
            </section>

            <Footer />
        </div >
    );
}
