import Zexjereq from "./Zexjerereq";
import Zexjerqart from "./Zexjerqart";

const discounts = [
    {
        percent: "-15%",
        title: "Զեղչ կախված ամրագրման օրերի քանակից",
        text: "Ստացիր 5-15% զեղչ կատարելով ամրագրում 3-ից մինչև 20 օր։",
    },
    {
        percent: "-10%",
        title: "Ամենահայտնի Reel-ը սոցիալական հարթակում",
        text: "Վիդեո տարբերակով ներկայացրու քո լավագույն օրերից մեկը amaranoc.am-ի առանձնատներից մեկում և ստացիր զեղչ։",
    },
    {
        percent: "-5%",
        title: "Զեղչ յուրաքանչյուր 3-րդ այցի համար",
        text: "Իրականացրու բազմաթիվ ամրագրումներ և յուրաքանչյուր 3-րդ ամրագրման համար ստացիր 5% զեղչ։",
    },
];

export default function Discounts() {
    return (
        <main className="flex flex-col pb-[8px]">
            <div className="px-[153px]">

                <div className="flex items-center gap-[20px] pb-[40px]">
                    <div className="flex-1 h-[1px] bg-[#101623]/30" />

                    <p className="px-[24px] text-[30px] font-[800] text-[#101623]">
                        Հատուկ զեղչեր
                    </p>

                    <div className="flex-1 h-[1px] bg-[#101623]/30" />
                </div>


                <div className="grid grid-cols-3 gap-[20px]">

                    {discounts.map((item, index) => (
                        <div
                            key={index}
                            className="
                                relative overflow-hidden
                                flex flex-col justify-between
                                h-[190px]
                                p-[28px]
                                rounded-[20px]
                                shadow-cardShadow
                                bg-cover bg-center
                                group
                                transition-all duration-300
                            
                            "
                            style={{
                                backgroundImage:
                                    "url('https://amaranoc.am/images/raffle/special-discounts-image.jpg')",
                            }}
                        >

                            {/* overlay */}
                            <div className="absolute inset-0 bg-[#00000055]" />


                            <div className="relative z-[1]">

                                <p className="font-anton text-[90px] leading-[90px] text-[#ffffff]">
                                    {item.percent}
                                </p>

                            </div>


                            <div className="relative z-[1] flex flex-col gap-[10px]">

                                <p className="text-[#ffffff] text-[15px] font-[700] leading-[22px]">
                                    {item.title}
                                </p>


                                <p className="text-[#ffffffcc] text-[14px] font-[400] leading-[20px]">
                                    {item.text}
                                </p>

                            </div>


                        </div>
                    ))}

                </div>

                <Zexjerqart />
                <Zexjereq />
            </div>
        </main>
    );
}