"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    // Ստուգում ենք՝ արդյոք «Մեր մասին» էջում ենք
    const isAboutPage = pathname === "/mermasin";

    return (
        <header
            className={`flex justify-between pl-[7vw] pr-[7vw] pb-[1rem] pt-[1rem] items-center transition-all duration-300
        ${isAboutPage
                    ? "absolute top-[0] left-[0] right-[0] z-50 text-[#fff] bg-gradient-to-b from-black/40 to-transparent"
                    : "relative bg-white text-black"
                }`}
        >
            <div className="cursor-pointer">
                <Link href="/">
                    <img
                        // Եթե «Մեր մասին» էջն է, օգտագործում ենք light (սպիտակ) լոգոն, հակառակ դեպքում՝ սովորականը
                        src={
                            isAboutPage
                                ? "https://amaranoc.am/images/light-logo.svg"
                                : "https://amaranoc.am/images/logo.svg"
                        }
                        alt="logo"
                        className="w-[160px] h-[44px] object-contain"
                    />
                </Link>
            </div>

            <nav className="flex items-center">
                <Link
                    href="/"
                    className={`no-underline underline-offset-8 decoration-[#fd993a] transition-colors
          ${isActive("/") ? "underline text-[#fd993a]" : ""} 
          ${!isActive("/") && (isAboutPage ? "text-[#fff] hover:text-white/80" : "text-black hover:text-black/70")}`}
                >
                    Գլխավոր
                </Link>

                <Link
                    href="/zexcher"
                    className={`ml-[56px] no-underline underline-offset-8 decoration-[#fd993a] transition-colors
          ${isActive("/zexcher") ? "underline text-[#fd993a]" : ""}
          ${!isActive("/zexcher") && (isAboutPage ? "text-[#fff] hover:text-white/80" : "text-black hover:text-black/70")}`}
                >
                    Զեղչեր
                </Link>

                <Link
                    href="/carayutyun"
                    className={`ml-[56px] no-underline underline-offset-8 decoration-[#fd993a] transition-colors
          ${isActive("/carayutyun") ? "underline text-[#fd993a]" : ""}
          ${!isActive("/carayutyun") && (isAboutPage ? "text-[#fff] hover:text-white/80" : "text-black hover:text-black/70")}`}
                >
                    Ծառայություններ
                </Link>

                <Link
                    href="/mermasin"
                    className={`ml-[56px] no-underline underline-offset-8 decoration-[#fd993a] transition-colors
          ${isActive("/mermasin") ? "underline text-[#fd993a]" : ""}
          ${!isActive("/mermasin") && (isAboutPage ? "text-[#fff] hover:text-white/80" : "text-black hover:text-black/70")}`}
                >
                    Մեր մասին
                </Link>
            </nav>

            <div className="flex items-center">
                <div className={`p-[12px] cursor-pointer ${isAboutPage ? "brightness-0 invert" : ""}`}>
                    <img
                        src="https://amaranoc.am/images/header/globus.svg"
                        alt="lang"
                        className="w-[20px] h-[20px]"
                    />
                </div>

                {/* Օգտագործողի իկոնան - Ուղղված չափսերով */}
                <div className={`ml-[12px] mr-[12px] p-[10px] cursor-pointer ${isAboutPage ? "brightness-0 invert" : ""}`}>
                    <img
                        src="https://amaranoc.am/images/header/user.svg"
                        alt="user"
                    
                        className="w-[50px] h-[50px] object-contain"
                    />
                </div>

                <form
                    className={`w-[244px] flex justify-between py-[12px] px-[16px] border rounded-[40px] transition-all
            ${isAboutPage ? "border-white/30 bg-white/10 backdrop-blur-sm" : "border-[rgba(16,22,35,0.2)] bg-transparent"}`}
                >
                    <input
                        className={`w-full border-0 text-sm leading-[19.4px] outline-none bg-transparent 
              ${isAboutPage ? "text-white placeholder-white/70" : "text-black placeholder-gray-500"}`}
                        placeholder="Որոնում"
                    />

                    <button type="submit" className={`bg-transparent border-0 cursor-pointer ${isAboutPage ? "brightness-0 invert" : ""}`}>
                        <img
                            src="https://amaranoc.am/images/header/search.svg"
                            alt="search"
                            className="w-[16px] h-[16px]"
                        />
                    </button>
                </form>
            </div>
        </header>
    );
}