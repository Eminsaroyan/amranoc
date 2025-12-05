import Bajinermek from "./Apraqnsharbajinererku";

export default function Bajiner() {
    return (
        <div className="pl-[16px] pr-[16px]">
            <div className="flex gap-x-[8px] ">
                <button className="px-[24px] py-[16px]  border border-(#101623) rounded-[40px] flex justify-center items-center cursor-pointer bg-[#fff] hover:bg-[#02303514]">
                    <p className="text-[14px] font-[600] leading-[140%] mr-[10px]">Քարտեզ</p>
                    <img src="https://amaranoc.am/images/map.svg" alt="" className="w-[16px] h-[16px]" />
                </button>
                <button className="flex items-center px-[19px] py-[16px] cursor-pointer border-(#101623) rounded-[40px] bg-[#fff] hover:bg-[#02303514]">
                    <img src="https://amaranoc.am/images/calendar.svg" alt=""  className="w-[16px] h-[16px]"  />
                </button>
            </div>
            <div className="mt-[20px]">
                <Bajinermek />
            </div>
        </div>
    )
}