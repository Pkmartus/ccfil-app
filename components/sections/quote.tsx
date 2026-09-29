'use client';
import ImageHandler from "../../utils/image-handler"
import Section from "./section"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
export default function QuoteSection({id, quote, quoteName, quoteImgSrc}:{id, quote:string, quoteName: string, quoteImgSrc}){
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { margin: "0px 100px -50px 0px", once: false });
    return(
        <motion.section layout className={`${id} relative`}  id={id}>
        <motion.div
        className={``}
        layout
        initial={false}
        >
        <div className="flex flex-col overflow-hidden px-8 max-h-[380px]">

        <motion.div
        layout
        initial={true}
        style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.01, 0, 0, 1) 0s"
          }}
        className="fixed inset-0 z-0">
            <ImageHandler src={quoteImgSrc} width={2560} height={1440} alt="background image of smiling people" className="w-full h-full object-cover"/>
        </motion.div>
                <div className="flex flex-col max-w-6xl bg-transparent mx-auto z-1 justify-center m-10" ref={sectionRef}>
                    <h4 className="text-6xl md:text-[150px] font-bold text-white text-right rotate-180 md:-mt-20">&quot;</h4>
        <h3 className="text-left italic font-300 text-xl md:text-3xl text-white">{quote}</h3>
                    <h3 className="text-left font-bold uppercase text-white">
                {quoteName}
            </h3></div>
            
        </div>
        </motion.div>
        </motion.section>
    )
}
