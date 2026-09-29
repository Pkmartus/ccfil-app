"use client"
import React, { useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation"
import Nav from "../navigation/nav"
import { useOnClickOutside } from '../../utils/click-handler';
import { HeaderBGCarousel } from "./header-bg-carousel";
import { bgimages, carouselSlides } from "../../lib/data/data";
import ImageHandler from "../../utils/image-handler";
import { HeaderSlidesCarousel } from "./header-slides-carousel";
import HeaderContact from "./header-contact";
import Link from "next/link";

export default function NavHeader({ description, title, bgimage}: {description: string, title: string, bgimage: number}){
  const Navref = useRef();
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname()
  function handleNavClickOutside() {
    setNavbar(false);
  }
  useOnClickOutside(Navref, handleNavClickOutside)
   return(
      <div className="flex z-90 md:justify-center top-0 overflow-hidden max-w-full">
        <div className="flex absolute w-full justify-center">
          {pathname != '/' ? 
            <div className={`absolute top-0 w-full`}>
              <ImageHandler key={`${bgimages[bgimage]}-fg`} src={bgimages[bgimage].src} width={2550} height={1440} className="slideshowbg min-h-[300px] md:min-h-[550px] max-h-[550px] object-cover object-center justify-center" alt="bg image"/>
            </div> 
            : 
            <HeaderBGCarousel carouselSlides={carouselSlides} position="relative"/>}
        </div>
        <div className={`flex flex-col md:px-16 md:py-4 items-stretch bg-white bg-opacity-25 md:bg-opacity-75 w-full md:w-5/6 z-10 md:my-12 ${pathname == '/' ? 'md:min-h-[550px]' : ''}`}>
          <div className={`relative flex flex-row justify-between w-full`}>
            <Link href="/" className="shrink-0">
              <div className={`relative flex nav:hidden shrink-0 w-[34px] h-[39px] mr-5 ml-5 mt-2`}>
              <ImageHandler src="public/Logos/min-logo.svg" alt="CCFIL logo" fill priority/>
            </div>
            <div className={`relative hidden nav:flex shrink-0 w-[225px] h-[58px] justify-center`}>
              <ImageHandler src="public/Logos/main-logo.svg" alt="CCFIL logo" fill priority/>
            </div>
            </Link>
            <Nav mini={false}/>
          </div>
          {pathname != "/" ? 
            <div className={`flex flex-col gap-6 px-8 md:px-16 py-16 bg-white md:bg-transparent bg-opacity-50 md:bg-opacity-100 md:border-solid md:border-white md:border-[10px] justify-center mb-10 rounded-md ${!navbar ? "visible" : "hidden"}`}>
              <h1 className="md:text-5xl text-blue2">{title}</h1>
              <h3 className="text-blue1 md:font-black text-2xl lg:w-4/5">{description}</h3>
            </div>
          : 
            <>
              <HeaderSlidesCarousel carouselSlides={carouselSlides} navbar={navbar}/>
              <HeaderContact/>
            </>
          }

          </div>
        </div>
    )
}