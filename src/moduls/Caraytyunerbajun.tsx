"use client";

import { useState } from "react";

export default function Carayutyunbajin() {
    const [active, setActive] = useState(0);

    const bajinner = [
        {
            title: "Սպասարկում",
            image: "https://api.amaranoc.am/service.svg"
        },
        {
            title: "Շոու",
            image: "https://api.amaranoc.am/services1.svg"
        },
        {
            title: "Միջոցառումներ",
            image: "https://api.amaranoc.am/services2.svg"
        },
        {
            title: "Տեխնիկա",
            image: "https://api.amaranoc.am/services3.svg"
        },
        {
            title: "Օրավարձով գույք",
            image: "https://api.amaranoc.am/services4.svg"
        },
        {
            title: "Այլ",
            image: "https://api.amaranoc.am/services3.svg"
        }
    ];

    return (
        <div className="px-[80px]">

            <div className="w-full overflow-hidden">
                <div className="flex w-full justify-between items-center">
                    {bajinner.map((item, index) => {
                        const isActive = active === index;
                        return (
                            <button
                                key={index}
                                onClick={() => setActive(index)}
                                className={`shrink-0 flex flex-col items-center bg-[#fff] relative pt-[24px] pb-[16px] cursor-pointer min-w-[120px] select-none group transition-all duration-200 gap-[12px]
        ${isActive ? 'border-t-transparent border-l-transparent border-r-transparent border-b-[3px] border-b-[#F28C28] ' : 'border-b-[3px] border-transparent'}`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-[45px] h-[45px] object-contain"
                                />

                                <span className={`text-[16px] font-medium transition-colors duration-200 ${isActive ? 'text-black' : 'text-[#333] group-hover:text-black'}`}>
                                    {item.title}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}