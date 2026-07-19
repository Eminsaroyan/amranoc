"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { auth } from "@/moduls/firebase"; // Ստուգիր firebase.ts ֆայլիդ ճիշտ հասցեն
import { onAuthStateChanged, User } from "firebase/auth";

export default function Header() {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    // Լսում ենք Firebase-ին՝ օգտատիրոջ կարգավիճակը հասկանալու համար
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Որոշում ենք, թե որ էջ տանի user սրբապատկերը սեղմելիս
  const targetLink = user ? "/profile" : "/register";

  return (
    <header className="flex justify-between pl-[7vw] pr-[7vw] pb-[1rem] pt-[1rem] items-center bg-white text-black">
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
          className={`text-[#000] ml-[56px] no-underline underline-offset-8 decoration-[#fd993a] 
          ${isActive("/mermasin") ? "underline" : "hover:underline"}`}
        >
          Մեր մասին
        </Link>
      </nav>

      <div className="flex items-center">
        <div className="p-[12px] cursor-pointer">
          <img
            src="https://amaranoc.am/images/header/globus.svg"
            alt="lang"
            className="w-[20px] h-[20px]"
          />
        </div>

        {/* Դինամիկ հղում դեպի profile կամ register */}
        <Link href={targetLink}>
          <div className="ml-[12px] mr-[12px] p-[12px] cursor-pointer">
            <img 
              src="https://amaranoc.am/images/header/user.svg" 
              alt="User Profile" 
              className="w-[50px] h-[50px] object-contain"
            />
          </div>
        </Link>

        <form className="w-[244px] flex justify-between py-[12px] px-[16px] border border-[rgba(16,22,35,0.2)] rounded-[40px]">
          <input
            className="w-full border-0 text-sm leading-[19.4px] outline-none bg-transparent" 
            placeholder="Որոնում"
          />

          <button type="submit" className="bg-transparent border-0 cursor-pointer">
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