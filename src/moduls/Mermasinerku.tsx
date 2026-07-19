export default function Mermasinerku() {
    return (
        <div className="flex flex-col gap-[64px] py-[40px]">
            <div className="px-[6vw]">
                <div className="flex flex-col space-y-[48px]">
                    <div>
                        <div className="grid gap-[40px] grid-cols-[1fr_1.6fr] items-center">

                            {/* Նկարի բլոկ */}

                            {/* Տեքստի աջ բլոկը */}
                            <div className="flex flex-col gap-[32px] w-full h-full justify-center px-4">

                                {/* Վերնագրի հատված */}
                                <div className="flex items-center gap-[16px] shrink-0">
                                    <div className="w-[16px] h-[1px] bg-[#000]"></div>
                                    <h2 className="font-armHmk text-black text-[32px] font-[800] whitespace-nowrap uppercase tracking-wide">
                                        Մեր թիմը
                                    </h2>
                                    <div className="flex-1 h-[1px] bg-[#000]"></div>
                                </div>

                                {/* Տեքստային հատված՝ իսկական overflow-ով և custom սքրոլբարով */}
                                <div className="h-[280px]  overflow-y-auto pr-[24px] text-left font-[300] text-[19px]  text-gray-800 leading-[1.5] space-y-[16px] custom-scrollbar">
                                    <p>
                                        Շուրջ 20 մասնագետներից բաղկացած մեր պրոֆեսիոնալ թիմն իր աշխատանքն իրականացնում է փայլուն հմտությամբ՝ բավարարելու անգամ ամենաքմահաճ հաճախորդի կարիքները: Շնորհիվ ոլորտում ունեցած մեր անգնահատելի փորձի, մեր նպատակն է անմոռանալի պահեր ստեղծել մեր հյուրերի համար: Մենք պարզապես չենք ստեղծում ժամանց, մենք ստեղծում ենք պատմություններ, և յուրաքանչյուր առանձնատուն (որոնք դուք տեսնում եք մեր կայքում) այդ պատմության մի մասն է: Օրեցօր ընդլայնվելով՝ մենք ձգտում ենք նորագույն չափանիշներ սահմանել ոլորտում և որ ամենակարևորն է մենք օր օրի հստակ ու կայուն քայլերով շարժվում ենք առաջ՝ բարելավելով մեր երկրում սպասարկման ոլորտը՝ շքեղ առանձնատները հասանելի դարձնելով բոլորին:
                                    </p>
                                </div>
                            </div>
                            <div className="w-full aspect-[1.4/1] rounded-[24px] overflow-hidden shadow-sm">
                                <img
                                    src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fteam.jpg&w=1920&q=75"
                                    alt="about-us-page-image"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fsecond.jpg&w=1920&q=75" alt="" />
        </div>
    );
}