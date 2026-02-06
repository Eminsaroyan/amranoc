interface ApranqProps {
  nkar: string;
  qaxaq: string;
  qanak: number; 
  gin: string;
}

export default function Apranq({ nkar, qaxaq, qanak, gin}: ApranqProps) {
  return (
    <div className="w-[325px] h-[350px] cursor-pointer  bg-white overflow-hidden shadow-[0px_20px_20px_-10px_rgba(16,22,35,0.15)] grid grid-rows-[1fr_auto] rounded-[16px]">

      <div className="w-full h-full overflow-hidden">
        <img
          src={nkar}
          alt={qaxaq}
          className="w-full h-full object-cover rounded-[16px]"
        />
      </div>

      <div className="p-[16px] flex flex-col gap-[10px]">

        <div className="flex justify-between">
          <div className="flex items-center gap-[8px] text-[16px] leading-[140%] font-medium text-[#333]">
            <img
              src="https://amaranoc.am/images/location-outlined.svg"
              alt=""
              className="w-[18px] h-[18px]"
            />
            {qaxaq}
          </div>

          <div className="flex items-center gap-[8px] text-[16px] leading-[140%] font-medium">
            <img
              src="https://amaranoc.am/images/peoples.svg"
              alt=""
              className="w-[18px] h-[18px] brightness-0 saturate-100 invert-[62%] sepia-[91%] saturate-[749%] hue-rotate-[345deg]"
            />
            <span>{qanak}</span>
          </div>
        </div>

        {/* Գին */}
        <div className="flex items-center gap-[8px] text-[16px] leading-[140%] font-medium">
          <img
            src="https://amaranoc.am/images/price.svg"
            alt=""
            className="w-[18px] h-[18px]"
          />
          <span className="font-[900] text-[20px]">{gin}</span>
        </div>
      </div>
    </div>
  );
}
