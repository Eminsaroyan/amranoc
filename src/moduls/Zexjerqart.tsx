"use client";

import { useState } from "react";
import Image from "next/image";


const prices = [50000, 60000, 70000, 80000, 90000, 100000];

export default function Zexjerqart() {
    const [selectedPrice, setSelectedPrice] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-2 gap-[24px] mt-[96px]">
            <div className="flex flex-col gap-[16px] bg-[#f5f5f5] py-[24px] px-[16px] rounded-[16px] shadow-cardShadow">
                <div className="pb-[12px] border-b border-b-[#fd993a]">
                    <p className="text-[30px] leading-[120%] font-[400] font-anton text-secondary uppercase">
                        Պատվիրի՛ր <span className="text-[#fd993a]">Նվեր քարտ</span><br />Քո կամ ընկերերիդ համար
                    </p>
                </div>
                <span className="text-secondary text-[16.5px]">Բաց մի թող մեր բացառիկ զեղչի քարտերը։ Եթե պլանավորում ես քո հաջորդ արձակուրդը՝ ընկերներիդ կամ ընտանիքիդ անդամների հետ, մեր զեղչային քարտերը առաջարկում են անգերազանցելի խնայողություններ ամառանոցների և ծառայությունների լայն տեսականիով: Ընտրիր զեղչի չափը քարտի վրա։</span>
            </div>
            <div className="flex flex-col items-center gap-[32px] p-[24px] rounded-[16px] shadow-cardShadow bg-[linear-gradient(105deg,_#fd993a,_#e15b1e)]">

                <div className="relative w-[236px] h-[64px]">
                    <Image
                        src="https://amaranoc.am/images/white-logo.svg"
                        alt="white-logo"
                        fill
                        className="object-contain"
                        sizes="236px"
                    />
                </div>


                <div className="grid grid-cols-3 gap-[12px]">
                    {prices.map((price) => (
                        <button
                            key={price}
                            type="button"
                            onClick={() => setSelectedPrice(price)}
                            className={`w-[150px] py-[12px] rounded-[40px] border transition-all duration-300 font-[700]
            ${selectedPrice === price
                                    ? "bg-[#ffffff] text-[#fd993a] border-[#ffffff]"
                                    : "bg-transparent text-[#ffffff] border-[#ffffff] hover:bg-[#ffffff22]"
                                }
          `}
                        >
                            <div className="flex items-center justify-center gap-[4px] text-[16px]">
                                <span>{price.toLocaleString()}</span>
                                <span>֏</span>
                            </div>
                        </button>
                    ))}
                </div>
                <button
                    type="button"
                    className="py-[12px] px-[24px] rounded-[40px] border border-[#fd993a] bg-[#fd993a] text-[#ffffff] transition-all duration-300 hover:bg-[#e15b1e] hover:border-[#e15b1e] active:scale-[0.98] "
                >
                    <p className="text-[14px] font-[700] text-[#ffffff]">
                        Պատվիրել
                    </p>
                </button>

            </div>

        </div>
    );
}