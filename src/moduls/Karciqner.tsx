export default function Kardisner() {

    const reviews = [
        {
            id: 1,
            name: "Gurgen",
            avatar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocImb0cbRHXkx8_Ed5Xz2wI4Y0JA_vUo3BZ71bQE94uy%3Ds96-c&w=1920&q=75",
            rating: 5,
            text: "Thanks for providing great service 👍 👍"
        },
        {
            id: 2,
            name: "Armine",
            avatar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocIBZ5NVqtkGj6D1bmg_QZJT9Vg1g1bj1-2k1eiAYmj_6yJHmewYHg%3Ds96-c&w=1920&q=75",
            rating: 5,
            text: "🥰 Очень довольна, Они очень помогли мне с выбором дома, и дом был просто замечательным."
        },
        {
            id: 3,
            name: "Aghajanyan Zara",
            avatar: "https://amaranoc.am/_next/image?url=%2Fimages%2Fnot-found-avatar.png&w=1920&q=75",
            rating: 5,
            text: "Ավելի իդեալական չէր կարա լիներ)))"
        },
        {
            id: 4,
            name: "Ani Arzumanyan",
            avatar: "https://amaranoc.am/_next/image?url=%2Fimages%2Fnot-found-avatar.png&w=1920&q=75",
            rating: 5,
            text: "Сдали наш дом имеем отличный результат, очень довольны !!:)"
        }
    ];

    return (
        <div className=" flex flex-col gap-[48px] py-[40px] px-[6vw]">


            <div className="flex items-center gap-[24px] w-full">
                <div className="flex-1 h-[2px] bg-[#9CA3AF]"></div>
                <h2 className="font-armHmk text-black text-[36px] font-medium uppercase tracking-wide whitespace-nowrap">
                    ԿԱՐԾԻՔՆԵՐ
                </h2>
                <div className="flex-1 h-[1px] bg-[#9CA3AF]"></div>
            </div>


            <div className="grid grid-cols-4 gap-[32px] items-start w-full">
                {reviews.map((review) => (
                    <div key={review.id} className="flex flex-col gap-[12px]">

                        <div className="flex items-center gap-[12px]">
                            <div className="w-[40px] h-[40px] rounded-full overflow-hidden flex items-center justify-center shrink-0">
                                {review.id === 1 && review.avatar ? (
                                    <img src={review.avatar} alt={review.name} className="w-full h-full object-cover p-1 bg-[#9CA3AF]" />
                                ) : review.id === 2 ? (
                                    <div className="w-full h-full bg-[#000]"></div>
                                ) : (

                                    <svg className="w-[24px] h-[24px] text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                )}
                            </div>
                            <span className="font-sans font-semibold text-[16px] text-black">
                                {review.name}
                            </span>
                        </div>


                        <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                                <svg key={i} className="w-[18px] h-[18px] text-orange-400 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>

                        <p className="font-sans text-[15px] text-gray-900 leading-[1.5] pr-2">
                            {review.text}
                        </p>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center gap-[24px] mt-[16px] w-full">
                <button className="bg-[#f59331] hover:bg-[#e08224] border-none text-[#fff] font-sans font-medium px-[32px] py-[14px] rounded-[30px] transition-colors duration-200 shadow-sm text-[16px]">
                    Թողնել կարծիք
                </button>

                <button className="text-[#000] bg-[#fff] border-none hover:text-[#374151] font-sans font-medium  text-[16px] transition-colors">
                    Տեսնել բոլորը
                </button>
            </div>

        </div>
    );
}