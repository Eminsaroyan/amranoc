import Headermer from "@/moduls/Headermermasin";
import Mermasin from "@/moduls/Mermasin";


export default function Page() {
  return (
    // 2. Արտաքին div-ին տուր relative դասը
    <main className="relative w-full">
      <Headermer />
      {/* 3. Header-ը դիր հենց այստեղ՝ նկարից անմիջապես վերև */}

      {/* 4. Նկարի կոնտեյները */}
      <div className="relative w-full h-screen">
        <img
          src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Ffirst_image.jpg&w=1920&q=75"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 5. Էջի մնացած բովանդակությունը (եթե կա) կգնա նկարից ներքև */}
      <div className="py-12 px-[7vw]">

      </div>
      <Mermasin />

    </main>
  );
}