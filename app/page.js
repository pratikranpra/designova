'use client'

import React, { useRef } from "react";
import Slider from "react-slick";
import Link from "next/link"
import { motion, useInView } from "framer-motion";

import { Button } from "@/components/ui/button"
import Image from "next/image";

import Header from './../layouts/header'
import Footer from './../layouts/footer'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";
import { Separator } from "@radix-ui/react-select";



export default function Home() {
  const imageStyle = {
    objectFit: "cover"
  }

  const sliderRef = useRef(null);

  const settings = {
    autoplay: false,
    autoplaySpeed: 1000,
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '100px',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const nextSlide = () => sliderRef.current?.slickNext();
  const prevSlide = () => sliderRef.current?.slickPrev();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="page page-wrapper" >
      <Header />

      {/* section-1 */}
      <section className="section section-1 m-auto relative" >
        <Image src="/images/cover_home.png" alt="DesigNova" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} quality={100} />

        <div className="container m-auto absolute w-[75%] left-[5%] bottom-[30%]">
          <Image src="/images/logo-t.png" alt="DesigNova" width={300} height={300} quality={100} className="" />
        </div>
      </section>

      {/* Section-2 */}
      <section className="section section-3 my-[150px] flex justify-center justify-between flex-row">
        <div className="container m-auto relative">
          <div className="centered image">
            <h3 className="transform  hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-xl h-[150px] w-[150px] rounded-[50%] flex items-center justify-center text-center absolute left-[120px] top-[50px] text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer">Transparency</h3>
            <h3 className="transform  hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-xl h-[150px] w-[150px] rounded-[50%] flex items-center justify-center text-center absolute left-[-75px] top-[40.5%] text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer">Design to Conception</h3>
            <h3 className="transform  hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-xl h-[150px] w-[150px] rounded-[50%] flex items-center justify-center text-center absolute left-[85px] bottom-[6%] text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer">Communication</h3>

            <h3 className="transform  hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-xl h-[150px] w-[150px] rounded-[50%] flex items-center justify-center text-center absolute right-[100px] top-[50px] text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer">Ethical Sourcing</h3>
            <h3 className="transform  hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-xl h-[150px] w-[150px] rounded-[50%] flex items-center justify-center text-center absolute right-[-80px] top-[40.5%] text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer">Reliability</h3>
            <h3 className="transform  hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-xl h-[150px] w-[150px] rounded-[50%] flex items-center justify-center text-center absolute right-[85px] bottom-[6%] text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer">Data & Logistics</h3>

            <div className="m-auto text-center">
              <div className="rounded-full border-2">
                <p className="text-3xl bg-white -mt-[22px] w-[32%] m-auto">The Collaboration and Partnership</p>
                <Image className="rounded-3xl my-[30px] m-auto" src="/images/layer-7.png" alt="DesigNova" width={750} height={750} quality={100} />
                <p className="text-3xl bg-white -mb-[16px] w-[25%] m-auto">You Expect and Deserve</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* <hr className="container m-auto my-[200px]" /> */}
      <div className="my-[300px]"></div>

      {/* section-3 */}
      <section className="section section-2 my-8" >
        <div className="container m-auto slick-area relative my-[150px]">
          <hr />
          <h3 className="text-5xl text-center text-[#7D8494] absolute top-[-30px] left-[27.5%] z-51 bg-[#fff] px-[20px]">Explore the Facets of the Art</h3>

          <div className="border-2- border-[#7D8494] rounded-[10px] px-[50px] py-[100px]">
            <Slider ref={sliderRef} {...settings}>
              <div className="text-center">
                <Image src="/images/slider-1.png" alt="DesigNova" width={400} height={400} sizes="100vw" quality={100} className="m-auto rounded-md shadow-xl xl:h-[300px] object-cover " />
                <h3 className="text-[30px] text-[#7D8494] font-normal mt-[15px]">Casting</h3>
                <p className="text-[18px] my-[8px] w-[80%] m-auto h-[240px]">The jewelery casting process is a meticulous blend of art and science, leveraging advanced metallurgic techniques to transform raw materials into exquisite pieces. This scientific approach ensures that each piece of jewelery is not only beautiful but also structurally sound and of the highest quality.</p>
                <Link href="/casting"><Button variant="theme" className="mt-[15px]" size="lg">Learn More</Button></Link>
              </div>
              <div className="text-center">
                <Image src="/images/slider-2.png" alt="DesigNova" width={400} height={400} sizes="100vw" quality={100} className="m-auto rounded-md shadow-xl xl:h-[300px] object-cover " />
                <h3 className="text-[30px] text-[#7D8494] font-normal mt-[15px]">3D CAD</h3>
                <p className="text-[18px] my-[8px] w-[80%] m-auto h-[240px]">Incorporating 3D CAD models into jewelery manufacturing revolutionizes the design and production process by enabling precise and intricate designs that were previously unattainable. By integrating 3D CAD models, jewelers can achieve greater accuracy, reduce production time, and offer customized pieces that meet the unique preferences of their clients.</p>
                <Link href="/3d-cad"><Button variant="theme" className="mt-[15px]" size="lg">Learn More</Button></Link>
              </div>
              <div className="text-center">
                <Image src="/images/slider-3.png" alt="DesigNova" width={400} height={400} sizes="100vw" quality={100} className="m-auto rounded-md shadow-xl xl:h-[300px] object-cover " />
                <h3 className="text-[30px] text-[#7D8494] font-normal mt-[15px]">Stone Settings</h3>
                <p className="text-[18px] my-[8px] w-[80%] m-auto h-[240px]">Stone setting is a meticulous art that requires precision and skill. We specialize in setting technique, from prong to micropave demanding a deep understanding of both the stone and the metal. Our result is a harmonious blend of artistry and engineering, where the jeweler's expertise transforms raw materials into stunning, wearable works of art.</p>
                <Link href="/stone-setting"><Button variant="theme" className="mt-[15px]" size="lg">Learn More</Button></Link>
              </div>

            </Slider>
          </div>

          <div>
            <p className="absolute top-[50%] right-[-35px] bg-white py-8 cursor-pointer text-[#7D8494]" onClick={prevSlide}><RiArrowRightWideLine className="text-[75px]" /></p>
            <p className="absolute top-[50%] left-[-35px] bg-white py-8 cursor-pointer text-[#7D8494]" onClick={nextSlide}><RiArrowLeftWideLine className="text-[75px]" /></p>
          </div>
        </div>
      </section >


      {/* Section-4 */}
      <section className="section mt-[150px]">
        <div className="container m-auto">
          <div className="m-auto">
            <div className="abc">
              <blockquote className="text-6xl italic font-normal text-gray-900 dark:text-white my-[100px] text-center">
                <p>
                  <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  <span className="block my-8 text-[#7D8494]">When companies come together with a clear vision and open communication, they can reduce risks and maximize rewards. Whether it's pooling technology, expertise, or market influence, these partnerships can reshape entire industries.</span>
                  <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4 float-right" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                </p>
              </blockquote>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div >
  );
}
