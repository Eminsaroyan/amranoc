"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

import Bajiner from "./Apraqnsharbajiner";
import Filtr from "./Apraqnsharfiltr";
import Apranq from "./Apranq";

export interface ApranqType {
  id: number;
  nkar: string;
  location: { city: string };
  qanak: { maxPeople: number };
  price: { label: string };
  // կարող ես ավելացնել մնացած ֆիլդերը ըստ ցանկության
}

export default function Apranqashar() {
  const [apranq, setApranq] = useState<ApranqType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApranq = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "apranq")); // Ձեր Firestore collection-ի անունը
        const data: ApranqType[] = querySnapshot.docs.map((doc) => ({
          id: doc.data().id,
          nkar: doc.data().nkar,
          location: doc.data().location,
          qanak: doc.data().qanak,
          price: doc.data().price,
        }));
        setApranq(data);
      } catch (error) {
        console.error("Error fetching apranq:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApranq();
  }, []);

  if (loading) return <p className="p-4">Տվյալները բեռնվում են...</p>;

  return (
    <div className="w-full">
      <div className="mt-[40px] sm:mt-[32px] md:mt-10">
        <div className="px-[9vw]">
          <div className="flex">
            <Filtr />
            <div className="flex flex-col mr-[24px] ml-[24px]">
              <Bajiner />

              <div className="pt-[24px]">
                <p className="text-[16px] pb-[24px] leading-[140%] font-[600]">
                  Լավագույն առաջարկներ
                </p>

                <div className="grid grid-cols-3 gap-[24px]">
                  {apranq.map((item) => (
                    <Apranq
                      key={item.id}
                      nkar={item.nkar}
                      qaxaq={item.location.city}
                      qanak={item.qanak.maxPeople}
                      gin={item.price.label}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}