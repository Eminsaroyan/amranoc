import Bajiner from "./Apraqnsharbajiner";
import Filtr from "./Apraqnsharfiltr";

export default function Apranqashar() {
    return (
        <div className="w-full ">
            <div className="mt-[40px] sm:mt-[32px] md:mt-10">
                <div className="px-[9vw]">
                    <div className="flex">
                        <Filtr />
                        <div className="flex flex-col mr-[24px] ml-[24px]">
                            <Bajiner />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}