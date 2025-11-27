"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header className="flex justify-between pl-[7vw] pr-[7vw] pb-[1rem] pt-[1rem] items-center">
      <div className="cursor-pointer">
        <Link href="/">
          <img
            src="https://amaranoc.am/images/logo.svg"
            alt="logo"
            className="w-[160px] h-[44px]"
          />
        </Link>
      </div>

      <nav className="flex items-center gap-8">
        <Link
          href="/"
          className={`text-[#000] no-underline underline-offset-8 decoration-[#fd993a] 
          ${isActive("/") ? "underline" : "hover:underline"}`}
        >
          Գլխավոր
        </Link>

        <Link
          href="/zexcher"
          className={`text-[#000] ml-[56px] no-underline underline-offset-8 decoration-[#fd993a] 
          ${isActive("/zexcher") ? "underline" : "hover:underline"}`}
        >
          Զեղչեր
        </Link>

        <Link
          href="/carayutyun"
          className={`text-[#000] ml-[56px] no-underline underline-offset-8 decoration-[#fd993a] 
          ${isActive("/carayutyun") ? "underline" : "hover:underline"}`}
        >
          Ծառայություններ
        </Link>

        <Link
          href="/mermasin"
          className={`text-[#000]  ml-[56px] no-underline underline-offset-8 decoration-[#fd993a] 
          ${isActive("/mermasin") ? "underline" : "hover:underline"}`}
        >
          Մեր մասին
        </Link>
      </nav>

      <div className="flex items-center">
        <div className="p-[12px] cursor-pointer">
          <img
            src="https://amaranoc.am/images/header/globus.svg"
            alt=""
            className="w-[20px] h-[20px]"
          />
        </div>

        <div className="ml-[12px] mr-[12px] p-[12px] cursor-pointer">
          <img src="https://amaranoc.am/images/header/user.svg" alt="" />
        </div>

        <form className="w-[244px] flex justify-between py-[12px] px-[16px] border border-[rgba(16,22,35,0.2)] rounded-[40px]">
          <input
            className="w-full border-0 text-sm leading-[19.4px] outline-none" placeholder="Որոնում"
          />

          <button type="submit" className="bg-[#fff] border-0 cursor-pointer">
            <img
              src="https://amaranoc.am/images/header/search.svg"
              alt=""
              className="w-[16px] h-[16px]"
            />
          </button>
        </form>
      </div>
    </header>
  );
}
