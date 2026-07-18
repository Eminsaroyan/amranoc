"use client";

import { useState } from "react";

const MIN = 0;
const MAX = 400000;

export default function PriceRange() {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(400000);
    const [currency, setCurrency] = useState("֏");

    return (
        <div className="flex items-center gap-[40px] rounded-[20px] border border-[#d9d9d9] bg-[#fff] p-[24px] shadow-cardShadow">

            {/* Currency */}
            <div className="min-w-[170px]">
                <p className="mb-[16px] text-[16px] font-[600] text-[#101623]">
                    Տարադրամ
                </p>

                <div className="flex gap-[8px]">
                    {["֏", "$", "€", "₽"].map((item) => (
                        <button
                            key={item}
                            onClick={() => setCurrency(item)}
                            className={`flex h-[40px] w-[40px] items-center justify-center rounded-full border transition-all duration-300
            ${currency === item
                                    ? "bg-[#101623] text-[#ffffff] border-[#101623]"
                                    : "bg-[#ffffff] text-[#101623] border-[#d9d9d9]"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            {/* Slider */}
            <div className="flex-1">

                <div className="mb-[14px] flex justify-between">
                    <span className="rounded-full bg-[#fd993a] px-[14px] py-[6px] text-[14px] font-[700] text-[#fff]">
                        {minPrice.toLocaleString()} ֏
                    </span>

                    <span className="rounded-full bg-[#fd993a] px-[14px] py-[6px] text-[14px] font-[700] text-[#fff]">
                        {maxPrice.toLocaleString()} ֏
                    </span>
                </div>

                <div className="relative h-[28px]">

                
                    <div className="absolute top-1/2 h-[3px] w-full -translate-y-1/2 rounded-full bg-[#d9d9d9]" />


                    <div
                        className="absolute top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-[#fd993a]"
                        style={{
                            left: `${(minPrice / MAX) * 100}%`,
                            right: `${100 - (maxPrice / MAX) * 100}%`,
                        }}
                    />


                    <input
                        type="range"
                        min={MIN}
                        max={MAX}
                        step={1000}
                        value={minPrice}
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value <= maxPrice - 1000) {
                                setMinPrice(value);
                            }
                        }}
                        className="absolute h-[28px] w-full appearance-none bg-transparent pointer-events-none"
                        style={{ zIndex: 2 }}
                    />

                    {/* Max */}
                    <input
                        type="range"
                        min={MIN}
                        max={MAX}
                        step={1000}
                        value={maxPrice}
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value >= minPrice + 1000) {
                                setMaxPrice(value);
                            }
                        }}
                        className="absolute h-[28px] w-full appearance-none bg-transparent pointer-events-none"
                        style={{ zIndex: 3 }}
                    />

                </div>

            </div>

            <style jsx>{`
                input[type="range"]::-webkit-slider-thumb {
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #FFF;
                    border: 2px solid #fd993a;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
                    cursor: pointer;
                    pointer-events: auto;
                }

                input[type="range"]::-moz-range-thumb {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: #fff;
                    border: 2px solid #fd993a;
                    cursor: pointer;
                    pointer-events: auto;
                }

                input[type="range"]::-webkit-slider-runnable-track {
                    background: transparent;
                }

                input[type="range"]::-moz-range-track {
                    background: transparent;
                }
            `}</style>
        </div>
    );
}