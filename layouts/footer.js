import Link from 'next/link'
import { static_const } from '../lib/constants';
import { Input } from "@/components/ui/input"
import { SlSocialInstagram, SlSocialYoutube, SlSocialFacebook } from "react-icons/sl";
import { FiArrowRight } from "react-icons/fi";


export default function FooterLogin() {
    const logo_url = "/images/" + static_const['site_logo']

    return (
        <footer className="bg-black shadow-sm dark:bg-gray-800 py-[30px] radiant-bg">
            <div className="site-footer">
                <div className="container m-auto px-[20px] ">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3  gap-2 py-6 lg:py-8 xl:py-8 text-center md:text-left lg:text-left xl:text-left ">
                        <div>
                            <h2 className=" mb-6 md:mt-6 lg:mt-6 xl:mt-6 text-[18px] font-bold text-gray-900 text-white header-menu-head opacity-50">Client Care</h2>
                            <ul className="text-gery-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/contact-us" className="relative group text-[18px]"><span className="relative text-white font-normal">Contact Us<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-500 before:ease-in-out before:animate-underline mt-3" /></span></Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/track-order" className="relative group text-[18px]"><span className="relative text-white font-normal">Track your order<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-500 before:ease-in-out before:animate-underline mt-3" /></span></Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/return-policy" className="relative group text-[18px]"><span className="relative text-white font-normal">Return Policy<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-500 before:ease-in-out before:animate-underline mt-3" /></span></Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mt-[30px] mb-6 md:mt-6 lg:mt-6 xl:mt-6 text-[18px] font-bold text-white header-menu-head opacity-50">Our Company</h2>
                            <ul className="text-white dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/sustainability" className="relative group text-[18px]"><span className="relative text-white font-normal">Sustainablity<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-500 before:ease-in-out before:animate-underline mt-3" /></span></Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/about-us" className="relative group text-[18px]"><span className="relative text-white font-normal">About Us<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-500 before:ease-in-out before:animate-underline mt-3" /></span></Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/services" className="relative group text-[18px]"><span className="relative text-white font-normal">Services<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-500 before:ease-in-out before:animate-underline mt-3" /></span></Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/branding" className="relative group text-[18px]"><span className="relative text-white font-normal">Brands<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-500 before:ease-in-out before:animate-underline mt-3" /></span></Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="/" className="relative group text-[18px]"><span className="relative text-white font-normal">Knowledge<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-white before:transition-all before:duration-500 before:ease-in-out before:animate-underline mt-3" /></span></Link>
                                </li>
                            </ul>
                        </div>
                        <div className='relative-'>
                            <h2 className="mt-[30px] mb-6 md:mt-6 lg:mt-6 xl:mt-6 text-[18px] font-bold text-white header-menu-head opacity-50">Subscribe for {static_const['site_title']} updates</h2>
                            <p className="text-white italic text-[16px]">By entering your email address below, you consent to receiving our newsletter with access to our latest collections, events and initiatives. More details on this are provided in our <u>Privacy Policy</u></p>
                            <br />
                            <div className="relative">
                                <Input type="email" placeholder="Enter E-mail" className="text-white pr-[50px] focus:border-b-2 focus:border-white placeholder:text-white text-[14px] border-[#fff]" />
                                <FiArrowRight className='text-white absolute right-[5px] top-[15px] z-50' />
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-8 md:py-0 lg:py-0 xl:py-0 pl-0 bg-black-100 dark:bg-gray-700 md:flex md:items-center md:justify-between mt-0">
                        <div>
                            <div className="flex mt-4 mb-2 md:mt-0 space-x-5 rtl:space-x-reverse justify-center sm:justify-start md:justify-start lg:justify-start xl:justify-start align-center center">
                                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <SlSocialFacebook className='text-white text-2xl' />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <SlSocialInstagram className='text-white text-2xl' />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                    <SlSocialYoutube className='text-white text-2xl' />
                                </a>
                            </div>

                            {/* <Image src={logo_url} height={100} width={100} alt="Design Nova" loading="lazy" quality={100} className='bg-white my-[20px]' /> */}
                            <span className="text-sm text-white text-center block mt-[20px] ml-0">© 2025 <a href="/">{static_const['site_title']}</a>. All Rights Reserved.</span>
                        </div>
                    </div>
                </div>
            </div>

        </footer>

    );
}