"use client";

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../moduls/firebase";
import Bajiner from "./Apraqnsharbajiner";
import Filtr from "./Apraqnsharfiltr";
import Apranq from "./Apranq";

export default function Apranqashar() {
  const [apranq, setApranq] = useState<any[]>([]);
  const [filteredApranq, setFilteredApranq] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    pool: "Բոլորը",
    people: 1,
    nightStay: "Բոլորը",
    rooms: "Բոլորը",
    restroom: "Բոլորը",
    region: [] as string[],
    advantages: [] as string[],
    currency: "֏",
    priceFrom: "",
    priceTo: "",
  });

  useEffect(() => {
    const fetchApranq = async () => {
      try {
        const snapshot = await getDocs(collection(db, "apranq"));
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setApranq(data);
        setFilteredApranq(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchApranq();
  }, []);

  useEffect(() => {
    let data = [...apranq];

    // Filter by pool
    if (filters.pool !== "Բոլորը") {
      data = data.filter((item) => item.pool === filters.pool);
    }

    // Filter by people
    if (filters.people) {
      data = data.filter((item) => item.qanak?.maxPeople >= filters.people);
    }

    // Filter by rooms
    if (filters.rooms !== "Բոլորը") {
      if (filters.rooms === "6 և ավելի") {
        data = data.filter((item) => item.rooms >= 6);
      } else {
        data = data.filter((item) => item.rooms == Number(filters.rooms));
      }
    }

    // Filter by region
    if (filters.region.length > 0) {
      data = data.filter((item) => filters.region.includes(item.location.city));
    }

    // Filter by advantages
    if (filters.advantages.length > 0) {
      data = data.filter((item) =>
        filters.advantages.every((adv) => item.advantages?.includes(adv))
      );
    }

    setFilteredApranq(data);
  }, [filters, apranq]);

  if (loading) return <p>Տվյալները բեռնվում են...</p>;

  return (
    <div className="w-full">
      <div className="mt-[40px] sm:mt-[32px] md:mt-10">
        <div className="px-[9vw]">
          <div className="flex">
            {/* Ֆիլտրերի կոմպոնենտը ստանում է filters և setFilters */}
            <Filtr filters={filters} setFilters={setFilters} />

            <div className="flex flex-col mr-6 ml-6">
              <Bajiner />

              <div className="pt-6">
                <p className="text-lg pb-6 leading-[140%] font-semibold">
                  Լավագույն առաջարկներ
                </p>

                <div className="grid grid-cols-3 gap-6">
                  {filteredApranq.map((item) => (
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