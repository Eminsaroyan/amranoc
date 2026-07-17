"use client";

export default function Footone() {
    return (
        <div
            className="flex items-center justify-center py-[120px] px-[20px] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:
                    "url('https://amaranoc.am/images/footer/home-add-application.png')",
            }}
        >
            <div className="w-full max-w-[1200px] p-[120px] h-auto rounded-[20px] overflow-hidden bg-[#ffffff1a] border border-[#ffffff50] backdrop-blur-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
                <div className="flex flex-col  gap-[32px]">

                    <div className="flex items-center gap-[24px] w-full">
                        <div className="h-[1px] flex-1 bg-[#fff]" />

                        <p className="whitespace-nowrap px-[40px] text-[30px]  text-[#fff] text-center">
                            Տեղադրել հայտարարություն
                        </p>

                        <div className="w-[100%] h-[1px] flex-1 bg-[#fff]" />
                    </div>


    
                    <div className="flex flex-col gap-[24px]">

                        <h4 className="text-[#fff] text-center text-[14px] leading-[160%]">
                            Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք
                            կկապնվենք Ձեզ հետ
                        </h4>


                        <form className="grid grid-cols-[1fr_1fr_1fr_auto] gap-[12px]">

                            <div className="flex items-center py-[12px] px-[16px] border border-[#ffffff80] rounded-[10px] bg-[#ffffff08] transition focus-within:border-white">
                                <input
                                    className="w-full outline-none bg-transparent text-[#fff] border-none text-[14px]"
                                    placeholder="Անուն Ազգանուն"
                                    name="fullname"
                                />
                            </div>

                            <div className="flex items-center py-[12px] px-[16px] border border-[#ffffff80] rounded-[10px] bg-[#ffffff08] transition focus-within:border-white">
                                <input
                                    className="w-full outline-none bg-transparent border-none text-[#fff] placeholder:text-white/60 text-[14px]"
                                    placeholder="Հեռախոսահամար"
                                    type="tel"
                                    inputMode="numeric"
                                    name="phone"
                                    onInput={(e) => {
                                        e.currentTarget.value =
                                            e.currentTarget.value.replace(
                                                /[^0-9]/g,
                                                ""
                                            );
                                    }}
                                />
                            </div>


                            <div className="flex items-center py-[12px] px-[16px] border border-[#ffffff80] rounded-[10px] bg-[#ffffff08] transition focus-within:border-white">
                                <input
                                    className="w-full outline-none bg-transparent text-[#fff] border-none placeholder:text-white/60 text-[14px]"
                                    placeholder="Էլ․ հասցե"
                                    name="email"
                                />
                            </div>


                            <button
                                type="submit"
                                className="px-[20px] rounded-[15px] bg-[#fd933a] border-none text-[#fff] font-semibold"
                            >
                                Ուղարկել
                            </button>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}