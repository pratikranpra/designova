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

    // Timeline
    const timelineData = [
        {
            date: "1989",
            //title: "Started the project",
            description: 'The introduction of the first commercial CAD software for jewelry design, such as JewelCAD, marked a significant milestone.JewelCAD allowed designers to create detailed 3D models of jewelry pieces, which could be easily modified and refined.',
        },
        {
            date: "1994",
            //title: "Implemented the timeline feature",
            description: "The development of Rhino, a versatile 3D modeling software, further expanded the capabilities of CAD in jewelry design. Rhino's user- friendly interface and powerful tools made it a popular choice among jewelry designers.",
        },
        {
            date: "2001",
            //title: "Completed the UI design",
            description: "The launch of Matrix, a CAD software specifically tailored for jewelry design, revolutionized the industry. Matrix offered advanced features like parametric design and rendering, enabling designers to create highly detailed and customizable jewelry pieces.",
        },
        {
            date: "2010",
            //title: "Deployment in progress",
            description: "The integration of 3D printing technology with CAD software transformed the prototyping and manufacturing processes. Designers could now create physical prototypes directly from their digital models, reducing the time and cost associated with traditional methods.",
        },
    ];



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
                    <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-[#7D8494] top-[-30px] left-[29%] z-49 bg-[#fff] px-[20px] lg:text-3xl md:text-3xl lg:top-[-22px] md:top-[-22px] lg:absolute xl:absolute md:absolute">From Concepts to Realization</h3>

                </div>
                <div className="h-[20px] sm:h-[40px] md:h-[40px] lg:h-[40px] xl:h-[40px] theme-bg bg-theme rounded-sm block m-auto w-[75%] w-[95%] sm:w-[75%] md:w-[75%] lg:w-[75%] xl:w-[75%] m-auto mb-8 radiant-bg my-16 sm:my-22 md:my-22 lg:my-22 xl:my-22"></div>

                <div className="container m-auto relative">
                    <div className="m-auto">
                        <h3 className="text-2xl lg:text-3xl xl:text-3xl text-center theme-color">Creating a Partnership in the Design Process</h3>
                        <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl mt-4 mt-8 w-[95%] sm:w-[90%] md:w-[75%] lg:w-[75%] xl:w-[75%] text-center m-auto">We believe the collaboration between designers and manufacturers is crucial for creating superior products. When designers and manufacturers work closely together, they can seamlessly integrate creative vision with practical execution. This synergy ensures that design concepts are not only innovative but also feasible and efficient to produce. By sharing insights and feedback throughout the process, both parties can address potential challenges early on, optimize materials and techniques, and maintain high standards of quality. The result is a product that embodies both aesthetic appeal and functional excellence, meeting the needs and expectations of customers more effectively.</p>

                        <div className="mt-12 text-center">
                            <Link href="/partnership"><Button size="xl" variant="theme">Partner with Us Today</Button></Link>
                        </div>
                    </div>

                    <div className="mt-16 w-[95%] sm:w-[90%] md:w-[75%] lg:w-[75%] xl:w-[75%] m-auto">
                        <h3 className="text-[24px] bg-theme text-center text-white py-1 rounded-sm radiant-bg rounded-b-[0]">The Evolution of 3D CAD in the Jewelry Industry</h3>

                        <div className="text-outer px-6">

                            <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl mt-4">The jewelry industry has undergone a significant transformation with the advent of 3D  Computer-Aided Design (CAD). This technology has revolutionized how jewelry is designed, prototyped, and manufactured, allowing for unprecedented precision and creativity. Let's explore the history of 3D CAD in the jewelry industry, highlighting key technological milestones and influential figures.</p>

                            <h3 className="text-2xl underline my-8 mb-2">Early Beginnings:</h3>
                            <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl pl-6">The roots of CAD technology can be traced back to the 1960s when it was initially developed for the aerospace and automotive industries. However, it wasn't until the late 1980s and early 1990s that CAD began to make its way into the jewelry industry. Early adopters saw the potential for CAD to streamline the design process and create more intricate and precise jewelry pieces.</p>

                            <h3 className="text-2xl mt-16">Key Technological Milestones:</h3>

                            <div className="relative">
                                <div className="w-full max-w-3xl mx-auto py-10 px-4">
                                    <div className="space-y-8">
                                        {timelineData.map((item, index) => (
                                            <div key={index} className="flex items-center space-x-4">
                                                <div className="relative">
                                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                                                        <BsFillCircleFill className="theme-color text-4xl " />
                                                    </div>
                                                    <div className="h-full w-1 bg-gray-200 absolute left-1/2 transform -translate-x-1/2 top-2"></div>
                                                </div>
                                                <div className="flex flex-col items-start ml-8">
                                                    <Card className="w-full max-w-md mt-2 bg-white shadow-lg rounded-lg">
                                                        <CardContent>
                                                            <h3 className="text-lg font-semibold">{item.date}</h3>
                                                            <p className="text-sm text-gray-700 mt-2">{item.description}</p>
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl underline mt-12 sm:mt-24 md:mt-32 lg:mt-32 xl:mt-32 mb-4">Influential Figures</h3>
                            <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl mt-4 pl-6">Several key figures have played a pivotal role in advancing 3D CAD technology in the jewelry industry:</p>

                            <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl mt-4 pl-6"><span className="theme-color font-bold">Dr. Patrick Hanratty</span>: Often referred to as the "father of CAD," Dr. Hanratty developed the first numerical control system, which laid the foundation for modern CAD technology.</p>

                            <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl mt-4 pl-6"><span className="theme-color font-bold">Robert McNeel</span>: The founder of McNeel & Associates, Robert McNeel, was instrumental in developing Rhino, one of the most widely used CAD software in the jewelry industry.</p>

                            <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl mt-4 pl-6"><span className="theme-color font-bold">Terry Wohlers</span>: A leading expert in 3D printing and additive manufacturing, Terry Wohlers has significantly contributed to the integration of 3D printing with CAD in jewelry design.</p>

                            <h3 className="text-2xl mt-8 mb-0 mt-16">Impact on the Jewelry Industry</h3>
                            <p className="text-md sm:text-lg md:text-lg lg:text-lg xl:text-lg mt-0">The adoption of 3D CAD technology has had a profound impact on the jewelry industry:</p>

                            <div className="pl-6">
                                <h3 className="text-xl underline mt-4 mb-0">Precision and Accuracy</h3>
                                <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0">CAD software allows for precise measurements and detailed modeling, reducing errors and ensuring high-quality final products. Customization: Designers can easily create bespoke pieces tailored to individual preferences, offering endless customization options.</p>

                                <h3 className="text-xl underline mt-4 mb-0">Efficiency</h3>
                                <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0">The digital nature of CAD streamlines the design process, saving time and resources compared to traditional methods. Sustainability: CAD reduces material waste and supports the use of eco-friendly materials, aligning with the growing demand for sustainable practices in jewelry design.</p>

                                <h3 className="text-xl underline mt-4 mb-0">Future Trends</h3>
                                <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0">The future of 3D CAD in the jewelry industry looks promising, with advancements in artificial intelligence (AI), machine learning, and virtual reality (VR) set to further enhance the design process. These technologies will enable even greater precision, creativity, and efficiency, paving the way for innovative and sustainable jewelry designs.</p>

                            </div>
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
                        >There is something special in the Creation and the Beauty of the Art</motion.h3>
                    </blockquote>
                </div>
            </section >

            <Footer />
        </div >
    );
}
