"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/moduls/firebase"; // Ստուգիր firebase.ts ֆայլիդ ճիշտ հասցեն
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Firebase-ի միջոցով մուտքի ստուգում
      await signInWithEmailAndPassword(auth, email, password);
      

      router.push("/");
    } catch (err: any) {
      // Սխալների մշակում
      if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password" || err.code === "auth/invalid-credential") {
        setError("Սխալ էլ. փոստ կամ գաղտնաբառ:");
      } else {
        setError("Տեղի ունեցավ սխալ: Խնդրում ենք փորձել կրկին:");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center bg-[#F9FAFB] px-[16px]">
      <div className="max-w-[450px] w-full space-y-[32px] bg-[#fff] p-[50px] border border-[#eeeee] rounded-[20px] shadow-sm">
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#212121]">Մուտք գործել</h2>
          <p className="mt-[8px] text-sm text-[#757575]">
            Չունե՞ք հաշիվ.{" "}
            <Link href="/register" className="text-[#fd993a] hover:underline font-medium">
              Գրանցվել
            </Link>
          </p>
        </div>

        <form className="mt-[32px] space-y-[24px]" onSubmit={handleLogin}>
          {error && (
            <div className="bg-[#FFEBEE] text-[#E53935] p-3 rounded-lg text-sm font-medium border border-[#FFCDD2]">
              {error}
            </div>
          )}

          <div className="space-y-[16px]">
            <div>
              <label className="block text-sm font-medium text-[#616161] mb-[4px]">
                Էլ. փոստ (Email)
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-[16px] py-[12px] border border-[#E0E0E0] rounded-[10px] outline-none focus:border-[#fd993a] text-sm transition-colors text-[#000]"
                placeholder="example@mail.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#616161] mb-[4px]">
                Գաղտնաբառ (Password)
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-[16px] py-[12px] border border-[#E0E0E0] rounded-[10px] outline-none focus:border-[#fd993a] text-sm transition-colors text-black"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-[12px] px-[16px] border border-transparent rounded-[40px] text-sm font-medium text-[#fff] bg-[#fd993a] hover:bg-[#e0842e] transition-colors cursor-pointer disabled:bg-[#BDBDBD]"
            >
              {loading ? "Ստուգվում է..." : "Մուտք"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}