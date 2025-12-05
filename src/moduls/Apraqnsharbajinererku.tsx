"use client";
import { useRef, useState, useEffect } from "react";

const items = [
  { icon: "https://api.amaranoc.am/home.svg", label: "Առանձնատներ" },
  { icon: "https://api.amaranoc.am/frame_house.svg", label: "Frame houses" },
  { icon: "https://api.amaranoc.am/cabins.svg", label: "Տնակներ" },
  { icon: "https://api.amaranoc.am/close_pool.svg", label: "Փակ լողավազան" },
  { icon: "https://api.amaranoc.am/far_from_noise.svg", label: "Աղմուկից հեռու" },
  { icon: "https://api.amaranoc.am/view.svg", label: "Շքեղ տեսարան" },
  { icon: "https://api.amaranoc.am/nobel.svg", label: "Պահանջված" },
  { icon: "https://api.amaranoc.am/along_lake.svg", label: "Լճի ափին" },
  { icon: "https://api.amaranoc.am/along_river.svg", label: "Գետի ափին" },
  { icon: "https://api.amaranoc.am/pavilion.svg", label: "Տաղավար" },
  { icon: "https://api.amaranoc.am/hotel.svg", label: "Հյուրանոցներ" },
  { icon: "https://api.amaranoc.am/designed.svg", label: "Դիզայն" },
  { icon: "https://api.amaranoc.am/new.svg", label: "Նոր" },
  { icon: "https://api.amaranoc.am/house.svg", label: "Բնակարաններ" },
];

export default function Carousel() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir === "left" ? -1000 : 1000,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll);
    return () => {
      if (el) el.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center">
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-[0] z-10 bg-[#fff] border-[1px] shadow-lg rounded-full w-[40px] h-[40px] flex items-center justify-center"
        >
          ◀
        </button>
      )}

      <div
        ref={scrollRef}
        className="scroll-hide flex overflow-x-auto gap-[40px] px-[0] py-[20px] w-[950px]">
        {items.map((item, i) => (
          <div
            key={i}
            className="cursor-pointer flex flex-col justify-center items-center min-w-max">
            <img src={item.icon} className="w-[50px] h-[50px]" />
            <span className="text-sm font-medium mt-[8px] text-center">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-[0] z-10 bg-[#fff] border-[1px] shadow-lg rounded-full w-[40px] h-[40px] flex items-center justify-center"
        >
          ▶
        </button>
      )}
    </div>
  );
}
