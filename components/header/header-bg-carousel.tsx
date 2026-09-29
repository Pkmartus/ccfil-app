'use client';
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"
import ImageHandler from "../../utils/image-handler";

export function HeaderBGCarousel({carouselSlides, position}){
    const [current, setCurrent] = useState(0);

useEffect(()=> {
    setTimeout(()=> {
        nextSlide();
    }, 5000);
});
const nextSlide = () => {
    setCurrent(current === carouselSlides.length - 1 ? 0 : current + 1)
}
const pathname = usePathname();
    return (
            <div className={`carousel top-0 flex-auto w-full overflow-hidden`}>
                {carouselSlides.map((carouselSlide, index)=>{
                    return (
                        <div key={index} className={index == current ? `carouselCard carouselCard-active w-full overflow-hidden`: `carouselCard w-full`}>
                            <ImageHandler key={index} src={carouselSlide.src} width={2550} height={1440} className={`${position === "fixed" ? "fixed h-full ":"md:min-h-[640px] md:max-h-[640px]"} w-full bg-transparent min-h-screen object-cover object-center justify-center ${pathname === '/' ? "hidden":""} md:flex `} alt="bg image" priority/>
                        </div>
                    )
                })}
            </div>
    )
}