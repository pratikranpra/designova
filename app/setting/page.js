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
                    <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-[#7D8494] top-[-30px] left-[15.5%] z-49 bg-[#fff] px-[20px] lg:text-3xl md:text-3xl lg:top-[-22px] md:top-[-22px] lg:absolute xl:absolute md:absolute">Elevating the Art and Class of Stone Setting</h3>

                </div>
                <div className="h-[20px] sm:h-[40px] md:h-[40px] lg:h-[40px] xl:h-[40px] theme-bg bg-theme rounded-sm block m-auto w-[75%] w-[95%] sm:w-[75%] md:w-[75%] lg:w-[75%] xl:w-[75%] m-auto mb-8 radiant-bg my-12 sm:my-22 md:my-22 lg:my-18 xl:my-18"></div>

                <div className="container m-auto relative">
                    <div className="m-auto -mt-4">
                        <p className="text-xl mt-2 w-[95%] sm:w-[90%] md:w-[75%] lg:w-[75%] xl:w-[75%] text-center m-auto">Stone settings play a pivotal role in elevating the beauty of a final jewelry product. The right setting not only secures the gemstone but also enhances its brilliance and overall aesthetic. Expertly crafted settings can maximize light reflection, making the stone appear more vibrant and dazzling. Additionally, the choice of setting style—whether it's prong, bezel, pave, or channel—can complement the design of the piece, adding unique character and elegance. By highlighting the gemstone's natural beauty and ensuring its stability, stone settings transform a simple piece of jewelry into a stunning work of art.</p>

                        <div className="mt-12 text-center">
                            <Link href="/partnership"><Button size="xl" variant="theme">Partner with Us Today</Button></Link>
                        </div>
                    </div>

                    <div className="mt-16 w-[95%] sm:w-[90%] md:w-[75%] lg:w-[75%] xl:w-[75%] m-auto">
                        <h3 className="text-[24px] bg-theme text-center text-white py-1 rounded-sm radiant-bg rounded-b-[0]">The Art and Evolution of Jewelry Polishing</h3>

                        <div className="text-outer px-6">

                            <h3 className="text-2xl text-center mt-8 theme-color">The Evolution of Stone Setting in Jewelry</h3>

                            <h3 className="text-2xl underline mt-8 mb-0">Introduction</h3>
                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">Stone setting is a crucial aspect of jewelry making, involving the secure placement of gemstones into metal frameworks. This art has evolved significantly over the centuries, with advancements in techniques and tools enhancing both the aesthetic appeal and durability of jewelry. From ancient methods to modern innovations, the journey of stone setting reflects the ingenuity and craftsmanship of jewelers across generations.</p>

                            <h3 className="text-2xl underline mt-8 mb-0">Ancient Techniques</h3>
                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">The earliest forms of stone setting can be traced back to ancient civilizations such as Egypt and Mesopotamia. These early jewelers used simple methods like bezel setting, where a metal rim encircles the gemstone to hold it in place1. This technique provided both protection and a secure fit for the stones. Prong settings, which use metal claws to grip the gemstone, also emerged during this period, allowing more light to pass through the stone and enhance its brilliance.</p>

                            <h3 className="text-2xl underline mt-8 mb-0">Medieval and Renaissance Innovations</h3>
                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">During the medieval and Renaissance periods, jewelers began to experiment with more intricate settings. The pavé setting, where small gemstones are set closely together with minimal metal showing, became popular. This technique created a sparkling surface that resembled a paved road, hence the name. The Renaissance era also saw the introduction of the channel setting, where stones are set between two parallel metal walls, providing a sleek and modern look.</p>

                            <h3 className="text-2xl underline mt-8 mb-0">Industrial Revolution and Beyond</h3>
                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">The Industrial Revolution brought about significant advancements in jewelry making, including stone setting. The development of new tools and machinery allowed for more precise and efficient setting techniques. The invention of the microscope enabled jewelers to work with greater accuracy, leading to the creation of more intricate and delicate settings4. Techniques such as the invisible setting, where stones are set without visible metal, became possible due to these technological advancements.</p>

                            <h3 className="text-2xl underline mt-8 mb-0">Modern Tools and Techniques</h3>
                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">In the 20th and 21st centuries, the jewelry industry has seen a surge in technological innovations that have revolutionized stone setting. Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM) have transformed the way jewelers design and create settings5. These tools allow for precise modeling and simulation, ensuring that each setting is perfectly tailored to the gemstone.</p>

                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">Laser technology has also made a significant impact on stone setting. Lasers can be used to cut and shape metal with extreme precision, allowing for more intricate and secure settings5. Additionally, modern microscopes and imaging tools enable jewelers to inspect and set stones with unparalleled accuracy, ensuring that each gemstone is securely and beautifully placed.</p>

                            <h3 className="text-2xl underline mt-8 mb-0">Enhancing Quality and Integrity</h3>
                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">Modern tools and techniques have not only improved the aesthetics of stone settings but also enhanced the quality and integrity of jewelry. Advanced technologies ensure that settings are more secure, reducing the risk of stones becoming loose or damaged5. The use of high-precision tools allows for consistent and reliable results, ensuring that each piece of jewelry meets the highest standards of craftsmanship.</p><br />
                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">Furthermore, modern tools have enabled jewelers to work with a wider range of materials and gemstones, expanding the possibilities for creative and unique designs. The integration of technology in stone setting has also made it possible to create custom and personalized pieces with greater ease and efficiency.</p>


                            <h3 className="text-2xl underline mt-8 mb-0">Conclusion</h3>
                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">The history of stone setting in jewelry is a testament to the continuous evolution of craftsmanship and technology . From ancient bezel settings to modern laser techniques, each advancement has contributed to the beauty and durability of jewelry. As technology continues to advance, the future of stone setting looks promising, with endless possibilities for innovation and creativity.</p>



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
                        >It's in the Artist hands to make the Art ever Stunning</motion.h3>
                    </blockquote>
                </div>
            </section >

            <Footer />
        </div >
    );
}
