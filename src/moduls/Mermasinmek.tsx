export default function Mermasinmek() {
    return (
        <div className="flex flex-col gap-[64px] py-[32px]">
            <div className="px-[6vw]">
                <div className="flex flex-col space-y-[48px]">
                    <div>
                        <div className="grid gap-[40px] grid-cols-[1.6fr_1fr] items-center">
                            
                            <div className=" max-w-[1200px] aspect-[1.6/1] rounded-[24px] overflow-hidden shadow-sm">
                                <img
                                    src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fabout_us.jpg&w=1920&q=75"
                                    alt="about-us-page-image"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>

                            <div className="flex flex-col gap-[32px] w-full max-w-[350px] h-full justify-center px-[100px]">
                                
                                {/* Վերնագրի հատված */}
                                <div className="flex items-center gap-[16px] shrink-0">
                                    <div className="w-[16px] h-[1px] bg-[#000]"></div>
                                    <h2 className="font-armHmk text-black text-[32px] font-[800] whitespace-nowrap uppercase tracking-wide">
                                        Մեր մասին
                                    </h2>
                                    <div className="flex-1 h-[1px] bg-[#000]"></div>
                                </div>

                                {/* Տեքստային հատված՝ իսկական overflow-ով և custom սքրոլբարով */}
                                <div className="h-[280px]  overflow-y-auto pr-[16px] text-left font-[300] text-[19px]  text-gray-800 
                                leading-[24px] space-y-[16px] custom-scrollbar">
                                    <p>
                                        Amaranoc.am-ը վստահության, հավատարմության և գերազանցության ձգտման պատմություն է: 
                                        Հանդիսանալով ամառանոցների վարձակալության ոլորտում համար մեկ ընկերությունը, մենք ձեզ 
                                        առաջարկում ենք շքեղ առանձնատների, քոթեջների, վիլլաների և ամառանոցների լայն ու բազմազան ընտրություն;
                                        Մեր հիմնական առաքելությունն է սպասարկել մեր հաճախորդներին ամենաբարձր մակարդակով՝ 
                                        ստեղծելով հարմարավետության և շքեղության մթնոլորտ մեր յուրաքանչյուր առանձնատանը: Մեր 
                                        նվիրվածությունը և մանրուքների հանդեպ ուշադրությունը երաշխավորում է հիշարժան հանգիստ 
                                        Հայաստանի ամենահիասքանչ ամառանոցներում:
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}