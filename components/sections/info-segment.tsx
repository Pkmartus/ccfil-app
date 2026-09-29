'use client';
import ImageHandler from "../../utils/image-handler";
import { useRouter } from "next/navigation";
import Section from "./section";
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { ServiceItem } from "../cards/service-item";

export default function InfoSegment({headerText, bodyText, Type, infoImage, ButtonUrl, icon, id, overscroll}:{headerText : string, bodyText: string, Type: string, infoImage, ButtonUrl, icon, id, overscroll: boolean}){
    const router = useRouter();
    return(
        <Section initial={false} useOnce id={id} className={''}>
        <div className={`relative z-40 h-full bg-white md:py-12 mx-auto`}>
            <div className={`relative max-w-6xl flex flex-col-reverse mx-auto w-full h-full ${Type != "B" ? "md:flex-row md:pt-10" : "md:flex-row-reverse md:pt-16"}`}>
            <div className={`md:w-1/2 z-20 ${Type != "B" ? "md:ml-5" : "md:mr-5"}`}>
            <ImageHandler src={infoImage.url} width={800} height={600} alt={infoImage.alt}/>
            </div>
            <div className={`relative flex flex-col gap-5 border-[10px] border-gray2 md:border-gray1 bg-white bg-opacity-50 md:bg-opacity-100 md:bg-transparent md:px-20 py-5 md:py-10 md:w-1/2 z-40 ${Type != "B" ? "md:-ml-16 md:mr-10" : "md:-mr-16 md:ml-10 z-30"} md:mt-20`}>
                <div className="relative w-14 h-14 pl-3">
                <ImageHandler src={icon} alt='icon' width={153} height={150} style={{display: "contain"}}/>
                </div>
                <div className="flex flex-col gap-3 sticky top-10 md:relative bg-white z-30 p-3">
            <h2 className=" text-blue2">{headerText}</h2>
            <hr className="border-pink border-[1.5px] md:w-2/5"/>
            <ReactMarkdown className="markdown text-left px-3 pb-10" remarkPlugins={[remarkGfm, remarkBreaks]}>
            {bodyText}
            </ReactMarkdown>
            </div>
            {ButtonUrl == null ? <></> : <div className="relative text-center md:text-left w-full bg-white z-40"><button className="uppercase border-2 border-blue1 rounded-full px-10 py-2 mx-auto bg-white hover:bg-blue1 hover:text-white text-blue1 "
            onClick={()=> router.push(ButtonUrl)}>Learn More About Us
            </button></div> }
            </div>
            </div>
        </div>
        </Section>
    )
}

export function StickyInfoSegment({bgcolor, children, captionText, type, id}){
    return(
        <Section initial={false} useOnce id={id} className={`z-50`}>
        <div className={`flex w-full ${bgcolor} z-70`}>
        <div className={`relative flex flex-col min-w-0 ${type == "A" ? "lg:flex-row" : "lg:flex-row-reverse"} max-w-6xl py-16 px-3 gap-10 mx-auto justify-center`}>
            <div className="z-40 flex items-center lg:w-1/3 border-[10px] border-blue2 md:p-10 lg:sticky md:top-4 mb-auto w-[300px] h-[450px] justify-center mx-auto">
                <h2 className="text-blue1 font-black text-4xl flex flex-shrink relative px-3 md:px-0">
                    {captionText}
                </h2>
            </div>
            <div className="static lg:w-2/3">
                {children}
            </div>
        </div>
        </div>
        </Section>
    )
}

export function InfoBody({headerText, bodyText,ImageUrl,ButtonUrl }:{headerText: string, bodyText: string, ImageUrl, ButtonUrl}){
    const router = useRouter();
    return(
        <>
            <div className="flex flex-col gap-7 bg-white">
            <ImageHandler src={ImageUrl} width={800} height={600} alt="image of a happy people"/>
            <div className="flex flex-col gap-7 md:p-5">
            <h2 className="text-2xl font-bold text-blue1">{headerText}</h2>
            <hr className="border-pink border-2 w-1/2"/>
            <ReactMarkdown className="markdown p-2 list-inside text-left" remarkPlugins={[remarkGfm, remarkBreaks]}>
                {bodyText}
                </ReactMarkdown>
            {ButtonUrl == null ? <></> : <button className="uppercase border-2 border-blue1 rounded-full px-10 py-2 mx-auto hover:bg-blue1 hover:text-white text-blue1"
            onClick={()=> router.push(ButtonUrl)}>Learn More About Us
            </button> }
            </div>
            </div>
        </>
    )
}

export function InfoServiceBody({headerText, data, ImageUrl, ButtonUrl }:{headerText: string, data, ImageUrl, ButtonUrl}){
    const router = useRouter();
    return(
        <>
            <div className="flex flex-col gap-7 bg-white">
                <ImageHandler src={ImageUrl} width={800} height={600} alt={`${headerText} icon`}/>
                    <div className="flex flex-col gap-7 p-5">
                        <h2 className="text-2xl font-bold text-blue1">{headerText}</h2>
                        <hr className="border-pink border-2 w-1/2"/>
                    <div className={`flex flex-col gap-3`}>
                {data.map(item => (
                    <ServiceItem key={item.id} serviceTitle={item.serviceTitle} serviceBodyText={item.serviceBodyText} Icon={item.Icon}/>
                ))}
            </div>
            {ButtonUrl == null ? <></> : <button className="transition ease-in-out duration-75 uppercase border-2 border-blue1 rounded-full px-6 py-2 mx-auto hover:bg-blue1 hover:text-white"
            onClick={()=> router.push(ButtonUrl)}>Learn More About Us
            </button> }
            </div>
            </div>
        </>
    )
}