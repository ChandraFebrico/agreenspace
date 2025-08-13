"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { faMouse } from '@fortawesome/free-solid-svg-icons/faMouse';

export default function FirstDisplayMobile() {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            // Adjust fade speed: divide scrollY by a bigger number for slower fade
            const newOpacity = Math.max(1 - window.scrollY / 300, 0);
            setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="transition-opacity duration-100"
            style={{ opacity }}
        >
            {/* First Grid */}
            <div className="flex justify-center p-8 mt-12">
                <div className="grid grid-flow-col grid-rows-3 gap-2 max-w-4xl ">
                    {/* Row 1: Large typing heading */}
                    <div className="row-span-1 flex justify-center">
                        <p className="text-4xl font-empirez leading-[1.3]">
                            <span className="inline-block overflow-hidden whitespace-nowrap animate-typing1">
                                <span className="inline-block border-r-2 border-black pr-1 animate-cursor">
                                    We craft <a className="font-bold text-sky-600 underline decoration-sky-500/30">spaces</a>,
                                </span>
                            </span>
                            <br />
                            <span className="inline-block overflow-hidden whitespace-nowrap animate-typing2">
                                <span className="inline-block border-r-2 border-lime-600 pr-1 animate-cursor">
                                    you <a className="font-bold text-lime-600 underline decoration-lime-500/30">plant</a> joy
                                </span>
                            </span>
                        </p>
                    </div>

                    {/* Row 2: Subtitle */}
                    <div className="row-span-1 text-white font-hikasami p-2 text-4xl flex items-center mt-36">
                        <h1>Discover our product below.</h1>
                    </div>

                   
                </div>
            </div>

        </div>
    );
}
