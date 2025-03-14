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
                    <Image src="/images/settings_bg.png" alt="DesigNova" width={0} height={0} sizes="100vw" className="lg:w-full lg:h-screen xl:w-full xl:h-screen w-full h-screen object-cover" quality={100} />

                </div>
            </section>

            {/* Section-2 */}
            <section className="section section-2 my-[25px] sm:my-[75px] md:my-[100px] lg:my-[100px] xl:my-[100px]">
                <div className="container m-auto relative">
                    <hr className="hidden lg:block md:block xl:block" />
                    <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-[#7D8494] top-[-30px] left-[25.5%] z-49 bg-[#fff] px-[20px] lg:text-3xl md:text-3xl lg:top-[-22px] md:top-[-22px] lg:absolute xl:absolute md:absolute"> Design Concierge and Partner</h3>

                </div>
                <div className="h-[20px] sm:h-[40px] md:h-[40px] lg:h-[40px] xl:h-[40px] theme-bg bg-theme rounded-sm block m-auto w-[75%] w-[95%] sm:w-[75%] md:w-[75%] lg:w-[75%] xl:w-[75%] m-auto mb-8 radiant-bg my-12 sm:my-22 md:my-22 lg:my-18 xl:my-18"></div>

                <div className="container m-auto relative">
                    <div className="m-auto -mt-4">
                        <p className="text-xl mt-2 w-[95%] sm:w-[90%] md:w-[75%] lg:w-[75%] xl:w-[75%] text-center m-auto">At DesigNova Studios, we pride ourselves on creating bespoke design tailored to your unique needs. Whether you're looking to create a single, stunning piece, a small curated collection, or an entire jewelry line, our team of expert designers is here to bring your vision to life. We provide personalized consultations to ensure every detail aligns with your aesthetic and brand identity. Our commitment to quality craftsmanship and innovative design guarantees that your jewelry will stand out and make a lasting impression. Let us help you transform your ideas into exquisite, timeless pieces that your clients will cherish.</p>

                        <div className="mt-12 text-center">
                            <Link href="/partnership"><Button size="xl" variant="theme">Partner with Us Today</Button></Link>
                        </div>
                    </div>

                    <div className="mt-16 w-[95%] sm:w-[90%] md:w-[75%] lg:w-[75%] xl:w-[75%] m-auto">
                        <h3 className="text-[24px] bg-theme text-center text-white py-1 rounded-sm radiant-bg rounded-b-[0]">The Evolution of Designer-Manufacturer Collaborations: Enhancing Business Synergy</h3>

                        <div className="text-outer px-6">
                            <h3 className="text-2xl underline mt-8 mb-0">The Evolution of Designer-Manufacturer Collaborations: Enhancing Business Synergy</h3>
                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">The history of designer and manufacturer collaborations is a testament to the power of creative synergy in driving innovation and business growth. These partnerships have evolved significantly over the decades, transforming industries and setting new standards for quality and creativity.</p>

                            <h3 className="text-2xl underline mt-8 mb-0">Early Collaborations: Setting the Stage</h3>
                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">The roots of designer-manufacturer collaborations can be traced back to the early 20th century. One of the most iconic partnerships was between Italian designer Elsa Schiaparelli and Spanish surrealist artist Salvador Dalí in the 1930s and 1940s. Their collaboration produced some of the most memorable and avant-garde fashion pieces of the time, blending art and fashion in unprecedented ways.</p>

                            <h3 className="text-2xl underline mt-8 mb-0">Mid-Century Modern: The Rise of Iconic Duos</h3>
                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">The mid-20th century saw the rise of legendary design duos who revolutionized their respective fields. Ray and Charles Eames, for example, seamlessly integrated technical brilliance with artistic sensibility to create iconic furniture designs that are still celebrated today2. Their collaboration demonstrated how the fusion of different skill sets could lead to groundbreaking innovations.</p>

                            <h3 className="text-2xl underline mt-8 mb-0">Contemporary Collaborations: Expanding Horizons</h3>
                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">In recent years, collaborations between designers and manufacturers have become more strategic and widespread. The fashion industry, in particular, has seen numerous high-profile partnerships. For instance, the collaboration between Louis Vuitton and US artist Stephen Sprouse in the early 2000s resulted in a limited edition collection that replaced LV’s classic monogram with New York-style graffiti1. This partnership not only generated significant publicity but also showcased how blending different creative visions could lead to commercial success.</p>

                            <h3 className="text-2xl underline mt-8 mb-0">Enhancing Business Through Collaboration</h3>
                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">The benefits of designer-manufacturer collaborations extend beyond creative innovation. These partnerships can significantly enhance each party's business by combining their strengths. Designers bring fresh ideas and aesthetic appeal, while manufacturers provide the technical expertise and production capabilities necessary to bring those ideas to life. This synergy can lead to the development of high-quality, innovative products that stand out in the market.</p>

                            <h3 className="text-2xl underline mt-8 mb-0">Key Strategies for Successful Collaborations</h3>
                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">To maximize the benefits of these partnerships, clear communication and aligned goals are essential. Utilizing technology to bridge communication gaps, setting up explicit communication protocols, and synchronizing goals and expectations from the outset can ensure a smooth and productive collaboration. Additionally, adopting a Design for Manufacturing (DFM) approach, which integrates manufacturing considerations into the design phase, can optimize production methods and reduce costs.</p>

                            <h3 className="text-2xl underline mt-8 mb-0">Conclusion</h3>
                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">The history of designer-manufacturer collaborations highlights the transformative power of creative partnerships. By leveraging each other's strengths, designers and manufacturers can enhance their separate businesses, drive innovation, and create products that leave a lasting impact. As industries continue to evolve, these collaborations will undoubtedly play a crucial role in shaping the future of design and manufacturing.</p>

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
                        >Art is in the Hands of the Dreamer</motion.h3>
                    </blockquote>
                </div>
            </section >

            <Footer />
        </div >
    );
}
