'use client'

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link"
import { motion, useInView } from "framer-motion";

import { Button } from "@/components/ui/button"
import Header from './../../layouts/header'
import Footer from './../../layouts/footer'

import { Card, CardContent } from '@/components/ui/card';
import { BsFillCircleFill } from 'react-icons/bs';


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
                    <Image src="/images/sus_bg.png" alt="DesigNova" width={0} height={0} sizes="100vw" className="lg:w-full lg:h-screen xl:w-full xl:h-screen w-full h-screen object-cover" quality={100} />

                </div>
            </section>

            {/* Section-2 */}
            <section className="section section-2 my-[25px] sm:my-[75px] md:my-[100px] lg:my-[100px] xl:my-[100px]">
                <div className="container m-auto relative">
                    <div className="m-auto">
                        <h3 className="text-2xl lg:text-3xl xl:text-3xl text-center theme-color">Caring for One Another, Earth, and Sustainability</h3>
                        <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl mt-4 mt-8 w-[95%] sm:w-[90%] md:w-[75%] lg:w-[75%] xl:w-[75%] text-center m-auto">In today's world, the jewelry industry is evolving to meet the growing demand for ethical and sustainable practices. As a jewelry manufacturer, we recognize the importance of caring for one another, our planet, and ensuring long-term sustainability. Here's how we are making a difference:</p>
                    </div>

                    <div className="mt-16 w-[95%] sm:w-[90%] md:w-[75%] lg:w-[75%] xl:w-[75%] m-auto">
                        <h3 className="text-[24px] bg-theme text-center text-white py-1 rounded-sm radiant-bg rounded-b-[0]">The Evolution of 3D CAD in the Jewelry Industry</h3>

                        <div className="text-outer px-6">

                            <h3 className="text-2xl underline my-8 mb-2">Caring for One Another</h3>
                            <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl pl-6">At the heart of our operations is a commitment to the well-being of our employees and the communities we work with. We strive for empowering and foresting happiness, encougaging education, where all team members are respected. By fostering a supportive and inclusive work environment, we empower our artisans, ensuring they feel valued, heard, and know they are the ones who make us great. People are our greatest assets not liablities who help us innovate and build a win win journey. This not only enhances their quality of life but also reflects in the quality of the jewelry we produce.</p>

                            <h3 className="text-2xl mt-8 mb-0 mt-16">Caring for the Earth</h3>
                            <p className="text-md sm:text-lg md:text-lg lg:text-lg xl:text-lg mt-0">Our planet's health is paramount, and we strive to minimize our environmental footprint through various initiatives:</p>

                            <div className="pl-6">
                                <h3 className="text-xl underline mt-4 mb-0">Precision and Accuracy</h3>
                                <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0">CAD software allows for precise measurements and detailed modeling, reducing errors and ensuring high-quality final products. Customization: Designers can easily create bespoke pieces tailored to individual preferences, offering endless customization options.</p>

                                <h3 className="text-xl underline mt-4 mb-0">Efficiency</h3>
                                <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0">The digital nature of CAD streamlines the design process, saving time and resources compared to traditional methods. Sustainability: CAD reduces material waste and supports the use of eco-friendly materials, aligning with the growing demand for sustainable practices in jewelry design.</p>

                                <h3 className="text-xl underline mt-4 mb-0">Future Trends</h3>
                                <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0">The future of 3D CAD in the jewelry industry looks promising, with advancements in artificial intelligence (AI), machine learning, and virtual reality (VR) set to further enhance the design process. These technologies will enable even greater precision, creativity, and efficiency, paving the way for innovative and sustainable jewelry designs.</p>

                                <h3 className="text-xl underline mt-4 mb-0">Ethical Sourcing:</h3>
                                <p className="text-md md:text-lg lg:text-lg xl:text-lg mt-0"> We source materials from suppliers certified by the FAIRTRADE Foundation, ensuring that our gems, metals, and other materials are obtained responsibly1. This supports sustainable livelihoods and safe working conditions in developing countries.</p>

                                <h3 className="text-xl underline mt-4 mb-0">Recycled Materials:</h3>
                                <p className="text-md md:text-lg lg:text-lg xl:text-lg mt-0"> We use recycled gold and other metals to reduce the need for new mining, which can cause significant environmental degradation. This practice helps conserve natural resources and reduces pollution.</p>

                                <h3 className="text-xl underline mt-4 mb-0">Conflict-Free Gems:</h3>
                                <p className="text-md md:text-lg lg:text-lg xl:text-lg mt-0"> We ensure that our gems are sourced from conflict-free zones, avoiding areas known for unethical practices1. This helps promote peace and stability in mining regions.</p>

                                <h3 className="text-xl underline mt-4 mb-0">Eco-Friendly Practices:</h3>
                                <p className="text-md md:text-lg lg:text-lg xl:text-lg mt-0"> Our manufacturing processes are designed to minimize waste and energy consumption. We use eco-friendly techniques and materials to create beautiful jewelry pieces that are kind to the environment.</p>
                            </div>

                            <h3 className="text-2xl mt-8 mb-0 mt-16">Long-Term Sustainability</h3>
                            <p className="text-md sm:text-lg md:text-lg lg:text-lg xl:text-lg mt-0"> Sustainability is not just a buzzword for us; it is a core principle that guides our operations. We are committed to:</p>

                            <div className="pl-6">

                                <h3 className="text-xl underline mt-4 mb-0">Transparency:</h3>
                                <p className="text-md md:text-lg lg:text-lg xl:text-lg mt-0"> We maintain transparency in our supply chain, ensuring that every step, from sourcing to production, is environmentally and socially responsible. This builds trust with our customers and sets a standard for the industry.</p>

                                <h3 className="text-xl underline mt-4 mb-0">Innovation:</h3>
                                <p className="text-md md:text-lg lg:text-lg xl:text-lg mt-0"> We continuously explore new technologies and methods to improve our sustainability efforts. This includes investing in lab-grown diamonds, which have a lower environmental impact compared to mined diamonds.</p>

                                <h3 className="text-xl underline mt-4 mb-0">Community Engagement:</h3>
                                <p className="text-md md:text-lg lg:text-lg xl:text-lg mt-0"> We actively engage with local communities, supporting initiatives that promote education, health, and environmental conservation. By giving back, we help build stronger, more resilient communities.</p>

                                <h3 className="text-xl underline mt-4 mb-0">Education and Awareness:</h3>
                                <p className="text-md md:text-lg lg:text-lg xl:text-lg mt-0"> We educate our customers about the importance of sustainable and ethical jewelry. By raising awareness, we empower consumers to make informed choices that align with their values.</p>
                            </div>

                            <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl pl-0 mt-16">Our commitment to caring for one another, the earth, and long-term sustainability is at the core of our operations. By adopting ethical practices and continuously striving for improvement, we aim to create a positive impact on the world and set a benchmark for the jewelry industry.</p>

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
                        >With Every Day our compasion Grows</motion.h3>
                    </blockquote>
                </div>
            </section >

            <Footer />
        </div >
    );
}
