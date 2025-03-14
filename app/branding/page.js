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
                    <Image src="/images/branding_bg.png" alt="DesigNova" width={0} height={0} sizes="100vw" className="lg:w-full lg:h-screen xl:w-full xl:h-screen w-full h-screen object-cover" quality={100} />

                </div>
            </section>

            {/* Section-2 */}
            <section className="section section-2 my-[25px] sm:my-[75px] md:my-[100px] lg:my-[100px] xl:my-[100px]">
                <div className="container m-auto relative">
                    <hr className="hidden lg:block md:block xl:block" />
                    <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-[#7D8494] top-[-30px] left-[15%] z-49 bg-[#fff] px-[20px] lg:text-3xl md:text-3xl lg:top-[-22px] md:top-[-22px] lg:absolute xl:absolute md:absolute">Leveraging Data to Drive Decisions and Collobration</h3>

                </div>
                <div className="h-[20px] sm:h-[40px] md:h-[40px] lg:h-[40px] xl:h-[40px] theme-bg bg-theme rounded-sm block m-auto w-[75%] w-[95%] sm:w-[75%] md:w-[75%] lg:w-[75%] xl:w-[75%] m-auto mb-8 radiant-bg my-12 sm:my-22 md:my-22 lg:my-18 xl:my-18"></div>

                <div className="container m-auto relative">
                    <div className="m-auto -mt-4">
                        <p className="text-xl mt-2 w-[95%] sm:w-[90%] md:w-[75%] lg:w-[75%] xl:w-[75%] text-center m-auto">As a leading jewelry manufacturer, we are excited to partner with renowned brands to elevate their market presence. By leveraging advanced data modeling, we can provide precise insights into consumer preferences, optimize pricing strategies, and enhance marketing campaigns. Our AI-driven solutions enable brands to make informed decisions, ensuring they stay ahead in the competitive jewelry market. This collaboration not only boosts brand visibility but also drives sales and customer retentions, creating a win-win scenario for all parties involved.</p>

                        <div className="mt-12 text-center">
                            <Link href="/partnership"><Button size="xl" variant="theme">Partner with Us Today</Button></Link>
                        </div>
                    </div>

                    <div className="mt-16 w-[95%] sm:w-[90%] md:w-[75%] lg:w-[75%] xl:w-[75%] m-auto">
                        <h3 className="text-[24px] bg-theme text-center text-white py-1 rounded-sm radiant-bg rounded-b-[0]"> Historical Collaboration Between Design and Manufacturing: Leveraging Data for Growth</h3>

                        <div className="text-outer px-6">

                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-8 pl-6">Throughout history, the collaboration between design and manufacturing has been pivotal in driving innovation, increasing sales, and expanding market share. This synergy has evolved significantly, particularly with the advent of data-driven strategies.</p>

                            <h3 className="text-2xl underline mt-8 mb-0">Early Collaborations</h3>
                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">In the early 20th century, the collaboration between designers and manufacturers was primarily manual and intuitive. Designers created products based on aesthetic and functional considerations, while manufacturers focused on production efficiency. A notable example is the partnership between Henry Ford and his design team, which revolutionized the automotive industry with the Model T. Ford's assembly line innovation, combined with thoughtful design, made cars affordable and accessible to the masses.</p>

                            <h3 className="text-2xl underline mt-8 mb-0">The Rise of Data-Driven Design</h3>
                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">The late 20th and early 21st centuries saw a paradigm shift with the integration of data into the design and manufacturing processes. Companies began to realize the potential of data analytics in understanding consumer preferences, optimizing production, and enhancing product performance.</p>

                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">One significant example is the collaboration between Apple and it's manufacturing partners. Apple's design philosophy, combined with precise manufacturing processes, has been instrumental in creating iconic products like the iPhone. By leveraging data on consumer behavior and preferences, Apple has consistently delivered products that resonate with users, driving massive sales and market share growth.</p>

                            <h3 className="text-2xl underline mt-8 mb-0">Modern-Day Collaborations</h3>
                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">Today, the collaboration between design and manufacturing is more sophisticated and data-driven than ever. Advanced data analytics, artificial intelligence (AI), and machine learning are transforming how products are designed and manufactured.</p>

                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-4 pl-6">For instance, the partnership between Nike and its manufacturing partners exemplifies the power of data in modern design and manufacturing. Nike uses data from various sources, including customer feedback, sales trends, and biometric data, to inform its design process. This data-driven approach has led to the creation of highly personalized and innovative products, such as the Nike Flyknit shoes, which have significantly boosted sales and market share.</p>


                            <h3 className="text-2xl mt-8 mb-0 mt-16">Benefits of Data-Driven Collaboration</h3>
                            <p className="text-md sm:text-lg md:text-lg lg:text-lg xl:text-lg mt-0">Data helps identify potential design flaws and manufacturing inefficiencies, leading
                                to higher-quality products.</p>

                            <div className="pl-6">
                                <h3 className="text-xl underline mt-4 mb-0">Enhanced Product Quality:</h3>
                                <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0">Optimizing production processes based on data reduces waste and lowers costs.</p>

                                <h3 className="text-xl underline mt-4 mb-0">Cost Efficiency:</h3>
                                <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0">The digital nature of CAD streamlines the design process, saving time and resources compared to traditional methods. Sustainability: CAD reduces material waste and supports the use of eco-friendly materials, aligning with the growing demand for sustainable practices in jewelry design.</p>

                                <h3 className="text-xl underline mt-4 mb-0">Market Responsiveness:</h3>
                                <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0">Data allows companies to quickly adapt to changing market trends and consumer
                                    preferences.</p>

                                <h3 className="text-xl underline mt-4 mb-0">Personalization:</h3>
                                <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0">Data enables the creation of personalized products that meet the specific needs and desires of consumers.</p>

                            </div>

                            <h3 className="text-2xl underline mt-8 mb-0">Conclusion</h3>
                            <p className="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg mt-0 pl-6">The historical collaboration between design and manufacturing has continually evolved, with data playing an increasingly crucial role. By leveraging data, companies can create innovative products, optimize production, and respond swiftly to market demands, ultimately driving sales and expanding market share. As technology continues to advance, the synergy between design and manufacturing will only grow stronger, paving the way for even greater achievements in the future.</p>

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
                        >Without Data, tomorrow may Exsist, With Data Tomorrow may be a better Day</motion.h3>
                    </blockquote>
                </div>
            </section >

            <Footer />
        </div >
    );
}
