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
        breakpoint: 1441,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1368,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 769,
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
        <Image src="/images/cover_home.png" alt="DesigNova" width={0} height={0} sizes="100vw" quality={100} className="lg:w-full lg:h-screen xl:w-full xl:h-screen w-full h-screen object-cover" />

        <div className="container m-auto absolute w-[75%] left-[5%] bottom-[30%]">
          <Image src="/images/logo-t.png" alt="DesigNova" width={300} height={300} quality={100} className="" />
        </div>
      </section>

      {/* Section-2 */}
      <section className="section section-3 my-[150px] flex justify-center justify-between flex-row">
        <div className="container m-auto relative">

          {/* For monitor and wide screen */}
          <div className="hidden xl:block">
            <div className="centered image border-1 border-[#7D8494] rounded-full">
              <h3 className="transform  hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-xl h-[150px] w-[150px] rounded-[50%] flex items-center justify-center text-center absolute left-0 top-[50px] text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer">Transparency</h3>
              <h3 className="transform  hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-xl h-[150px] w-[150px] rounded-[50%] flex items-center justify-center text-center absolute left-[-75px] top-[40.5%] text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer">Design to Conception</h3>
              <h3 className="transform  hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-xl h-[150px] w-[150px] rounded-[50%] flex items-center justify-center text-center absolute left-0 bottom-[6%] text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer">Communication</h3>

              <h3 className="transform  hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-xl h-[150px] w-[150px] rounded-[50%] flex items-center justify-center text-center absolute right-0 top-[50px] text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer ">Ethical Sourcing</h3>
              <h3 className="transform  hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-xl h-[150px] w-[150px] rounded-[50%] flex items-center justify-center text-center absolute right-[-75px] top-[40.5%] text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer ">Reliability</h3>
              <h3 className="transform  hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-xl h-[150px] w-[150px] rounded-[50%] flex items-center justify-center text-center absolute right-0 bottom-[6%] text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer ">Data & Logistics</h3>

              <div className="m-auto text-center">
                {/* <div className="rounded-full border-2 2xl:w-full 2xl:h-full lg:w-[75%] lg:h-[75%] md:w-[600px] md:h-[600px] m-auto"> */}
                <div className="">
                  <p className="text-3xl bg-white -mt-[22px] xl:w-[32%] m-auto">The Collaboration and Partnership</p>
                  <Image className="rounded-3xl my-[30px] m-auto xl:h-[750px] xl:w-[750px] xl:h-[500px] xl:w-[500px] lg:h-[400px] lg:w-[400px]" src="/images/layer-7.png" alt="DesigNova" width={750} height={750} quality={100} />
                  <p className="text-3xl bg-white -mb-[16px] xl:w-[25%] m-auto">You Expect and Deserve</p>
                </div>
              </div>
            </div>
          </div>

          {/* For tablet and Laptop */}
          <div className="hidden sm:block xl:hidden">
            <div className="centered image sm:border-1 border-[#7D8494] rounded-xl m-16">
              <h3 className="transform  hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-xl h-[150px] w-[150px] rounded-[50%] flex items-center justify-center text-center sm:absolute left-[0] top-[-10px] text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer">Transparency</h3>
              <h3 className="transform  hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-xl h-[150px] w-[150px] rounded-[50%] flex items-center justify-center text-center sm:absolute left-[0] top-[40.5%] text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer">Design to Conception</h3>
              <h3 className="transform  hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-xl h-[150px] w-[150px] rounded-[50%] flex items-center justify-center text-center sm:absolute left-[0] bottom-[-10px] text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer">Communication</h3>

              <h3 className="transform  hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-xl h-[150px] w-[150px] rounded-[50%] flex items-center justify-center text-center sm:absolute right-[0] top-[-10px] text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer">Ethical Sourcing</h3>
              <h3 className="transform  hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-xl h-[150px] w-[150px] rounded-[50%] flex items-center justify-center text-center sm:absolute right-[0] top-[40.5%] text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer">Reliability</h3>
              <h3 className="transform  hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-xl h-[150px] w-[150px] rounded-[50%] flex items-center justify-center text-center sm:absolute right-[0] bottom-[-10px] text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer">Data & Logistics</h3>

              <div className="m-auto text-center relative">
                {/* <div className="rounded-full border-2 2xl:w-full 2xl:h-full md:w-[600px] md:h-[600px] m-auto"> */}
                <div className="2xl:w-full 2xl:h-full md:w-[600px] md:h-[600px] m-auto">
                  <p className="text-3xl bg-white sm:absolute top-[-45px] left-[22%] inline-block m-auto md:text-2xl">The Collaboration and Partnership</p>
                  <Image className="rounded-3xl my-[30px] m-auto 2xl:h-[750px] 2xl:w-[750px] xl:h-[500px] xl:w-[500px] lg:h-[400px] lg:w-[400px] md:h-[350px] md:w-[350px]" src="/images/layer-7.png" alt="DesigNova" width={750} height={750} quality={100} />
                  <p className="text-3xl bg-white sm:absolute bottom-[-15px] left-[28%] px-2 inline-block md:text-2xl">You Expect and Deserve</p>
                </div>
              </div>
            </div>
          </div>

          {/* For Mobile */}
          <div className="block sm:hidden">
            <p className="text-2xl m-auto pl-8 mb-4">The Collaboration and Partnership</p>
            <div className="centered image relative">
              <div className="flex justify-center">
                <h3 className="h-[150px] w-[150px] rounded-[50%] text-center  text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer inline-flex items-center justify-center">Transparency</h3>
                <h3 className="h-[150px] w-[150px] rounded-[50%] text-center text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer inline-flex items-center justify-center">Design to Conception</h3>
              </div>
              <div className="flex justify-center">
                <h3 className="h-[150px] w-[150px] rounded-[50%] text-center  text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer inline-flex items-center justify-center">Communication</h3>
                <h3 className="h-[150px] w-[150px] rounded-[50%] text-center  text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer inline-flex items-center justify-center">Ethical Sourcing</h3>
              </div>
              <div className="flex justify-center">
                <h3 className="h-[150px] w-[150px] rounded-[50%] text-center %] text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer inline-flex items-center justify-center">Reliability</h3>
                <h3 className="h-[150px] w-[150px] rounded-[50%] text-center  text-xl text-white bg-[#7D8494] px-[15px] py-[40px] m-2 cursor-pointer inline-flex items-center justify-center">Data & Logistics</h3>
              </div>
              <p className="text-2xl m-auto pl-8 mt-12 text-center m-auto">You Expect and Deserve</p>

              <Image className="background-image h-[100vh] w-[800px]" src="/images/layer-7.png" alt="DesigNova" width={750} height={750} quality={100} />
            </div>
          </div>
        </div>
      </section>

      {/* <hr className="container m-auto my-[200px]" /> */}
      <div className="my-[300px]"></div>

      {/* section-3 */}
      <section className="section section-2 my-8" >
        <div className="container m-auto slick-area relative lg:my-[150px]">
          <hr className="hidden lg:block" />
          <h3 className="text-5xl text-center text-[#7D8494] lg:absolute top-[-30px] left-[27.5%] z-51 bg-[#fff] px-[20px]">Explore the Facets of the Art</h3>

          <div className="border-2- border-[#7D8494] rounded-[10px] px-[50px] py-[100px]">
            <Slider ref={sliderRef} {...settings}>
              <div className="text-center">
                <Image src="/images/slider-2.png" alt="DesigNova" width={400} height={400} className="m-auto rounded-md shadow-xl lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] object-cover " />
                <h3 className="text-[30px] text-[#7D8494] font-normal mt-[15px]">3D CAD</h3>
                <p className="text-[18px] my-[8px] w-[80%] m-auto h-[400px] md:h-[240px] lg:h-[290px]">Incorporating 3D CAD models into jewelery manufacturing revolutionizes the design and production process by enabling precise and intricate designs that were previously unattainable. By integrating 3D CAD models, jewelers can achieve greater accuracy, reduce production time, and offer customized pieces that meet the unique preferences of their clients.</p>
                <Link href="/3d-cad"><Button variant="theme" className="mt-[15px]" size="lg">Learn More</Button></Link>
              </div>
              <div className="text-center">
                <Image src="/images/facets/facet5.png" alt="DesigNova" width={400} height={400} className="m-auto rounded-md shadow-xl lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] object-cover " />
                <h3 className="text-[30px] text-[#7D8494] font-normal mt-[15px]">Creation</h3>
                <p className="text-[18px] my-[8px] w-[80%] m-auto h-[400px] md:h-[240px] lg:h-[290px]">Incorporating 3D CAD models into jewelery manufacturing revolutionizes the design and production process by enabling precise and intricate designs that were previously unattainable. By integrating 3D CAD models, jewelers can achieve greater accuracy, reduce production time, and offer customized pieces that meet the unique preferences of their clients.</p>
                <Link href="/creation"><Button variant="theme" className="mt-[15px]" size="lg">Learn More</Button></Link>
              </div>
              <div className="text-center">
                <Image src="/images/slider-1.png" alt="DesigNova" width={400} height={400} className="m-auto rounded-md shadow-xl lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] object-cover " />
                <h3 className="text-[30px] text-[#7D8494] font-normal mt-[15px]">Casting</h3>
                <p className="text-[18px] my-[8px] w-[80%] m-auto h-[400px] md:h-[240px] lg:h-[290px]">The jewelery casting process is a meticulous blend of art and science, leveraging advanced metallurgic techniques to transform raw materials into exquisite pieces. This scientific approach ensures that each piece of jewelery is not only beautiful but also structurally sound and of the highest quality.</p>
                <Link href="/casting"><Button variant="theme" className="mt-[15px]" size="lg">Learn More</Button></Link>
              </div>
              <div className="text-center">
                <Image src="/images/facets/facet3.png" alt="DesigNova" width={400} height={400} className="m-auto rounded-md shadow-xl lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] object-cover " />
                <h3 className="text-[30px] text-[#7D8494] font-normal mt-[15px]">Finishing</h3>
                <p className="text-[18px] my-[8px] w-[80%] m-auto h-[400px] md:h-[240px] lg:h-[290px]">The jewelery casting process is a meticulous blend of art and science, leveraging advanced metallurgic techniques to transform raw materials into exquisite pieces. This scientific approach ensures that each piece of jewelery is not only beautiful but also structurally sound and of the highest quality.</p>
                <Link href="/finishing"><Button variant="theme" className="mt-[15px]" size="lg">Learn More</Button></Link>
              </div>
              <div className="text-center">
                <Image src="/images/slider-3.png" alt="DesigNova" width={400} height={400} className="m-auto rounded-md shadow-xl lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] object-cover " />
                <h3 className="text-[30px] text-[#7D8494] font-normal mt-[15px]">Stone Settings</h3>
                <p className="text-[18px] my-[8px] w-[80%] m-auto h-[400px] md:h-[240px] lg:h-[290px]">Stone setting is a meticulous art that requires precision and skill. We specialize in setting technique, from prong to micropave demanding a deep understanding of both the stone and the metal. Our result is a harmonious blend of artistry and engineering, where the jeweler's expertise transforms raw materials into stunning, wearable works of art.</p>
                <Link href="/stone-setting"><Button variant="theme" className="mt-[15px]" size="lg">Learn More</Button></Link>
              </div>
              <div className="text-center">
                <Image src="/images/facets/facet6.png" alt="DesigNova" width={400} height={400} className="m-auto rounded-md shadow-xl lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] object-cover " />
                <h3 className="text-[30px] text-[#7D8494] font-normal mt-[15px]">Branding</h3>
                <p className="text-[18px] my-[8px] w-[80%] m-auto h-[400px] md:h-[240px] lg:h-[290px]">Stone setting is a meticulous art that requires precision and skill. We specialize in setting technique, from prong to micropave demanding a deep understanding of both the stone and the metal. Our result is a harmonious blend of artistry and engineering, where the jeweler's expertise transforms raw materials into stunning, wearable works of art.</p>
                <Link href="/branding"><Button variant="theme" className="mt-[15px]" size="lg">Learn More</Button></Link>
              </div>
              <div className="text-center">
                <Image src="/images/facets/facet7.png" alt="DesigNova" width={400} height={400} className="m-auto rounded-md shadow-xl lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] object-cover " />
                <h3 className="text-[30px] text-[#7D8494] font-normal mt-[15px]">Partnership</h3>
                <p className="text-[18px] my-[8px] w-[80%] m-auto h-[400px] md:h-[240px] lg:h-[290px]">Stone setting is a meticulous art that requires precision and skill. We specialize in setting technique, from prong to micropave demanding a deep understanding of both the stone and the metal. Our result is a harmonious blend of artistry and engineering, where the jeweler's expertise transforms raw materials into stunning, wearable works of art.</p>
                <Link href="/partnership"><Button variant="theme" className="mt-[15px]" size="lg">Learn More</Button></Link>
              </div>

            </Slider>
          </div>

          <div>
            <p className="absolute top-[50%] right-0 lg:right-[-35px] sm:top-[35%] sm:right-0 bg-white py-8 cursor-pointer text-[#7D8494]" onClick={nextSlide}><RiArrowRightWideLine className="text-[75px]" /></p>
            <p className="absolute top-[50%] left-0 lg:left-[-35px] sm:top-[35%] sm:left-0 bg-white py-8 cursor-pointer text-[#7D8494]" onClick={prevSlide}><RiArrowLeftWideLine className="text-[75px]" /></p>
          </div>
        </div>
      </section >


      {/* Section-4 */}
      <section className="section xl:mt-[150px] sm:mt-16">
        <div className="container m-auto">
          <div className="m-auto">
            <div className="abc">
              <blockquote className="text-2xl xl:text-6xl lg:text-4px md:text-4xl sm:text-3xl italic font-normal text-gray-900 dark:text-white lg:my-[100px] text-center">
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
