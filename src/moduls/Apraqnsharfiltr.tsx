"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../moduls/firebase";

interface Props {
  filters: any;
  setFilters: any;
}

interface RegionItem {
  label: string;
  value: string;
}

interface AdvantageItem {
  label: string;
  value: string;
}

export default function Apraqnsharfiltr({ filters, setFilters }: Props) {
  const [regionsList, setRegionsList] = useState<RegionItem[]>([]);
  const [advantagesList, setAdvantagesList] = useState<AdvantageItem[]>([]);

  const [count, setCount] = useState<number>(1);
  const [countNight, setCountNight] = useState<number>(0);
  const [selectedCurrency, setSelectedCurrency] = useState<string>(filters.currency || "֏");
  const [selectedOption, setSelectedOption] = useState<string>(filters.nightStay || "Բոլորը");
  const [selectedRooms, setSelectedRooms] = useState<string>(filters.rooms || "Բոլորը");
  const [selectedSan, setSelectedSan] = useState<string>(filters.restroom || "Բոլորը");
  const [selectedPool, setSelectedPool] = useState<string>(filters.pool || "Բոլորը");

  // Firebase-ից տվյալներ գրանցում
  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, "apranq"));
        const data = snapshot.docs.map((doc) => doc.data());

        const regionsSet = new Set<string>();
        const advSet = new Set<string>();

        data.forEach((item: any) => {
          if (item.location?.city) regionsSet.add(item.location.city);
          if (item.advantages?.length) item.advantages.forEach((adv: string) => advSet.add(adv));
        });

        setRegionsList(Array.from(regionsSet).map((r) => ({ label: r, value: r })));
        setAdvantagesList(Array.from(advSet).map((adv) => ({ label: adv, value: adv })));
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  const inc = () => setCount(count + 1);
  const dec = () => setCount(count > 1 ? count - 1 : 1);
  const incNight = () => setCountNight(countNight + 1);
  const decNight = () => setCountNight(countNight > 0 ? countNight - 1 : 0);

  return (
    <div className="w-[320px] p-[16px]">
      <div className="flex flex-col p-[20px] border border-[rgba(16,22,35,0.2)] rounded-[16px]">

        {/* Տարածաշրջան */}
        <div className="mb-[16px]">
          <p className="text-[14px] font-[600] leading-[140%] mb-[8px]">Տարածաշրջան</p>
          <div className="max-h-[160px] overflow-auto flex flex-col gap-[4px]">
            {regionsList.map((region) => (
              <label key={region.value} className="flex items-center gap-[8px] cursor-pointer text-[14px]">
                <input
                  type="checkbox"
                  checked={filters.region.includes(region.value)}
                  onChange={() => {
                    setFilters((prev: any) => {
                      if (prev.region.includes(region.value)) {
                        return { ...prev, region: prev.region.filter((r: string) => r !== region.value) };
                      } else {
                        return { ...prev, region: [...prev.region, region.value] };
                      }
                    });
                  }}
                  className="w-[16px] h-[16px] cursor-pointer"
                />
                {region.label}
              </label>
            ))}
          </div>
          <div className="mt-[8px] h-[1px] bg-[#D1D5DB] w-full"></div>
        </div>

        {/* Առավելություններ */}
        <div className="mb-[16px]">
          <p className="text-[14px] font-[600] leading-[140%] mb-[8px]">Առավելություններ</p>
          <div className="max-h-[160px] overflow-auto flex flex-col gap-[4px]">
            {advantagesList.map((adv) => (
              <label key={adv.value} className="flex items-center gap-[8px] cursor-pointer text-[14px]">
                <input
                  type="checkbox"
                  checked={filters.advantages.includes(adv.value)}
                  onChange={() => {
                    setFilters((prev: any) => {
                      if (prev.advantages.includes(adv.value)) {
                        return { ...prev, advantages: prev.advantages.filter((a: string) => a !== adv.value) };
                      } else {
                        return { ...prev, advantages: [...prev.advantages, adv.value] };
                      }
                    });
                  }}
                  className="w-[16px] h-[16px] cursor-pointer"
                />
                {adv.label}
              </label>
            ))}
          </div>
          <div className="mt-[8px] h-[1px] bg-[#D1D5DB] w-full"></div>
        </div>

        {/* Արժույթ */}
        <div className="mb-[16px]">
          <p className="text-[14px]  font-[600] leading-[140%] mb-[8px]">Արժույթ</p>
          <div className="flex gap-[8px]">
            {["֏", "$", "€", "₽"].map((currency) => (
              <button
                key={currency}
                onClick={() => {
                  setSelectedCurrency(currency);
                  setFilters((prev: any) => ({ ...prev, currency }));
                }}
                className={`px-[12px] py-[8px] rounded-full border transition-colors duration-300 ${
                  selectedCurrency === currency ? "bg-[#101623] text-[#fff] border-black" : "bg-white text-[#101623] border-[rgba(16,22,35,0.2)]"
                }`}
              >
                {currency}
              </button>
            ))}
          </div>
        </div>

        {/* Գին */}
        <div className="mb-[16px] flex gap-[8px]">
          <input
            type="number"
            placeholder="Սկսած"
            className="w-full border px-[12px] py-[8px] rounded-[10px]"
            value={filters.priceFrom}
            onChange={(e) => setFilters((prev: any) => ({ ...prev, priceFrom: e.target.value }))}
          />
          <input
            type="number"
            placeholder="Մինչև"
            className="w-full border px-[12px] py-[8px] rounded-[10px]"
            value={filters.priceTo}
            onChange={(e) => setFilters((prev: any) => ({ ...prev, priceTo: e.target.value }))}
          />
        </div>

        {/* Մարդկանց քանակ */}
        <div className="mb-[16px]">
          <p className="text-[14px] font-[600] leading-[140%] mb-[8px]">Մարդկանց թույլատրելի քանակ</p>
          <div className="flex items-center gap-[8px]">
            <button
              onClick={dec}
              className="w-[36px] h-[36px] flex justify-center items-center bg-white rounded-full border border-[#D1D5DB]"
            >
              -
            </button>
            <div className="w-[48px] h-[36px] flex justify-center items-center border border-[#D1D5DB] rounded-[6px]">
              {count}
            </div>
            <button
              onClick={inc}
              className="w-[36px] h-[36px] flex justify-center items-center bg-white rounded-full border border-[#D1D5DB]"
            >
              +
            </button>
          </div>
        </div>

        {/* Գիշերակացի */}
        <div className="mb-[16px]">
          <p className="text-[14px] font-[600] leading-[140%] mb-[8px]">Գիշերակացի առկայություն</p>
          <div className="flex gap-[8px]">
            {["Բոլորը", "Այո", "Ոչ"].map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelectedOption(option);
                  setFilters((prev: any) => ({ ...prev, nightStay: option }));
                }}
                className={`px-[20px] py-[12px] rounded-full border text-[14px] transition-colors duration-300 ${
                  selectedOption === option ? "bg-[#101623] text-[#fff] border-black" : "bg-white text-[#101623] border-[rgba(16,22,35,0.2)]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Սենյակների քանակ */}
        <div className="mb-[16px]">
          <p className="text-[14px] font-[600] leading-[140%] mb-[8px]">Սենյակների քանակ</p>
          <div className="flex flex-wrap gap-[8px]">
            {["Բոլորը", "1", "2", "3", "4", "5", "6 և ավելի"].map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelectedRooms(option);
                  setFilters((prev: any) => ({ ...prev, rooms: option }));
                }}
                className={`px-[20px] py-[12px] rounded-full border text-[14px] transition-colors duration-300 ${
                  selectedRooms === option ? "bg-[#101623] text-[#fff] border-black" : "bg-white text-[#101623] border-[rgba(16,22,35,0.2)]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Սանհանգույց */}
        <div className="mb-[16px]">
          <p className="text-[14px] font-[600] leading-[140%] mb-[8px]">Սանհանգույցների քանակ</p>
          <div className="flex flex-wrap gap-[8px]">
            {["Բոլորը", "1", "2", "3+"].map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelectedSan(option);
                  setFilters((prev: any) => ({ ...prev, restroom: option }));
                }}
                className={`px-[20px] py-[12px] rounded-full border text-[14px] transition-colors duration-300 ${
                  selectedSan === option ? "bg-[#101623] text-[#fff] border-black" : "bg-white text-[#101623] border-[rgba(16,22,35,0.2)]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Լողավազան */}
        <div className="mb-[16px]">
          <p className="text-[14px] font-[600] leading-[140%] mb-[8px]">Լողավազան</p>
          <div className="flex flex-wrap gap-[8px]">
            {["Բոլորը", "Բաց", "Փակ", "Տաքացվող", "Առանց լողավազանի"].map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelectedPool(option);
                  setFilters((prev: any) => ({ ...prev, pool: option }));
                }}
                className={`px-[20px] py-[12px] rounded-full border text-[14px] transition-colors duration-300 ${
                  selectedPool === option ? "bg-[#101623] text-[#fff] border-black" : "bg-white text-[#101623] border-[rgba(16,22,35,0.2)]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}