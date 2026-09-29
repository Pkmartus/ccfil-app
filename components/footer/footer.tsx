"use client";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import ImageHandler from "@/utils/image-handler";
import Link from "next/link";
import Button from "../buttons/style-button";
import { usePathname } from "next/navigation";

const whoWeAre = `
Community Connections for Independent Living, LLC is a group of caring professionals dedicated to the residents we service, individuals who sustained Traumatic Brain Injury (TBI). 
\\
We realize that each of our residents has a unique journey to recovery ahead of them. Therefore, we develop an individualized rehabilitation plan that ensures they learn the skills and tools they need to successfully navigate school, work and daily life. Ultimately our role is to be supportive and help our residents reach their goals and move forward with their rehabilitation.
`;
export default function Footer() {
  const pathname = usePathname();
  return (
    <>
      <div
        className={`flex flex-col relative bottom-0 overflow-hidden px-5 pt-5 md:pt-16 pb-4 bg-white justify-center w-full items-center`}
      >
        {pathname == "/" ? (
          <div
            className={`relative flex flex-col-reverse md:flex-row mx-auto max-w-6xl justify-between pb-16 gap-5 md:gap-0`}
          >
            <div className={`flex flex-col md:w-1/2 gap-10`}>
              <p>
                We at Community Connections for Independent Living are proud
                members of these TBI advocacy organizations. Through continued
                collaboration and education, we strengthen our mission to serve
                and promote the rights and quality of life for brain injury
                survivors.
              </p>
              <div
                className={`grid grid-cols-1 md:grid-cols-3 justify-center mx-auto md:justify-evenly items-center gap-10 px-5 md:px-0 md:max-w-[600px] max-w-[300px]`}
              >
                <ImageHandler
                  src={`public/Logos/OtherLogos/CPAN.png`}
                  height={893}
                  width={1999}
                  alt="CPAN logo"
                  className={``}
                />
                <ImageHandler
                  src={`public/Logos/OtherLogos/mbipc.png`}
                  height={391}
                  width={1500}
                  alt="CPAN logo"
                  className={``}
                />
                <ImageHandler
                  src={`public/Logos/OtherLogos/BIAMI.png`}
                  height={391}
                  width={1500}
                  alt="CPAN logo"
                  className={``}
                />
              </div>
            </div>
            <div className=" overscroll-auto items-center border-[10px] border-blue2 p-10 top-4">
              <h2 className="text-blue1 font-black text-5xl md:text-6xl flex flex-shrink relative ">
                TBI
                <br></br>Advocacy
              </h2>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="absolute w-full bottom-0 z-70">
          <ImageHandler
            src="public/Images/footer-bg.png"
            width={2560}
            height={1440}
            alt={`footer image`}
            priority
          />
        </div>
        <div
          className={`sticky flex flex-col my-2 bg-gray3 px-16 pt-16 pb-4 z-80 mx-16 justify-between max-w-6xl w-full`}
        >
          <div className="flex flex-col md:flex-row justify-between text-white mx-auto w-full">
            <div className="flex flex-col content-center max-w-md gap-5">
              <h2 className="text-2xl text-white">Who We Are</h2>
              <hr></hr>
              <ReactMarkdown
                className="markdown p-2 list-inside text-left text-white"
                remarkPlugins={[remarkGfm, remarkBreaks]}
              >
                {whoWeAre}
              </ReactMarkdown>
            </div>
            <div className="flex flex-col md:ml-auto content-center gap-5 justify-center items-center">
              <div className="mx-auto">
                <ImageHandler
                  src="public/Logos/main-logo-white.svg"
                  alt="CCFIL logo"
                  width={225}
                  height={58}
                />
              </div>
              <hr></hr>
              <div className="w-40">
                <p className="text-white">
                  Mailing Address 13335 15 Mile Rd., Ste. 244 Sterling Heights,
                  MI 48312
                </p>
              </div>
              <div className="w-40">
                <p className="text-white">{`P(248) 410-2715`}</p>
                <p className="text-white">{`F(586) 573-6397`}</p>
              </div>
              <Button
                className={
                  "transition ease-in-out duration-[500ms] bg-blue1 hover:px-9 hover:py-2 px-10 py-3 rounded-full uppercase mx-auto hover:text-blue1 hover:bg-transparent font-bold border-solid hover:border-blue1 hover:border-4 text-white"
                }
                text={"Contact Us"}
                link={"/contact"}
              />
            </div>
          </div>
          <p className="text-center font-mono text-xs text-white pt-16">
            ©Copyright {new Date().getFullYear()} Community Connections. All Rights Reserved.{" "}
            <Link href="/privacy-policy" className="hover:animate-pulse hover:underline">
              Privacy Policy
            </Link>{" "}
            <Link href="/sms-terms" className="hover:animate-pulse hover:underline">
              SMS Terms
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
