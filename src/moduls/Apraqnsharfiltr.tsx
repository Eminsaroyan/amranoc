"use client";

import { useState } from "react";


export default function Filtr() {
    const regions = [
        { id: "dil", label: "Դիլիջան 118" },
        { id: "caxk", label: "Ծաղկաձոր 97" },
        { id: "er", label: "Երևան 16" },
        { id: "garn", label: "Գառնի 15" },
        { id: "dzor", label: "Ձորաղբյուր 13" },
        { id: "sevan", label: "Սևան 13" },
        { id: "ashtarak", label: "Աշտարակ 13" },
        { id: "jermuk", label: "Ջերմուկ 13" },
        { id: "abov", label: "Աբովյան 11" },
        { id: "byur", label: "Բյուրական 11" },
        { id: "jrve", label: "Ջրվեժ 10" },
        { id: "step", label: "Ստեփանավան 10" },
        { id: "van", label: "Վանաձոր 9" },
        { id: "arz", label: "Արզնի 8" },
        { id: "norhach", label: "Նոր Հաճն 8" },
        { id: "gyul", label: "Գյուլագարակ 8" },
        { id: "ijev", label: "Իջևան 8" },
        { id: "ejm", label: "Էջմիածին 7" },
        { id: "ptgh", label: "Պտղնի 7" },
        { id: "zov", label: "Զովունի 7" },
        { id: "bjni", label: "Բջնի 7" },
        { id: "aparan", label: "Ապարան 6" },
        { id: "hraz", label: "Հրազդան 6" },
        { id: "qasakh", label: "Քասախ 5" },
        { id: "dsegh", label: "Դսեղ 5" },
        { id: "hagh", label: "Հաղարծին 5" },
        { id: "arinj", label: "Առինջ 4" },
        { id: "arzakan", label: "Արզական 4" },
        { id: "eghv", label: "Եղվարդ 4" },
        { id: "ohan", label: "Օհանավան 4" },
        { id: "argel", label: "Արգել 3" },
        { id: "byuregh", label: "Բյուրեղավան 3" },
        { id: "hank", label: "Հանքավան 3" },
        { id: "agarak", label: "Ագարակ 3" },
        { id: "karbi", label: "Կարբի 3" },
        { id: "akunq", label: "Ակունք 2" },
        { id: "norgeg", label: "Նոր Գեղի 2" },
        { id: "nurnus", label: "Նուռնուս 2" },
        { id: "aghver", label: "Աղվերան 2" },
        { id: "goxt", label: "Գողթ 2" },
        { id: "tegh", label: "Թեղենիք 2" },
        { id: "oshak", label: "Օշական 2" },
        { id: "bazm", label: "Բազմաղբյուր 2" },
        { id: "parakar", label: "Փարաքար 1" },
        { id: "artash", label: "Արտաշատ 1" },
        { id: "qarash", label: "Քարաշամբ 1" },
        { id: "norart", label: "Նոր Արտամետ 1" },
        { id: "mrgash", label: "Մրգաշեն 1" },
        { id: "fantan", label: "Ֆանտան 1" },
        { id: "drakht", label: "Դրախտիկ 1" },
        { id: "parpi", label: "Փարպի 1" },
        { id: "argavand", label: "Արգավանդ 0" },
        { id: "aygest", label: "Այգեստան 0" },
        { id: "shahum", label: "Շահումյան 0" },
        { id: "alap", label: "Ալափարս 0" },
        { id: "mayak", label: "Մայակովսկի 0" },
        { id: "kanak", label: "Քանաքեռավան 0" },
        { id: "hacavan", label: "Հացավան 0" },
        { id: "hagpat", label: "Հաղպատ 0" },
        { id: "odzun", label: "Օձուն 0" },
        { id: "gavar", label: "Գավառ 0" },
        { id: "aghck", label: "Աղձք 0" },
        { id: "geghard", label: "Գեղարդ 0" },
        { id: "kharberd", label: "Խարբերդ 0" },
    ];

    const arvelutyun = [
        { id: "shogebagh", label: "Շոգեբաղնիք" },
        { id: "jacuzzi", label: "Ջակուզի" },
        { id: "billiard", label: "Բիլիարդ" },
        { id: "tabletennis", label: "Սեղանի թենիս" },
        { id: "outdoorpavilion", label: "Բացօթյա տաղավար" },
        { id: "indoorpavilion", label: "Փակ տաղավար" },
        { id: "mangal", label: "Մանղալ" },
        { id: "tonir", label: "Թոնիր" },
        { id: "summerkitchen", label: "Ամառային խոհանոց" },
        { id: "musicplayer", label: "Նվագարկիչ" },
        { id: "swing", label: "Ճոճանակ" },
        { id: "cinema", label: "Կինոթատրոն" },
        { id: "wifi", label: "WiFi" },
        { id: "smarttv", label: "Smart հեռուստացույց" },
        { id: "airconditioner", label: "Օդորակիչ" },
        { id: "greenarea", label: "Կանաչապատ այգի" },
        { id: "dishes", label: "Սպասք" },
        { id: "washingmachine", label: "Լվացքի մեքենա" },
        { id: "dishwasher", label: "Աման լվացող մեքենա" },
        { id: "parking", label: "Կայանատեղի" },
        { id: "separateentrance", label: "Առանձին մուտք" },
        { id: "fireplace", label: "Բուխարի" },
        { id: "hairdryer", label: "Վարսահարդարիչ" },
        { id: "playstation", label: "Playstation" },
        { id: "volleyball", label: "Վոլեյբոլ" },
        { id: "bonfire", label: "Խարույկ" },
        { id: "loungers", label: "Տապչաններ" },
        { id: "boardgames", label: "Սեղանի խաղեր" },
        { id: "playground", label: "Մանկական խաղահրապարակ" },
        { id: "trampoline", label: "Բատուտ" },
        { id: "bar", label: "Բար" }
    ];


    const [selectedCurrency, setSelectedCurrency] = useState("֏");
    const [selectedOption, setSelectedOption] = useState("Բոլորը");
    const options = ["Բոլորը", "Այո", "Ոչ"];
    const [selectedOpt, setSelectedOpti] = useState("Բոլորը")
    const [selectedSan, setSelectedSan] = useState("Բոլորը");

    const [selectedPool, setSelectedPool] = useState("Բոլորը");
    const option = ["Բոլորը", "1", "2", "3+"];

    const [count, setCount] = useState(1);

    const inc = () => setCount(count + 1);
    const dec = () => {
        if (count > 1) setCount(count - 1);
    };

    const [plusa, setplusavor] = useState(0);
    const plyus = () => setplusavor(plusa + 1);
    const minus = () => {
        if (plusa > 0) setplusavor(plusa - 1);
    };

    return (
        <div className="w-[320px] px-[16px]">
            <div className="h-full">
                <div className="flex flex-col p-[20px] border border-[rgba(16,22,35,0.2)] rounded-[16px]">
                    <div className="min-h-[160px]">
                        <div className="flex flex-col">
                            <p className="text-[14px] leading-[140%] font-[600]">Տարածաշրջան</p>
                            <div className="pr-[8px] overflow-auto flex flex-col max-h-[160px] mt-[16px]">
                                {regions.map((item) => (
                                    <label
                                        key={item.id}
                                        htmlFor={item.id}
                                        className="flex items-center gap-[8px] cursor-pointer text-[14px]"
                                    >
                                        <input
                                            type="checkbox"
                                            id={item.id}
                                            className="w-[11px] h-[18px] mt-[7px] mb-[7px] cursor-pointer"
                                        />
                                        {item.label}
                                    </label>
                                ))}
                            </div>
                            <div className="mt-[8px] h-[1px] bg-[#D1D5DB] w-full"></div>

                        </div>
                    </div>
                    <div className="mt-[16px] mb-[16px]">
                        <div className="flex justify-between mb-[16px]">
                            <p className="text-[14px] font-[600] leading-[140%] mb-[8px]">Արժեք</p>
                            <div className="flex gap-[7px]">
                                {["֏", "$", "€", "₽"].map((currency) => (
                                    <button
                                        key={currency}
                                        onClick={() => setSelectedCurrency(currency)}
                                        className={`flex justify-center items-center w-[36px] h-[36px] rounded-full border border-[#e5e7eb] transition-colors duration-300 
                  ${selectedCurrency === currency
                                                ? "bg-[#000] text-[#fff] border-black"
                                                : "bg-[#fff]  text-white border-secondary"
                                            }`}
                                    >
                                        {currency}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex  space-y-[8px]  relative rounded-lg">
                            <input
                                type="text"
                                placeholder="Սկսաց"
                                className="w-full border border-[rgba(16,22,35,0.2)] rounded-[10px] px-[12px] py-[8px]"
                            />
                            <span className="text-gray-500 ml-[10px] mr-[10px] flex items-center">-</span>
                            <input
                                type="text"
                                placeholder="Մինչև"
                                className="w-full border border-[rgba(16,22,35,0.2)] rounded-[10px] px-[12px] py-[8px]"
                            />
                        </div>
                        <div className="mt-[8px] h-[1px] bg-[#D1D5DB] w-full"></div>

                    </div>
                    <div className="flex flex-col space-x-[12px] mb-[16px]">
                        <p className="text-[14px] font-[600] leading-[140%] mb-[8px]">Մարդկանց թույլատրելի<br /> քանակ</p>
                        <div className="flex ">

                            <button
                                onClick={dec}
                                className="w-[36px] h-[36px] flex justify-center items-center bg-[#fff] rounded-full border border-[#D1D5DB]"
                            >
                                -
                            </button>

                            <div className="w-[48px] h-[36px] ml-[10px] mr-[10px] flex justify-center items-center border border-[#D1D5DB] rounded-[6px]">
                                {count}
                            </div>

                            <button
                                onClick={inc}
                                className="w-[36px] h-[36px] flex justify-center items-center bg-[#fff] rounded-full border border-[#D1D5DB]"
                            >
                                +
                            </button>
                        </div>
                        <div className="mt-[8px] h-[1px] bg-[#D1D5DB] w-full"></div>

                    </div>

                    <div className="flex flex-col space-y-[8px]">
                        <p className="text-[14px] font-[600] leading-[140%] mb-[8px]">Գիշերակացի առկայություն</p>

                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                {["Բոլորը", "Այո"].map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => setSelectedOption(option)}
                                        className={`px-[40px] py-[12px] mr-[12px] rounded-full border text-[14px] transition-colors duration-300 ${selectedOption === option
                                            ? "bg-[#101623] text-[#fff] border-black"
                                            : "bg-[#fff] text-[#101623] border-[rgba(16,22,35,0.2)]"
                                            }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => setSelectedOption("Ոչ")}
                                    className={`px-[26px] py-[12px] mt-[12px] mb-[16px] rounded-full border text-[14px] transition-colors duration-300 ${selectedOption === "Ոչ"
                                        ? "bg-[#101623] text-[#fff] border-black"
                                        : "bg-[#fff] text-[#101623] border-[rgba(16,22,35,0.2)]"
                                        }`}
                                >
                                    Ոչ
                                </button>
                            </div>
                        </div>
                        <div className="mt-[8px] h-[1px] bg-[#D1D5DB] w-full"></div>

                    </div>

                    <div className="flex flex-col space-x-[12px] mt-[16px] mb-[16px]">
                        <p className="text-[14px] font-[600] leading-[140%] mb-[8px]">Մարդկանց թույլատրելի<br /> քանակը գիշերակացով</p>
                        <div className="flex ">

                            <button
                                onClick={minus}
                                className="w-[36px] h-[36px] flex justify-center items-center bg-[#fff] rounded-full border border-[#D1D5DB]"
                            >
                                -
                            </button>

                            <div className="w-[48px] h-[36px] ml-[10px] mr-[10px] flex justify-center items-center border border-[#D1D5DB] rounded-[6px]">
                                {plusa}
                            </div>

                            <button
                                onClick={plyus}
                                className="w-[36px] h-[36px] flex justify-center items-center bg-[#fff] rounded-full border border-[#D1D5DB]"
                            >
                                +
                            </button>
                        </div>
                        <div className="mt-[8px] h-[1px] bg-[#D1D5DB] w-full"></div>

                    </div>

                    <div className="flex flex-col space-y-[8px]">
                        <p className="text-[14px] font-[600] leading-[140%] mb-[8px]">Սենյակների քանակ</p>

                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                {["Բոլորը", "1", "2"].map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => setSelectedOpti(option)}
                                        className={`px-[20px] py-[12px] mr-[10px] rounded-full border text-[14px] transition-colors duration-300 ${selectedOpt === option
                                            ? "bg-[#101623] text-[#fff] border-black"
                                            : "bg-[#fff] text-[#101623] border-[rgba(16,22,35,0.2)]"
                                            }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>

                            <div className="flex mt-[10px]">
                                {["3", "4", "5"].map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => setSelectedOpti(option)}
                                        className={`px-[20px] py-[12px] mr-[10px] rounded-full border text-[14px] transition-colors duration-300 ${selectedOpt === option
                                            ? "bg-[#101623] text-[#fff] border-black"
                                            : "bg-[#fff] text-[#101623] border-[rgba(16,22,35,0.2)]"
                                            }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                            <div className="flex mt-[10px]">
                                {["6 և ավելի"].map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => setSelectedOpti(option)}
                                        className={`px-[20px] py-[12px] rounded-full border text-[14px] transition-colors duration-300 ${selectedOpt === option
                                            ? "bg-[#101623] text-[#fff] border-black"
                                            : "bg-[#fff] text-[#101623] border-[rgba(16,22,35,0.2)]"
                                            }`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>

                        </div>
                        <div className="mt-[8px]  h-[1px] bg-[#D1D5DB] w-full"></div>
                    </div>

                    <div className="mt-[16px]">
                        <p className="text-[14px] font-[600] leading-[140%] mb-[8px]">Սանհանգույցների քանակ</p>

                        <div className="flex gap-[8px] mb-[8px]">
                            {["Բոլորը", "1", "2"].map((option) => (
                                <button
                                    key={option}
                                    onClick={() => setSelectedSan(option)}
                                    className={`px-[20px] py-[12px] rounded-full border transition-colors duration-300 ${selectedSan === option
                                        ? "bg-[#101623] text-[#fff] border-black"
                                        : "bg-[#fff] text-[#101623] border-[rgba(16,22,35,0.2)]"
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>

                        <div className="flex gap-[8px]">
                            {["3+"].map((option) => (
                                <button
                                    key={option}
                                    onClick={() => setSelectedSan(option)}
                                    className={`px-[20px] py-[12px] rounded-full border transition-colors duration-300 ${selectedSan === option
                                        ? "bg-[#101623] text-[#fff] border-black"
                                        : "bg-[#fff] text-[#101623] border-[rgba(16,22,35,0.2)]"
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>

                        <div className="mt-[8px] h-[1px] bg-[#D1D5DB] w-full"></div>
                    </div>
                    <div className="mt-[16px]">
                        <p className="text-[14px] font-[600] leading-[140%] mb-[8px]">Լողավազան</p>


                        <div className="flex gap-[8px] mb-[8px]">
                            {["Բոլորը", "Բաց"].map((option) => (
                                <button
                                    key={option}
                                    onClick={() => setSelectedPool(option)}
                                    className={`px-[20px] py-[12px] rounded-full border transition-colors duration-300 ${selectedPool === option
                                        ? "bg-[#101623] text-[#fff] border-black"
                                        : "bg-[#fff] text-[#101623] border-[rgba(16,22,35,0.2)]"
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>

                        <div className="flex gap-[8px]">
                            {["Փակ", "Տաքացվող"].map((option) => (
                                <button
                                    key={option}
                                    onClick={() => setSelectedPool(option)}
                                    className={`px-[20px] py-[12px] rounded-full border transition-colors duration-300 ${selectedPool === option
                                        ? "bg-[#101623] text-[#fff] border-black"
                                        : "bg-[#fff] text-[#101623] border-[rgba(16,22,35,0.2)]"
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>

                        <div className="flex gap-[8px]">
                            {["Առանց լողավազանի"].map((option) => (
                                <button
                                    key={option}
                                    onClick={() => setSelectedPool(option)}
                                    className={`px-[20px] py-[12px] mt-[10px] rounded-full border transition-colors duration-300 ${selectedPool === option
                                        ? "bg-[#101623] text-[#fff] border-black"
                                        : "bg-[#fff] text-[#101623] border-[rgba(16,22,35,0.2)]"
                                        }`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        <div className="mt-[8px] h-[1px] bg-[#D1D5DB] w-full"></div>
                    </div>
                    <div className="flex flex-col mt-[16px]">
                        <p className="text-[14px] leading-[140%] font-[600]">Առավելություններ</p>
                        <div className="pr-[8px] overflow-auto flex flex-col max-h-[160px] mt-[16px]">
                            {arvelutyun.map((item) => (
                                <label
                                    key={item.id}
                                    htmlFor={item.id}
                                    className="flex items-center gap-[8px] cursor-pointer text-[14px]"
                                >
                                    <input
                                        type="checkbox"
                                        id={item.id}
                                        className="w-[11px] h-[18px] mt-[7px] mb-[7px] cursor-pointer"
                                    />
                                    {item.label}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}