"use client";

import { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/navigation"; 
import Link from "next/link";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter(); // 2. Ինիցիալիզացնում ենք router-ը

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // 3. Գրանցվելուց հետո միանգամից ուղարկում ենք գլխավոր էջ
            router.push("/");
        } catch (err) {
            if (err instanceof FirebaseError) {
                switch (err.code) {
                    case "auth/email-already-in-use":
                        setError("Այս էլ. հասցեն արդեն գրանցված է։");
                        break;
                    case "auth/invalid-email":
                        setError("Անվավեր էլ. հասցե։");
                        break;
                    case "auth/weak-password":
                        setError("Գաղտնաբառը պետք է լինի առնվազն 6 նիշ։");
                        break;
                    default:
                        setError("Տեղի է ունեցել սխալ։ Խնդրում ենք փորձել կրկին։");
                }
            } else {
                setError("Անհայտ սխալ է տեղի ունեցել։");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-[16px] py-[48px]">
            <div className="w-full max-w-[450px] bg-white rounded-[24px] shadow-cardShadow p-[50px] border border-gray-100 flex flex-col gap-[24px]">

                <div className="flex items-center gap-[14px] w-full">
                    <div className="w-[16px] h-[2px] bg-[#000]"></div>
                    <h2 className="font-armHmk text-black text-[28px] font-medium uppercase tracking-wide whitespace-nowrap">
                        Գրանցում
                    </h2>
                    <div className="flex-1 h-[2px] bg-[#000]"></div>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 text-[14px] p-[12px] rounded-xl border border-red-200 text-center font-sans">
                        {error}
                    </div>
                )}

                <form onSubmit={handleRegister} className="flex flex-col gap-[16px]">
                    <div className="flex flex-col gap-[8px]">
                        <label className="font-sans text-[14px] text-gray-700 font-medium">
                            Էլ. հասցե
                        </label>
                        <input
                            type="email"
                            required
                            placeholder="example@mail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-[16px] py-[12px] border border-[#e2e8f0] rounded-xl font-sans text-[15px] focus:outline-none focus:border-[#f59331] transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-[8px]">
                        <label className="font-sans text-[14px] text-gray-700 font-medium">
                            Գաղտնաբառ
                        </label>
                        <input
                            type="password"
                            required
                            placeholder="******"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-[16px] py-[12px] border border-[#e2e8f0] rounded-xl font-sans text-[15px] focus:outline-none focus:border-[#f59331] transition-colors"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#f59331] hover:bg-[#e08224] text-[#fff] border-none font-sans font-medium py-[14px] rounded-[30px] transition-colors duration-200 shadow-sm text-[16px] mt-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {loading ? "Մշակվում է..." : "Գրանցվել"}
                    </button>
                </form>

                <div className="text-center font-sans text-[14px] text-gray-600 mt-[8px]">
                    Արդեն ունե՞ք հաշիվ։{" "}
                    <Link href="/login">
                        <button className="text-black font-medium underline underline-offset-[16px] hover:text-gray-700 cursor-pointer bg-transparent border-0">
                            Մուտք գործել
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}