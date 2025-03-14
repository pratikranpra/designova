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
                    <Image src="/images/story_bg.png" alt="DesigNova" width={0} height={0} sizes="100vw" className="lg:w-full lg:h-screen xl:w-full xl:h-screen w-full h-screen object-cover" quality={100} />

                </div>
            </section>

            {/* Section-2 */}
            <section className="section section-2 my-[25px] sm:my-[75px] md:my-[100px] lg:my-[100px] xl:my-[100px]">
                <div className="container m-auto relative">
                    <hr className="hidden lg:block md:block xl:block" />
                    <h3 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-[#7D8494] top-[-30px] left-[29%] z-49 bg-[#fff] px-[20px] lg:text-3xl md:text-3xl lg:top-[-22px] md:top-[-22px] lg:absolute xl:absolute md:absolute">The Creation of a Win Win</h3>

                    <div className="m-auto my-[50px] sm:my-[75px] md:my-[100px] lg:my-[100px] xl:my-[100px]">
                        <div className="">
                            <h3 className="text-[24px] bg-theme text-center text-white py-1 rounded-sm radiant-bg rounded-b-[0]">Company Mission</h3>

                            <div className="px-[20px] my-[25px] sm:x-[55x] md:x-[55px] lg:x-[55px] xl:x-[55px] mt-[30px]">
                                <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl ">At DesigNova Studios, our mission is to revolutionize the jewelry industry through cutting-edge technology, innovative manufacturing processes, and a steadfast commitment to integrity and transparency. We aim to set new standards in operational excellence in serving our employees and strategic partners providing comprehensive back-office, manufacturing, design, and logistics support.</p>

                                <div className="mt-12">
                                    <h3 className="text-2xl underline my-4">Founders:</h3>

                                    <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl  pl-6">DesigNova Studios was founded by <span className="theme-color font-bold">Patsy</span> and <span className="theme-color font-bold">David Wesson</span>, both seasoned professionals with extensive experience in their respective fields. Patsy, a Graduate Gemologist (GIA GG) with nearly 40 years of experience, had previously owned two brick-and-mortar jewelry stores. Her journey to find a true manufacturing partner was fueled by her unwavering passion for excellence. However, she faced numerous disappointments with manufacturers who delivered inconsistent quality, slow turnaround times, and unpredictable pricing. These challenges only strengthened her resolve, leading her to establish DesigNova Studios—a place where her vision for consistent, high-quality craftsmanship could finally be realized.</p>

                                    <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl  my-3 pl-6">David, a serial entrepreneur with a background in engineering, manufacturing, and distribution of oil and gas products, has founded, built, and sold multiple companies, amassing over 100 patents throughout his career. Together, the Wessons are fueled by their commitment to relationships and empowering others, creating a studio that embodies their dedication to excellence and innovation.</p>
                                </div>

                                <div className="mt-16">
                                    <h3 className="text-2xl underline my-4">Leadership and Team:</h3>

                                    <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl  pl-6">In collaboration our vision is driven forward, with appointing <span className="theme-color font-bold">Jerry Taylor</span> as our Chief Operating Officer (COO). Jerry brings a wealth of knowledge in jewelry manufacturing, design, sales, marketing, and process optimization. Jerry has over 35 years' experience in all facets of jewelry manufacturing from designing, casting, bench, to finishing. He has been recognized for his work and has awards as an International Jewelry Designer as well as an award from the Santa Fe Symposium for his product development work. Together with the Wesson's, operational excellence is possible and has created a new standard in the industry.</p>
                                </div>

                                <div className="mt-16 text-center">
                                    <Link href="/our-team"><Button variant={"theme"} size={"xl"}>Meet the Team</Button></Link>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="m-auto my-[25px] sm:my-[75px] md:my-[100px] lg:my-[100px] xl:my-[100px]">
                        <div className="">
                            <h3 className="text-[24px] bg-theme text-center text-white py-1 rounded-sm rounded-b-[0] radiant-bg">What we do</h3>

                            <div className="px-[20px] my-[25px] sm:x-[55x] md:x-[55px] lg:x-[55px] xl:x-[55px] mt-[30px]">
                                <h3 className="text-2xl underline my-4">Global Operations:</h3>
                                <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl  pl-6">DesigNova Studios is strategically headquartered in Fort Worth, TX, with additional offices in India.</p>

                                <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl  mt-12">This global presence offers several key benefits:</p>

                                <h3 className="text-2xl underline my-4">Cost-Effective Scaling:</h3>
                                <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl  pl-6">By leveraging our international offices, we can scale brands more cost-effectively. The lower operational costs in India allow us to offer competitive pricing without compromising on quality.</p>

                                <h3 className="text-2xl underline my-4">Rapid Execution:</h3>
                                <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl  pl-6">Our global network enables us to execute quickly, taking designs from concept to market in record time. This agility is crucial for small brands looking to make a significant impact in the market.</p>

                                <h3 className="text-2xl underline my-4">24/6 Operations:</h3>
                                <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl  pl-6">With offices in different time zones, we can operate around the clock. This ensures continuous progress on projects and faster turnaround times, enhancing overall efficiency.</p>

                                <h3 className="text-2xl underline my-4"> Access to Diverse Talent:</h3>
                                <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl  pl-6">Our international offices provide access to a diverse pool of talent. This diversity fosters innovation and brings a wide range of perspectives to our design and manufacturing processes.</p>

                                <h3 className="text-2xl underline my-4">Enhanced Customer Support:</h3>
                                <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl  pl-6">Having a local presence in Fort Worth allows us to offer personalized customer support to our U.S.-based clients. Meanwhile, our team in India can provide support to clients in other regions, ensuring a seamless experience for all our partners.</p>

                                <h3 className="text-2xl underline my-4">Global Partnerships:</h3>
                                <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl  pl-6">Our worldwide partnerships enable us to handle any volume of production. This flexibility allows us to cater to the needs of both small and large brands, ensuring we can meet the demands of a growing market.</p>

                                <h3 className="text-2xl underline my-4">Market Insights:</h3>
                                <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl  pl-6">Being present in multiple regions gives us valuable insights into different markets. This knowledge helps us tailor our strategies to meet the unique needs of each market, enhancing our ability to drive brand success.</p>

                                <h3 className="text-2xl underline my-4">Data:</h3>
                                <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl  pl-6">Using cloud.designova.studios, data is the backbone of our ERP systems, driving automation and efficiency across all operations. By leveraging real-time data analytics, our ERP systems streamline processes such as inventory management, order processing, and production scheduling. This data-driven approach ensures that every aspect of the manufacturing workflow is optimized, reducing manual intervention and minimizing errors. The result is a seamless, automated environment where data insights lead to smarter decision-making, faster turnaround times, and consistent product quality.</p>

                                <p className="mt-12 text-xl">By combining the strengths of our international and local offices, DesigNova Studios is well-positioned to take small brands to the next level, offering unparalleled efficiency, innovation, and market reach. With a strong foundation built on decades of experience and a forward-thinking approach, DesigNova Studios is poised to revolutionize the fine jewelry industry. We are dedicated to fostering long-term relationships with our partners and delivering extraordinary results through knowledge, innovation, and collaboration.</p>

                            </div>
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
