// 1. Սահմանում ենք մեկ ծառայության տվյալների տիպը (Type)
interface ServiceItem {
    name: string;
    description: string;
    price: number;
    imgUrl: string;
}

// 2. Սահմանում ենք կոմպոնենտի Props-երի տիպը
interface ServicesListProps {
    services: ServiceItem[] | undefined;
}

export default function ServicesList({ services }: ServicesListProps) {
    // Ստուգում ենք՝ եթե դեռ ծառայություններ չկան կամ դատարկ է, ոչինչ չնկարի
    if (!services || services.length === 0) return null;

    return (
        <div className="w-full mt-[32px]">
            <div className="grid grid-cols-3  gap-[26px]">
                {services.map((service, idx) => (
                    <div 
                        key={idx} 
                        className="flex flex-col bg-white rounded-[16px] overflow-hidden border border-[#1016230d] shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="w-full h-[240px] overflow-hidden">
                            <img 
                                src={service.imgUrl} 
                                alt={service.name} 
                                className="w-full h-full object-cover rounded-[20px]"
                            />
                        </div>

                        <div className="p-[20px] flex flex-col flex-1 justify-between gap-y-[16px]">
                            <div className="flex flex-col gap-y-[8px]">
                                <h4 className="text-[20px] font-bold text-[#101623]">
                                    {service.name}
                                </h4>
                                <p className="text-[15px] text-[#555] font-normal leading-[20px] line-clamp-3">
                                    {service.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-[2px] border-t border-[#10162305]">
                                <div className="flex items-center gap-[6px] text-[#101623] font-[900] text-[18px]">
                                    <span><img src="https://amaranoc.am/images/price.svg" alt="" /></span>
                                    <span>{service.price.toLocaleString()} ֏</span>
                                </div>
                                <button className="px-[20px] py-[8px] border border-[#fd993a] rounded-full text-[14px] font-medium text-[#101623] bg-white cursor-pointer hover:bg-[#10162305] transition-colors">
                                    Ամրագրել
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}