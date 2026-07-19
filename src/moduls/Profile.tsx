"use client";

import { useEffect, useState } from "react";
import { auth } from "@/moduls/firebase"; // Ստուգիր ճիշտ հասցեն
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {

                router.push("/register");
            } else {
                setUser(currentUser);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [router]);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            // Ավտոմատ useEffect-ը կորսա և կտանի /register
        } catch (error) {
            console.error("Դուրս գալուց սխալ տեղի ունեցավ", error);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center font-sans">
                Մշակվում է...
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-[16px] py-[48px]">
            <div className="w-full max-w-[450px] bg-white rounded-[24px] shadow-cardShadow p-[50px] border border-gray-100 flex flex-col gap-[32px]">
                
                {/* Վերնագիր */}
                <div className="flex items-center gap-[14px] w-full">
                    <div className="w-[16px] h-[2px] bg-[#000]"></div>
                    <h2 className="font-armHmk text-black text-[24px] font-medium uppercase tracking-wide whitespace-nowrap">
                        Անձնական էջ
                    </h2>
                    <div className="flex-1 h-[2px] bg-[#000]"></div>
                </div>

                {/* Օգտատիրոջ տվյալները */}
                <div className="flex flex-col gap-[16px] font-sans">
                    <div className="flex flex-col gap-[4px]">
                        <span className="text-[14px] text-gray-500 font-medium">Էլ. հասցե</span>
                        <span className="text-[16px] text-black font-semibold bg-gray-50 px-[16px] py-[12px] rounded-xl border border-gray-100">
                            {user?.email}
                        </span>
                    </div>
                    
                    <div className="flex flex-col gap-[4px]">
                        <span className="text-[14px] text-gray-500 font-medium">Օգտատիրոջ ID</span>
                        <span className="text-[13px] text-gray-700 bg-gray-50 px-[16px] py-[12px] rounded-xl border border-gray-100 break-all font-mono">
                            {user?.uid}
                        </span>
                    </div>
                </div>

                {/* Դուրս գալու կոճակ */}
                <button
                    onClick={handleSignOut}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-sans font-medium py-[14px] rounded-[30px] transition-colors duration-200 shadow-sm text-[16px]"
                >
                    Դուրս գալ հաշվից
                </button>

            </div>
        </div>
    );
}