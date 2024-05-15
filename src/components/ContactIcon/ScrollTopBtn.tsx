'use client'

import { useEffect, useState } from "react";

function ScrollTopBtn() {

    const [scrollY, setScrollY] = useState(0);
    const [isHover, setIsHover] = useState(false)

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`w-[35px] h-[35px] mx-auto mt-4 flex justify-center items-center border-[3px] rounded-md border-mainGreen hover:bg-mainGreen hover:text-white transition-all duration-300 cursor-pointer ${scrollY > 350 ? "opacity-100" : "opacity-0"}`} onClick={handleScrollToTop} onMouseEnter={() => {setIsHover(true)}} onMouseLeave={() => {setIsHover(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-4 h-4 transition-all duration-300 ${isHover ? "text-white" : "text-mainGreen"}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                </svg>
            </div>
    );
}

export default ScrollTopBtn;