'use client'

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link"
import { motion, useInView } from "framer-motion";

import Header from './../../layouts/header'
import Footer from './../../layouts/footer'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import ReCAPTCHA from 'react-google-recaptcha';
import { static_const } from "@/lib/constants";


export default function ContactUs() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const [captchaValue, setCaptchaValue] = useState(null);

    return (
        <div className="page page-wrapper" >
            <Header />

            {/* section-1 */}
            <section className="section section-1 m-auto relative" >
                <div className="h-full">
                    <Image src="/images/learn_bg.png" alt="DesigNova" width={0} height={0} sizes="100vw" className="lg:w-full lg:h-screen xl:w-full xl:h-screen w-full h-screen object-cover" quality={100} />

                </div>
            </section>

            {/* Section-2 */}
            <section className="section section-2 my-[25px] sm:my-[75px] md:my-[100px] lg:my-[100px] xl:my-[100px]">
                <div className="container m-auto relative">
                    <div>
                        <hr className="hidden lg:block md:block xl:block" />
                        <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-[#7D8494] top-[-30px] left-[29%] z-49 bg-[#fff] px-[20px] lg:text-3xl md:text-3xl xl:top-[-30px] lg:top-[-22px] md:top-[-22px] lg:absolute xl:absolute md:absolute xl:left-[35%]">Reach out to us</h3>

                        <div className="clear-both"></div>
                    </div>

                    <div className="grid grid-rows-2 gap-0 sm:gap-4 lg:gap-16 xl:gap-16 mt-[150px] px-[20px] xl:px-[20px] lg:grid-cols-2 xl:grid-cols-2 xl:grid-rows-1">
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44446.86799389809!2d-118.37131469674253!3d34.10709623278964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2be4f253238cf%3A0xd3dd5027799c9a71!2sUniversal%20Studios%20Hollywood!5e0!3m2!1sen!2sin!4v1741685965231!5m2!1sen!2sin" width="auto" height="auto" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-[400px]"></iframe>
                        </div>
                        <div>
                            <h3 className="mb-[4px] text-2xl">Leave us a message</h3>
                            <p className="text-md niramit-3">Our team will be in touch soon for further info!</p>

                            <div className="mt-8 xl:w-[75%]">
                                <form method="post" action="/submit-form">
                                    <div className="form-group my-6">
                                        <Input type="text" required id="name" name="name" className="text-[16px]" placeholder="Your Name*" />
                                    </div>
                                    <div className="form-group my-6">
                                        <Input type="email" required id="email" name="email" className="text-[16px]" placeholder="Your Email*" />
                                    </div>
                                    <div className="form-group my-6">
                                        <Textarea placeholder="Your message*" required name="message" id="message" className="text-[16px] h-[110px]" />
                                    </div>

                                    <div className="form-group my-6 captcha-area">
                                        <ReCAPTCHA
                                            sitekey="6LfODvEqAAAAABobg4fIf4RKB9MBeyx9ZujoxlXg"
                                            onChange={(value) => setCaptchaValue(value)}
                                        />
                                    </div>

                                    <div className="form-group my-6">
                                        <Button type="submit" size="xl" variant="theme">Send Message</Button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* section-3 */}
            <section className="section mt-[150px]" >
                <div className="m-auto">
                    <blockquote className="text-4xl italic font-normal text-gray-900 dark:text-white mt-[100px] mb-[-5px] text-center">
                        <motion.h3
                            ref={ref}
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
                            className="text-3xl sm:text-2xl lg:text-6xl xl:text-6xl text-center lg:text-5xl md:text-5xl theme-color"
                        >
                            There are no Questions not worth Asking
                        </motion.h3>
                    </blockquote>
                </div>
            </section >

            <Footer />
        </div >
    );
}
