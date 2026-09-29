'use client';
import React, { useState, useRef } from "react";
import {NavLink, NavListLink} from "@/components/navigation/nav-links"
import { aboutList, servicesList } from "../../lib/data/data";

export default function Nav({mini}:{mini:boolean}) {
  const [about, setAbout] = useState(false);
  const [services, setServices] = useState(false)
  const Navref = useRef();
  const [navbar, setNavbar] = useState(false);
  function handleAboutMouseover (){
    setAbout(true);
    setServices(false);
  };
  function handleServicesMouseover(){
    setAbout(false);
    setServices(true);
  };
  function handleMainNavButton(){
    (navbar == false ? setNavbar(true): setNavbar(false))
  }
  return (
      <nav className={`z-90 flex nav:justify-center w-full nav:w-auto right-0 top-0 nav:-mt-4 pb-4 ${mini == true ? "fixed bg-white bg-opacity-75 mr-auto pl-4 rounded-md ":""} `}>
        <div className="flex flex-col-reverse nav:flex-row flex-grow justify-end">
                <button className="fixed z-90 nav:hidden bg-white px-2 border-2 rounded-md border-blue1 focus:border-2 focus:animate-pulse right-0 top-0 mr-5 mt-4" onMouseDown={handleMainNavButton}>
                  {navbar ? (
                    <svg xmlns="http://www.w3.org/2000/svg"className="w-6 h-6 border-solid text-blue2"viewBox="0 0 20 20"fill="currentColor">
                      <path fillRule="evenodd"d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"clipRule="evenodd"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 border-solid border-1 text-blue2"fill="none"viewBox="0 0 24 24"stroke="currentColor"strokeWidth={2}>
                      <path strokeLinecap="round"strokeLinejoin="round"d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                  )}
                </button>
            <div ref={Navref} className={`${navbar ? 'fixed right-5 top-16 z-80 flex flex-col w-max max-w-[calc(100vw-2.5rem)] max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-md bg-blue1 dark:bg-blue2 px-6 py-4 shadow-xl' : 'hidden'} nav:static nav:block nav:w-auto nav:max-w-none nav:max-h-none nav:overflow-visible nav:bg-transparent nav:p-0 nav:shadow-none nav:mx-0`}>
              <ul  className="flex flex-col gap-1 text-left nav:flex-row nav:gap-6 nav:pr-10 nav:text-center">
                <NavLink path={`/`} text={`Home`}/>
                <NavListLink items={aboutList} path={`/about`} text={`About`} onMouseLeave={()=>setAbout(false)} onMouseOver={handleAboutMouseover} onClick={()=>setAbout(true)} listState={about}/>
                <NavListLink items={servicesList} path={`/services`} text={`Services`} onMouseLeave={()=>setServices(false)} onMouseOver={handleServicesMouseover} onClick={()=>setServices(true)} listState={services}/>
                <NavLink path={`/outcomes`} text={`Outcomes`}/>
                <NavLink path={`/cause`} text={`Cause`}/>
                <NavLink path={`/contact`} text={`Contact Us`}/>
              </ul>
          </div>
          </div>
          </nav>
          
  );
};
