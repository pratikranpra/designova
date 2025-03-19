'use client'

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link"
import { motion, useInView } from "framer-motion";

import { Button } from "@/components/ui/button"
import Header from './../../layouts/header'
import Footer from './../../layouts/footer'

export default function Home() {
    const ref = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const isInView = useInView(ref, { once: true });
    const isInView2 = useInView(ref2, { once: true });
    const isInView3 = useInView(ref3, { once: true });


    return (
        <div className="page page-wrapper" >
            <Header />

            {/* section-1 */}
            <section className="section section-1 m-auto relative" >
                <div className="h-full">
                    <Image src="/images/partnership_bg.png" alt="DesigNova" width={0} height={0} sizes="100vw" className="lg:w-full lg:h-screen xl:w-full xl:h-screen w-full h-screen object-cover" quality={100} />

                </div>
            </section>

            {/* Section-2 */}
            <section className="section section-2 my-[25px] sm:my-[75px] md:my-[100px] lg:my-[100px] xl:my-[100px]">
                <div className="container m-auto relative">
                    <hr className="hidden lg:block md:block xl:block" />
                    <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-[#7D8494] top-[-30px] left-[15%] z-49 bg-[#fff] px-[20px] lg:text-3xl md:text-3xl lg:top-[-22px] md:top-[-22px] lg:absolute xl:absolute md:absolute">Creating a Partnership where everyone Wins</h3>

                </div>
                <div className="h-[20px] sm:h-[40px] md:h-[40px] lg:h-[40px] xl:h-[40px] theme-bg bg-theme rounded-sm block m-auto w-[75%] w-[95%] sm:w-[75%] md:w-[75%] lg:w-[75%] xl:w-[75%] m-auto mb-8 radiant-bg my-12 sm:my-22 md:my-22 lg:my-18 xl:my-18"></div>

                <div className="container m-auto relative">
                    <div className="m-auto -mt-4">
                        <h3 className="text-2xl md:text-2xl lg:text-2xl xl:text-2xl  theme-color text-center">Creating a partnership where everyone Wins</h3>

                        <p className="text-xl mt-2 w-[95%] sm:w-[90%] md:w-[75%] lg:w-[75%] xl:w-[75%] text-center m-auto mt-8">Creating a win-win partnership involves fostering a collaborative relationship where both parties benefit and thrive. This type of partnership is built on mutual trust, open communication, and shared goals. By working together, each party can leverage their unique strengths and resources, leading to innovative solutions and enhanced productivity. For example, in the jewelry industry, a designer and manufacturer can combine their creative and technical expertise to produce high-quality, beautiful pieces that meet market demands.</p>

                        <p className="text-xl mt-2 w-[95%] sm:w-[90%] md:w-[75%] lg:w-[75%] xl:w-[75%] text-center m-auto">The benefits of a win-win partnership are numerous. It leads to increased efficiency, as both parties can streamline processes and reduce redundancies. It also fosters a positive working environment, where both sides feel valued and motivated to contribute their best efforts. Additionally, such partnerships often result in higher customer satisfaction, as the collaborative approach ensures that products and services are of the highest quality. Ultimately, a win-win partnership drives growth and success for all involved, creating a sustainable and prosperous future.</p>

                        <div className="mt-12 text-center">
                            <Link href="/partnership"><Button size="xl" variant="theme">Partner with Us Today</Button></Link>
                        </div>
                    </div>

                    <div className="mt-16 w-[95%] sm:w-[90%] md:w-[75%] lg:w-[75%] xl:w-[75%] m-auto">
                        <h3 className="text-[24px] bg-theme text-center text-white py-1 rounded-sm radiant-bg rounded-b-[0]">DesigNova Studio Partnership</h3>

                        <div className="text-outer px-6">
                            <div className="grid grid-rows-2">
                                <motion.div
                                    ref={ref2}
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={isInView2 ? { y: 0, opacity: 1 } : {}}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
                                    className="text-center m-auto mt-16"
                                >
                                    <Link target="_blank" href="https://www.sproutdesignlab.com/"><Image src="/images/partners/partner-1.png" alt="DesigNova" width={500} height={500} className="mt-16 h-auto w-[400px]" quality={100} /></Link>
                                    <Link target="_blank" href="https://patsywesson.com/"><Image src="/images/partners/partner-2.png" alt="DesigNova" width={500} height={500} className="mt-16 h-auto w-[400px]" quality={100} /></Link>
                                    <Link target="_blank" href="https://www.julianagrippa.com/"><Image src="/images/partners/partner-3.png" alt="DesigNova" width={500} height={500} className="mt-16 h-auto w-[400px]" quality={100} /></Link>
                                </motion.div>

                                <motion.div
                                    ref={ref3}
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={isInView3 ? { y: 0, opacity: 1 } : {}}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
                                    className="text-center m-auto mt-4"
                                >
                                    <Link target="_blank" href="https://www.southerngem.co/"><Image src="/images/partners/partner-4.png" alt="DesigNova" width={500} height={500} className="mt-16 h-auto w-[400px]" quality={100} /></Link>
                                    <Link target="_blank" href="https://www.aggiediamonds.com/"><Image src="/images/partners/partner-5.png" alt="DesigNova" width={500} height={500} className="mt-16 h-auto w-[400px]" quality={100} /></Link>
                                    <Link target="_blank" href="https://designhousejewelry.com/"><Image src="/images/partners/partner-6.png" alt="DesigNova" width={500} height={500} className="mt-16 h-auto w-[400px]" quality={100} /></Link>
                                </motion.div>
                            </div>


                        </div>
                    </div >
                </div >
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
                        >Value Each Partner as you would your Family</motion.h3>
                    </blockquote>
                </div>
            </section >

            <Footer />
        </div >
    );
}
