import PriceRange from "./PriceRange";

export default function Zexjereq() {
    return (
        <div className="flex flex-col gap-[24px]">

            <div className="flex items-center gap-[20px] pb-[40px]">
                <div className="flex-1 h-[1px] bg-[#101623]/30" />

                <p className="px-[24px] text-[30px] font-[800] text-[#101623]">
                    Թեժ առաջարկներ
                </p>

                <div className="flex-1 h-[1px] bg-[#101623]/30" />
            </div>

            <PriceRange />

        </div>
    );
}