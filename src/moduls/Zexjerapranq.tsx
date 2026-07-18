"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/moduls/firebase";


interface Apranq {
  id: string;
  nkan: string;
  qaxaq: string;
  qanak: number;
  gin: string;
}


export default function Zexjerapranq() {

  const [apranqner, setApranqner] = useState<Apranq[]>([]);


  useEffect(() => {

    async function getApranq() {

      const snapshot = await getDocs(
        collection(db, "apranq")
      );


      const data = snapshot.docs.map((doc) => {

        const item = doc.data();

        return {
          id: doc.id,
          nkan: item.nkar,
          qaxaq: item.location.city,
          qanak: item.qanak.maxPeople,
          gin: item.price.label
        };

      }) as Apranq[];


      setApranqner(data);

    }


    getApranq();

  }, []);



  return (

    <div className="grid grid-cols-3 gap-[12px]">

      {
        apranqner.map((item) => (

          <div
            key={item.id}
            className="w-full h-full cursor-pointer bg-white overflow-hidden shadow-[0px_20px_20px_-10px_rgba(16,22,35,0.15)] grid grid-rows-[1fr_auto] rounded-[16px]"
          >


            <div className="w-full h-full overflow-hidden">

              <img
                src={item.nkan}
                alt={item.qaxaq}
                className="w-full h-full object-cover rounded-[16px]"
              />

            </div>



            <div className="p-[16px] flex flex-col gap-[10px]">


              <div className="flex justify-between">


                <div className="flex items-center gap-[8px] text-[16px] leading-[140%] font-medium text-[#333]">

                  <img
                    src="https://amaranoc.am/images/location-outlined.svg"
                    alt=""
                    className="w-[18px] h-[18px]"
                  />


                  {item.qaxaq}


                </div>




                <div className="flex items-center gap-[8px] text-[16px] leading-[140%] font-medium">


                  <img
                    src="https://amaranoc.am/images/peoples.svg"
                    alt=""
                    className="w-[18px] h-[18px] brightness-0 saturate-100 invert-[62%] sepia-[91%] saturate-[749%] hue-rotate-[345deg]"
                  />


                  <span>
                    {item.qanak}
                  </span>


                </div>


              </div>




              <div className="flex items-center gap-[8px] text-[16px] leading-[140%] font-medium">
                <img
                  src="https://amaranoc.am/images/price.svg"
                  alt=""
                  className="w-[18px] h-[18px]"
                />
                <span className="font-[900] text-[20px]">
                  {item.gin}
                </span>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}