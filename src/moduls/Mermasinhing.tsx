export default function Mermasinhing() {
    return (
        <div className="flex flex-col gap-[64px] py-[32px]">
            <div className="px-[6vw]">
                <div className="flex flex-col space-y-[48px]">
                    <div>
                        <div className="grid gap-[40px] grid-cols-[1.6fr_1fr] items-center">

                            <div className=" max-w-[1200px] aspect-[1.6/1] rounded-[24px] overflow-hidden shadow-sm">
                                <img
                                    src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fhistory.jpg&w=1920&q=75"
                                    alt="about-us-page-image"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>

                            <div className="flex flex-col gap-[32px] w-full max-w-[350px] h-full justify-center px-[100px]">

                                <div className="flex items-center gap-[16px] shrink-0">
                                    <div className="w-[16px] h-[1px] bg-[#000]"></div>
                                    <h2 className="font-armHmk text-black text-[25px] font-[800] whitespace-nowrap uppercase tracking-wide">
                                        Մեր պատմությունը
                                    </h2>
                                    <div className="flex-1 h-[1px] bg-[#000]"></div>
                                </div>

                                <div className="h-[280px]   pr-[16px]  text-left font-[300] text-[19px]  text-gray-800 
                                leading-[22px] space-y-[16px] custom-scrollbar">
                                    <p>
                                        Amaranoc.am - ը հիմնադրվել է 2023 թվականի հուլիսի 1-ին և հենց այդ օրվանից սկսած մինչ օրս մենք չենք դադարում զարմացնել մեր հաճախորդներին և գոհացնել մեր գործընկերներին; Մենք հպարտ ենք, որ այս նախագիծը մեր ողջ թիմի համատեղ ջանքերի արդյունքն է և հանդիսանում է Hasce.am անշարժ գույքի ընկերության ամենակարևոր մաս: Յուրաքանչյուր քայլ ամրապնդել է մեր հիմնադիր սկզբունքները և առաջ է մղել մեզ ձեռք բերել անուն, որին վստահում են բոլորը. Եվ եթե դուք այստեղ եք, հավատացած եղեք, որ ամեն ինչ դեռ առջևում է.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fthird.jpg&w=1920&q=75" alt="" />
        </div>
    );
}