import Image from "next/image";

export default function Foottwo() {
    return (
        <footer className="bg-[#101623] flex flex-col gap-[32px] pt-[24px]">
            <div className="flex flex-col gap-[32px] px-[12px] text-center">

                <div className="flex items-center gap-[20px] w-full">
                    <div className="h-[1px] flex-1 bg-white/40" />

                    <p className="px-[20px] w-max text-[36px] font-[1000] text-[#fff]">
                        Կոնտակտներ
                    </p>

                    <div className="h-[1px] flex-1 bg-white/40" />
                </div>


                <div className="flex flex-wrap justify-center items-center gap-y-[24px] gap-x-[40px] px-[4px]">

                    <div className="flex items-center space-x-[8px]">
                        <div
                            className="w-[16px] h-[16px] "
                            style={{
                                backgroundImage:
                                    "url('https://amaranoc.am/images/social/phone.svg')",
                            }}
                        />
                        <span className="font-armHmk text-[16px] pl-[8px] font-[800] text-[#fff]">
                            041-611-611
                        </span>
                    </div>

                    <div className="flex items-center space-x-[8px]">
                        <div
                            className="w-[16px] h-[16px] "
                            style={{
                                backgroundImage:
                                    "url('https://amaranoc.am/images/social/mail.svg')",
                            }}
                        />
                        <span className="font-armHmk text-[16px]  pl-[8px] text-[#fff]  uppercase">
                            amaranoc.info@gmail.com
                        </span>
                    </div>

                    <div className="flex items-center space-x-[8px]">
                        <div
                            className="w-[16px] h-[16px] "
                            style={{
                                backgroundImage:
                                    "url('https://amaranoc.am/images/social/instagram.svg')",
                            }}
                        />
                        <span className="font-armHmk text-[16px] pl-[8px] text-[#fff] uppercase">
                            amaranoc.am
                        </span>
                    </div>

                    <div className="flex items-center space-x-[8px]">
                        <div
                            className="w-[16px] h-[16px] "
                            style={{
                                backgroundImage:
                                    "url('https://amaranoc.am/images/social/facebook.svg')",
                            }}
                        />
                        <span className="font-armHmk text-[16px] pl-[8px] text-[#fff] uppercase">
                            amaranoc.am
                        </span>
                    </div>

                    <div className="flex items-center space-x-[8px]">
                        <div
                            className="w-[16px] h-[16px] "
                            style={{
                                backgroundImage:
                                    "url('https://amaranoc.am/images/location-outlined.svg')",
                            }}
                        />
                        <span className="font-armHmk text-[16px] pl-[8px] text-[#fff] uppercase">
                            Թումանյան 5
                        </span>
                    </div>

                </div>
                <span className="mx-auto cursor-pointer font-montserrat text-[14px] text-[#fff] underline">
                    Գաղտնիության քաղաքականություն
                </span>
            </div>
            <div className="flex gap-x-[12px] w-fit items-center mx-auto">
                <span className="mx-auto font-montserrat text-[14px] text-[#fff]">
                    Ամառանոց ՍՊԸ
                </span>
                <div className="w-[1px] h-[12px] bg-[#fff]"></div>
                <span className="mx-auto font-montserrat text-[14px] text-[#fff]">
                    Amaranoc LLC
                </span>
                <div className="w-[1px] h-[12px] bg-[#fff]"></div>
                <span className="mx-auto font-montserrat text-[14px] text-[#fff]">
                    Амараноц OOO
                </span>
            </div>
            <div className="relative w-full h-[80px] mt-[80px]">

                <div className="relative w-full h-[80px]">
                    <Image
                        src="https://amaranoc.am/_next/image?url=%2Fimages%2Ffooter%2Ffooter-background.png&w=1920&q=75"
                        alt="footer-image"
                        fill
                        className="object-cover object-center"
                        sizes="100vw"
                    />
                </div>
            </div>
        </footer>
    );
}