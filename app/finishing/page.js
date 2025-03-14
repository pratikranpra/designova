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
                    <Image src="/images/finishing_bg.png" alt="DesigNova" width={0} height={0} sizes="100vw" className="lg:w-full lg:h-screen xl:w-full xl:h-screen w-full h-screen object-cover" quality={100} />

                </div>
            </section>

            {/* Section-2 */}
            <section className="section section-2 my-[25px] sm:my-[75px] md:my-[100px] lg:my-[100px] xl:my-[100px]">
                <div className="container m-auto relative">
                    <hr className="hidden lg:block md:block xl:block" />
                    <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-[#7D8494] top-[-30px] left-[2.5%] z-49 bg-[#fff] px-[20px] lg:text-3xl md:text-3xl lg:top-[-22px] md:top-[-22px] lg:absolute xl:absolute md:absolute">Embracing and Leveraging Technology to aid in Finish Jewelry</h3>

                </div>
                <div className="h-[20px] sm:h-[40px] md:h-[40px] lg:h-[40px] xl:h-[40px] theme-bg bg-theme rounded-sm block m-auto w-[75%] w-[95%] sm:w-[75%] md:w-[75%] lg:w-[75%] xl:w-[75%] m-auto mb-8 radiant-bg my-12 sm:my-22 md:my-22 lg:my-18 xl:my-18"></div>

                <div className="container m-auto relative">
                    <div className="m-auto -mt-4">
                        <p className="text-xl mt-2 w-[95%] sm:w-[90%] md:w-[75%] lg:w-[75%] xl:w-[75%] text-center m-auto">We leverage cutting-edge technology to enhance the polishing process. Using advanced tools advance mass finishing systems, ultrasonic polishing, I ensure each piece achieves a flawless finish. Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM) allow us to precisely model and simulate the polishing process, guaranteeing optimal results. This integration of technology not only improves efficiency but also ensures that every piece of jewelry shines with unparalleled brilliance and quality.</p>

                        <div className="mt-12 text-center">
                            <Link href="/partnership"><Button size="xl" variant="theme">Partner with Us Today</Button></Link>
                        </div>
                    </div>

                    <div className="mt-16 w-[95%] sm:w-[90%] md:w-[75%] lg:w-[75%] xl:w-[75%] m-auto">
                        <h3 className="text-[24px] bg-theme text-center text-white py-1 rounded-sm radiant-bg rounded-b-[0]">The Art and Evolution of Jewelry Polishing</h3>

                        <div className="text-outer px-6">

                            <h3 className="text-2xl underline mt-8 mb-0">Introduction</h3>
                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">Polishing is a crucial step in the jewelry-making process, enhancing the beauty and brilliance of each piece. This article explores the history, uses, equipment, and advancements in jewelry polishing, highlighting how modern techniques have elevated the craft.</p>

                            <h3 className="text-2xl underline mt-8 mb-0">Historical Background</h3>
                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">The art of polishing jewelry dates back to ancient civilizations. Early jewelers used rudimentary tools and natural abrasives like sand and water to smooth and shine their creations1. The Egyptians, known for their exquisite gold jewelry, employed polishing techniques to achieve a lustrous finish on their pieces . Over time, the methods and tools evolved, leading to more sophisticated techniques.</p>

                            <h3 className="text-2xl mt-8 mb-0 mt-16">Uses of Polishing in Jewelry</h3>
                            <p className="text-md sm:text-lg md:text-lg lg:text-lg xl:text-lg mt-0">Polishing serves several purposes in jewelry making:</p>

                            <div className="pl-6">
                                <h3 className="text-xl underline mt-4 mb-0">Enhancing Aesthetics:</h3>
                                <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0">Polishing removes scratches, tarnish, and other surface imperfections, revealing the true beauty of the metal and gemstones.</p>

                                <h3 className="text-xl underline mt-4 mb-0">Improving Durability:</h3>
                                <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0">By smoothing the surface, polishing helps protect jewelry from corrosion and wear, extending its lifespan.</p>

                                <h3 className="text-xl underline mt-4 mb-0">Ensuring Quality:</h3>
                                <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0">A polished finish allows for a thorough inspection of the piece, ensuring that any flaws or defects are addressed before the jewelry reaches the customer.</p>
                            </div>


                            <h3 className="text-2xl mt-8 mb-0 mt-16">Equipment Used in Polishing</h3>
                            <p className="text-md sm:text-lg md:text-lg lg:text-lg xl:text-lg mt-0">Modern jewelry polishing involves a variety of tools and equipment:</p>

                            <div className="pl-6">
                                <h3 className="text-xl underline mt-4 mb-0">Polishing Motors:</h3>
                                <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0">These machines use rotating wheels and abrasive compounds to achieve a high shine on metal surfaces.</p>

                                <h3 className="text-xl underline mt-4 mb-0">Buffing Wheels:</h3>
                                <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0">Made from materials like cotton or felt, buffing wheels are used with polishing compounds to create a smooth, reflective finish.</p>

                                <h3 className="text-xl underline mt-4 mb-0">Tumbling Machines:</h3>
                                <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0">These devices use abrasive media and a rotating barrel to polish multiple pieces of jewelry simultaneously, making them ideal for bulk polishing.</p>

                                <h3 className="text-xl underline mt-4 mb-0">Ultrasonic Cleaners:</h3>
                                <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0">These machines use high-frequency sound waves to remove dirt and polishing compounds from jewelry, ensuring a spotless finish.</p>
                            </div>



                            <h3 className="text-2xl mt-8 mb-0 mt-16">Advancements in Polishing Techniques</h3>
                            <p className="text-md sm:text-lg md:text-lg lg:text-lg xl:text-lg mt-0">Recent advancements have significantly improved the efficiency and quality of jewelry polishing:</p>

                            <div className="p-6">
                                <h3 className="text-xl underline mt-0 mb-0">Laser Polishing:</h3>
                                <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0">This technique uses laser technology to achieve precise and consistent polishing, especially on intricate designs. Electrochemical Polishing: By using an electrolyte solution and electrical current, this method removes surface imperfections and enhances the luster of metal components.</p>

                                <h3 className="text-xl underline mt-4 mb-0">Computer-Aided Design (CAD) and Manufacturing (CAM):</h3>
                                <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0">These technologies allow for precise
                                    modeling and simulation of the polishing process, ensuring optimal results.</p>

                                <h3 className="text-xl underline mt-4 mb-0">Advanced Polishing Compounds:</h3>
                                <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0">New formulations of polishing compounds provide better results
                                    with less effort, reducing the time and labor required for polishing.
                                    Conclusion</p>
                            </div>



                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-16"> The history of jewelry polishing is a testament to the continuous evolution of craftsmanship and technology. From ancient techniques to modern innovations, each advancement has contributed to the beauty and durability of jewelry. As technology continues to advance, the future of jewelry polishing promises even greater precision and efficiency, ensuring that each piece of jewelry shines with unparalleled brilliance.</p>


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
                        >The Passion and Care Makes the Shine worth the time</motion.h3>
                    </blockquote>
                </div>
            </section >

            <Footer />
        </div >
    );
}
