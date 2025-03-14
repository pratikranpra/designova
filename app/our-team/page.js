'use client'

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import Header from './../../layouts/header'
import Footer from './../../layouts/footer'

export default function Home() {

    // Sentence
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Sections
    const ref1 = useRef(null);
    const isInView_ref1 = useInView(ref1, { once: true });
    const ref2 = useRef(null);
    const isInView_ref2 = useInView(ref2, { once: true });
    const ref3 = useRef(null);
    const isInView_ref3 = useInView(ref3, { once: true });
    const ref4 = useRef(null);
    const isInView_ref4 = useInView(ref4, { once: true });
    const ref5 = useRef(null);
    const isInView_ref5 = useInView(ref5, { once: true });

    return (
        <div className="page page-wrapper" >
            <Header />

            {/* Section-1 */}
            <section className="section section-1 m-auto relative" >
                <div className="h-full">
                    <Image src="/images/teams_bg.png" alt="DesigNova" width={0} height={0} sizes="100vw" className="lg:w-full lg:h-screen xl:w-full xl:h-screen w-full h-screen object-cover" quality={100} />
                </div>
            </section>

            {/* Section-2 */}
            <section className="section section-2 my-[25px] sm:my-[75px] md:my-[100px] lg:my-[100px] xl:my-[100px]">
                <div className="container m-auto relative mb-16">
                    <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-[#7D8494] z-49 bg-[#fff] px-[20px] lg:text-3xl md:text-3xl">Investing in People</h3>
                </div>

                <div className="outer">
                    <div className="inner-section mt-16 lg:my-[75px] xl:my-[100px]">
                        <div className="h-[50px] bg-[#7D8494] text-left lg:w-[75%] xl:w-[55%] rounded-r-md radiant-bg-lg">
                            <h3 className="text-xl pl-8 text-white leading-[50px] shadow-xl xl:text-2xl lg:text-2xl font-normal">The Founders</h3>
                        </div>
                        <div className="clear-both"></div>

                        <div className="container m-auto">
                            <motion.div
                                ref={ref1}
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInView_ref1 ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
                                className=""
                            >
                                <div className="people items-center px-[15px] rounded-xl border bg-card text-card-foreground shadow sm:flex xl:w-[50%] md:w-[75%] lg:w-[75%] mt-8 md:ml-auto md:mr-auto">
                                    <Image src="/images/finishing_bg.png" alt="DesigNova" width={500} height={500} className="w-full h-auto md:w-[200px] md:h-[200px] sm:ml-[-15px] rounded-t-xl sm:rounded-l-xl" quality={100} />
                                    <div className="pl-8 my-6 md:my-0">
                                        <h3 className="text-2xl flex-1 theme-color">Petty Wesson</h3>
                                        <p className="text-[#999] text-md">Founder & CEO</p>
                                        <p className="text-md leading-[20px] mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis alias voluptatem dolore ipsum maiores eos tempora soluta aspernatur quibusdam repellat placeat sint asperiores id doloribus, ad cumque nisi deleniti.</p>
                                    </div>
                                </div>
                                <div className="people items-center px-[15px] rounded-xl border bg-card text-card-foreground shadow sm:flex xl:w-[50%] md:w-[75%] lg:w-[75%] mt-8 md:ml-auto md:mr-auto ">
                                    <Image src="/images/finishing_bg.png" alt="DesigNova" width={500} height={500} className="w-full h-auto md:w-[200px] md:h-[200px] sm:ml-[-15px] rounded-t-xl sm:rounded-l-xl" quality={100} />
                                    <div className="pl-8 my-6 md:my-0">
                                        <h3 className="text-2xl flex-1 theme-color">David Wesson</h3>
                                        <p className="text-[#999] text-md">Founder & CMO</p>
                                        <p className="text-md leading-[20px] mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis alias voluptatem dolore ipsum maiores eos tempora soluta aspernatur quibusdam repellat placeat sint asperiores id doloribus, ad cumque nisi deleniti.</p>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="clear-both"></div>
                        </div>
                    </div>

                    <div className="inner-section mt-16 lg:my-[75px] xl:my-[100px]">
                        <div className="h-[50px] bg-[#7D8494] text-right lg:w-[75%] xl:w-[55%] rounded-l-sm float-right radiant-bg-right radiant-bg-lg">
                            <h3 className="text-xl pr-8 text-white leading-[50px] shadow-xl xl:text-2xl lg:text-2xl font-normal">Operations</h3>
                        </div>
                        <div className="clear-both"></div>

                        <div className="container m-auto">
                            <motion.div
                                ref={ref2}
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInView_ref2 ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
                                className=""
                            >
                                <div className="text-right">
                                    <div className="people items-center px-[15px] rounded-xl border bg-card text-card-foreground shadow sm:flex xl:w-[50%] md:w-[75%] lg:w-[75%] mt-8 md:ml-auto md:mr-auto float-right md:float-none">
                                        <Image src="/images/finishing_bg.png" alt="DesigNova" width={500} height={500} className="w-full h-auto md:w-[200px] md:h-[200px] sm:ml-[-15px] rounded-t-xl sm:rounded-r-xl sm:hidden" quality={100} />
                                        <div className="pr-8 my-6 md:my-0">
                                            <h3 className="text-2xl flex-1 theme-color">Jerry Taylor</h3>
                                            <p className="text-[#999] text-md">Working Position</p>
                                            <p className="text-md leading-[20px] mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis alias voluptatem dolore ipsum maiores eos tempora soluta aspernatur quibusdam repellat placeat sint asperiores id doloribus, ad cumque nisi deleniti.</p>
                                        </div>
                                        <Image src="/images/finishing_bg.png" alt="DesigNova" width={500} height={500} className="w-full h-auto md:w-[200px] md:h-[200px] sm:ml-[-15px] rounded-t-xl sm:rounded-r-xl hidden sm:block" quality={100} />
                                    </div>
                                    <div className="clear-both"></div>
                                    <div className="people items-center px-[15px] rounded-xl border bg-card text-card-foreground shadow sm:flex xl:w-[50%] md:w-[75%] lg:w-[75%] mt-8 md:ml-auto md:mr-auto float-right md:float-none sm:hidden">
                                        <Image src="/images/finishing_bg.png" alt="DesigNova" width={500} height={500} className="w-full h-auto md:w-[200px] md:h-[200px] sm:ml-[-15px] rounded-t-xl sm:rounded-r-xl" quality={100} />
                                        <div className="pr-8 my-6 md:my-0">
                                            <h3 className="text-2xl flex-1 theme-color">Gargi Chavan</h3>
                                            <p className="text-[#999] text-md">Working Position</p>
                                            <p className="text-md leading-[20px] mt-1">Head of Asia Logistics.<br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis alias voluptatem dolore ipsum maiores eos tempora</p>
                                        </div>
                                        <Image src="/images/finishing_bg.png" alt="DesigNova" width={500} height={500} className="w-full h-auto md:w-[200px] md:h-[200px] sm:ml-[-15px] rounded-t-xl sm:rounded-r-xl hidden sm:block" quality={100} />
                                    </div>
                                    <div className="clear-both"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="inner-section mt-16 lg:my-[75px] xl:my-[100px]">
                        <div className="h-[50px] bg-[#7D8494] text-left lg:w-[75%] xl:w-[55%] rounded-r-sm radiant-bg-lg">
                            <h3 className="text-xl pl-8 text-white leading-[50px] shadow-xl xl:text-2xl lg:text-2xl font-normal">Client care</h3>
                        </div>
                        <div className="clear-both"></div>

                        <div className="container m-auto">
                            <motion.div
                                ref={ref3}
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInView_ref3 ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
                                className=""
                            >
                                <div className="people items-center px-[15px] rounded-xl border bg-card text-card-foreground shadow sm:flex xl:w-[50%] md:w-[75%] lg:w-[75%] mt-8 md:ml-auto md:mr-auto">
                                    <Image src="/images/finishing_bg.png" alt="DesigNova" width={500} height={500} className="w-full h-auto md:w-[200px] md:h-[200px] sm:ml-[-15px] rounded-t-xl sm:rounded-l-xl" quality={100} />
                                    <div className="pl-8 my-6 md:my-0">
                                        <h3 className="text-2xl flex-1 theme-color">Tamara Roberts</h3>
                                        <p className="text-[#999] text-md">Working Position</p>
                                        <p className="text-md leading-[20px] mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis alias voluptatem dolore ipsum maiores eos tempora soluta aspernatur quibusdam repellat placeat sint asperiores id doloribus, ad cumque nisi deleniti.</p>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="clear-both"></div>
                        </div>
                    </div>

                    <div className="inner-section mt-16 lg:my-[75px] xl:my-[100px]">
                        <div className="h-[50px] bg-[#7D8494] text-right lg:w-[75%] xl:w-[55%] rounded-l-sm float-right radiant-bg-right">
                            <h3 className="text-xl pr-8 text-white leading-[50px] shadow-xl xl:text-2xl lg:text-2xl font-normal">Technology</h3>
                        </div>
                        <div className="clear-both"></div>

                        <div className="container m-auto">
                            <motion.div
                                ref={ref4}
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInView_ref4 ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
                                className=""
                            >
                                <div className="text-right">
                                    <div className="people items-center px-[15px] rounded-xl border bg-card text-card-foreground shadow sm:flex xl:w-[50%] md:w-[75%] lg:w-[75%] mt-8 md:ml-auto md:mr-auto float-right md:float-none">
                                        <Image src="/images/finishing_bg.png" alt="DesigNova" width={500} height={500} className="w-full h-auto md:w-[200px] md:h-[200px] sm:ml-[-15px] rounded-t-xl sm:rounded-r-xl sm:hidden" quality={100} />
                                        <div className="pr-8 my-6 md:my-0">
                                            <h3 className="text-2xl flex-1 theme-color">Ankit Moliya</h3>
                                            <p className="text-[#999] text-md">Working Position</p>
                                            <p className="text-md leading-[20px] mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis alias voluptatem dolore ipsum maiores eos tempora soluta aspernatur quibusdam repellat placeat sint asperiores id doloribus, ad cumque nisi deleniti.</p>
                                        </div>
                                        <Image src="/images/finishing_bg.png" alt="DesigNova" width={500} height={500} className="w-full h-auto md:w-[200px] md:h-[200px] sm:ml-[-15px] rounded-t-xl sm:rounded-r-xl hidden sm:block" quality={100} />
                                    </div>
                                    <div className="clear-both"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="inner-section mt-16 lg:my-[75px] xl:my-[100px]">
                        <div className="h-[50px] bg-[#7D8494] text-left lg:w-[75%] xl:w-[55%] rounded-r-sm radiant-bg-lg">
                            <h3 className="text-xl pl-8 text-white leading-[50px] shadow-xl xl:text-2xl lg:text-2xl font-normal">Manufacturing</h3>
                        </div>
                        <div className="clear-both"></div>

                        <div className="container m-auto">
                            <motion.div
                                ref={ref5}
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInView_ref5 ? { y: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
                                className=""
                            >
                                <div className="people items-center px-[15px] rounded-xl border bg-card text-card-foreground shadow sm:flex xl:w-[50%] md:w-[75%] lg:w-[75%] mt-8 md:ml-auto md:mr-auto">
                                    <Image src="/images/finishing_bg.png" alt="DesigNova" width={500} height={500} className="w-full h-auto md:w-[200px] md:h-[200px] sm:ml-[-15px] rounded-t-xl sm:rounded-l-xl" quality={100} />
                                    <div className="pl-8 my-6 md:my-0">
                                        <h3 className="text-2xl flex-1 theme-color">Isaiah Rameriz</h3>
                                        <p className="text-[#999] text-md">Working Position</p>
                                        <p className="text-md leading-[20px] mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis alias voluptatem dolore ipsum maiores eos tempora soluta aspernatur quibusdam repellat placeat sint asperiores id doloribus, ad cumque nisi deleniti.</p>
                                    </div>
                                </div>
                                <div className="people items-center px-[15px] rounded-xl border bg-card text-card-foreground shadow sm:flex xl:w-[50%] md:w-[75%] lg:w-[75%] mt-8 md:ml-auto md:mr-auto">
                                    <Image src="/images/finishing_bg.png" alt="DesigNova" width={500} height={500} className="w-full h-auto md:w-[200px] md:h-[200px] sm:ml-[-15px] rounded-t-xl sm:rounded-l-xl" quality={100} />
                                    <div className="pl-8 my-6 md:my-0">
                                        <h3 className="text-2xl flex-1 theme-color">Sonu Karmakar</h3>
                                        <p className="text-[#999] text-md">Working Position</p>
                                        <p className="text-md leading-[20px] mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, debitis alias voluptatem dolore ipsum maiores eos tempora soluta aspernatur quibusdam repellat placeat sint asperiores id doloribus, ad cumque nisi deleniti.</p>
                                    </div>
                                </div>
                            </motion.div>

                            <div className="clear-both"></div>
                        </div>
                    </div>
                </div>
            </section >

            {/* section-3 */}
            < section className="section mt-[150px]" >
                <div className="container m-auto">
                    <blockquote className="text-6xl italic font-normal text-gray-900 dark:text-white my-[100px] text-center mb-[-5px]">
                        <motion.h3
                            ref={ref}
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
                            className="text-3xl md:text-5xl lg:text-6xl xl:text-6xl text-center lg:text-5xl md:text-5xl theme-color"
                        >
                            Sharing the Passion and Fuel Of the Art of Jewelery
                        </motion.h3>
                    </blockquote>
                </div>
            </section >

            <Footer />
        </div >
    );
}
