'use client';
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";

export function HeaderSlidesCarousel({carouselSlides, navbar}){
    const [current, setCurrent] = useState(0);
    const router = useRouter();
    useEffect(()=> {
        setTimeout(()=> {
            nextSlide();
        }, 5000);
    });
const nextSlide = () => {
    setCurrent(current === carouselSlides.length - 1 ? 0 : current + 1)
}
function handleAnchor (e, url) {
    e.preventDefault();
    router.push(url)
}
    return (
            <div className={`carousel w-full h-14 md:h-[400px] pt-4`}>
                {carouselSlides.map((carouselSlide, index)=>{
                    return (
                        <div key={index} className={index == current ? `md:flex flex-row gap-10 w-3/5 md:w-2/3 lg:w-3/4 carouselCard carouselCard-active max-h-[420px] overflow-hidden hidden`: `flex flex-row gap-10 w-2/3 lg:w-3/4 carouselCard max-h-[420px] overflow-hidden`}>
                            <div className={`flex flex-col gap-6 px-8 md:px-16 py-12 bg-white md:bg-transparent bg-opacity-50 md:bg-opacity-100 md:border-solid md:border-white md:border-[10px] justify-center w-full ${!navbar ? "visible" : "hidden"}`}>
                                    <h3 className="text-blue1 md:font-black text-2xl">{carouselSlide.description}</h3>
                                    <h1 className="md:text-6xl text-blue2 text-center md:text-left">{carouselSlide.title}</h1>
                                        <button className="md:mr-auto bg-blue1 rounded-full px-10 py-2 text-xl font-bold uppercase text-white hover:text-blue2 hover:bg-white hover:bg-opacity-25 hover:border-2 hover:border-blue2 hover:-mb-[3px]" onClick={(e)=>handleAnchor(e, carouselSlides[current].headerButton.url)}>
                                            {carouselSlide.headerButton.title}
                                        </button>
                            </div>
                            <div className="flex flex-col justify-center gap-2">
                            <div className={`${current == 0 ? 'border-pink' : 'border-white'} border-[3px] h-28 transition-colors`}/>
                            <div className={`${current == 1 ? 'border-pink' : 'border-white'} border-[3px] h-28 transition-colors`}/>
                            <div className={`${current == 2 ? 'border-pink' : 'border-white'} border-[3px] h-28 transition-colors`}/>
                            </div>
                        </div>
                    )
                })}
            </div>
    )
}