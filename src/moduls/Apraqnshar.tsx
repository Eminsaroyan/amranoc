import Apranq from "./Apranq";
import Bajiner from "./Apraqnsharbajiner";
import Filtr from "./Apraqnsharfiltr";

export const apranq = [
  {
    id: 1,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1746091956940--0.06433901863412572image.webp&w=1920&q=75",
    location: { city: "Ծաղկաձոր" },
    qanak: { maxPeople: 8 },
    price: { value: 45000, currency: "AMD", label: "45,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 8,
    senyakqanak: { value: 4, label: "4" },
    sanhanguycqanak: { value: 4, label: "4" },
    loxavazan: { hasPool: false, type: "none", heated: false, label: "Առանց լողավազանի" },
    amenities: [
      "shoghebaghniq",
      "pak_taghavar",
      "mangal",
      "wifi",
      "spasq",
      "kayanateghi",
      "arandzin_mutq"
    ]
  },
  {
    id: 2,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1732616461236--0.6541537220629399image.webp&w=1920&q=75",
    location: { city: "Ձորաղբյուր" },
    qanak: { maxPeople: 20 },
    price: { value: 130000, currency: "AMD", label: "130,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 10,
    senyakqanak: { value: 3, label: "3" },
    sanhanguycqanak: { value: 2, label: "2" },
    loxavazan: { hasPool: true, type: "closed", heated: true, label: "Փակ, Տաքացվող" },
    amenities: [
      "shoghebaghniq",
      "jacuzzi",
      "bac_taghavar",
      "mangal",
      "chochanak",
      "wifi",
      "smart_tv",
      "odorakich",
      "kanachapat_aygi",
      "spasq",
      "kayanateghi",
      "arandzin_mutq",
      "buxari"
    ]
  },
  {
    id: 3,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1745150373552--0.7442038614385824image.webp&w=1920&q=75",
    location: { city: "Ծաղկաձոր" },
    qanak: { maxPeople: 30 },
    price: { value: 130000, currency: "AMD", label: "130,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 20,
    senyakqanak: { value: 6, label: "6 և ավելի" },
    sanhanguycqanak: { value: 3, label: "3+" },
    loxavazan: { hasPool: true, type: "closed", heated: true, label: "Փակ, Տաքացվող" },
    amenities: [
      "shoghebaghniq",
      "bilyard",
      "pak_taghavar",
      "mangal",
      "tonir",
      "amarayin_khohanoc",
      "nvagarkich",
      "wifi",
      "kanachapat_aygi",
      "spasq",
      "kayanateghi",
      "arandzin_mutq",
      "buxari"
    ]
  },
  {
    id: 4,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1763196873802--0.32875657677659165image.webp&w=1920&q=75",
    location: { city: "Ծաղկաձոր" },
    qanak: { maxPeople: 20 },
    price: { value: 90000, currency: "AMD", label: "90,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 14,
    senyakqanak: { value: 6, label: "6 և ավելի" },
    sanhanguycqanak: { value: 3, label: "3+" },
    loxavazan: { hasPool: true, type: "closed", heated: true, label: "Փակ, Տաքացվող" },
    amenities: [
      "bac_taghavar",
      "mangal",
      "amarayin_khohanoc",
      "nvagarkich",
      "wifi",
      "kanachapat_aygi",
      "spasq"
    ]
  },
  {
    id: 5,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1761895988754--0.7427375376572039image.webp&w=1920&q=75",
    location: { city: "Ծաղկաձոր" },
    qanak: { maxPeople: 3 },
    price: { value: 45000, currency: "AMD", label: "45,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 3,
    senyakqanak: { value: 1, label: "1" },
    sanhanguycqanak: { value: 1, label: "1" },
    loxavazan: { hasPool: false, type: "none", heated: false, label: "Առանց լողավազանի" },
    amenities: ["bac_taghavar", "wifi", "smart_tv", "odorakich", "spasq"]
  },
  {
    id: 6,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1745226138943--0.01421026746821985image.webp&w=1920&q=75",
    location: { city: "Աբովյան" },
    qanak: { maxPeople: 22 },
    price: { value: 80000, currency: "AMD", label: "80,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 6,
    senyakqanak: { value: 3, label: "3" },
    sanhanguycqanak: { value: 2, label: "2" },
    loxavazan: { hasPool: true, type: "both", heated: true, label: "Բաց, Փակ, Տաքացվող" },
    amenities: [
      "shoghebaghniq",
      "pak_taghavar",
      "mangal",
      "tonir",
      "amarayin_khohanoc",
      "chochanak",
      "wifi",
      "smart_tv",
      "kanachapat_aygi",
      "spasq",
      "kharuyk"
    ]
  },
  {
    id: 7,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1762686772282--0.7753343924665224image.webp&w=1920&q=75",
    location: { city: "Օհանավան" },
    qanak: { maxPeople: 25 },
    price: { value: 80000, currency: "AMD", label: "80,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 6,
    senyakqanak: { value: 2, label: "2" },
    sanhanguycqanak: { value: 3, label: "3+" },
    loxavazan: { hasPool: true, type: "closed", heated: true, label: "Փակ, Տաքացվող" },
    amenities: [
      "pak_taghavar",
      "mangal",
      "amarayin_khohanoc",
      "chochanak",
      "wifi",
      "kanachapat_aygi",
      "spasq",
      "lvacqi_meqena",
      "kayanateghi"
    ]
  },
  {
    id: 8,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1705829500856--0.9156560389221753image.webp&w=1920&q=75",
    location: { city: "Ծաղկաձոր" },
    qanak: { maxPeople: 20 },
    price: { value: 150000, currency: "AMD", label: "150,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 14,
    senyakqanak: { value: 5, label: "5" },
    sanhanguycqanak: { value: 3, label: "3+" },
    loxavazan: { hasPool: true, type: "closed", heated: true, label: "Փակ, Տաքացվող" },
    amenities: [
      "shoghebaghniq",
      "jacuzzi",
      "pak_taghavar",
      "mangal",
      "amarayin_khohanoc",
      "wifi",
      "spasq",
      "playstation",
      "sexani_xagher"
    ]
  },
  {
    id: 9,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1712326262412--0.25440242535580326image.webp&w=1920&q=75",
    location: { city: "Նոր Հաճն" },
    qanak: { maxPeople: 25 },
    price: { value: 130000, currency: "AMD", label: "130,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 8,
    senyakqanak: { value: 4, label: "4" },
    sanhanguycqanak: { value: 2, label: "2" },
    loxavazan: { hasPool: false, type: "none", heated: false, label: "Առանց լողավազանի" },
    amenities: [
      "shoghebaghniq",
      "sexani_tenis",
      "bac_taghavar",
      "pak_taghavar",
      "mangal",
      "amarayin_khohanoc",
      "chochanak",
      "wifi",
      "odorakich",
      "kanachapat_aygi",
      "spasq",
      "kayanateghi",
      "buxari"
    ]
  },
  {
    id: 10,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1764083598166--0.5211209354807873image.webp&w=1920&q=75",
    location: { city: "Բջնի" },
    qanak: { maxPeople: 25 },
    price: { value: 80000, currency: "AMD", label: "80,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 9,
    senyakqanak: { value: 3, label: "3" },
    sanhanguycqanak: { value: 3, label: "3+" },
    loxavazan: { hasPool: true, type: "closed", heated: true, label: "Փակ, Տաքացվող" },
    amenities: [
      "shoghebaghniq",
      "pak_taghavar",
      "mangal",
      "amarayin_khohanoc",
      "chochanak",
      "wifi",
      "kanachapat_aygi",
      "spasq",
      "lvacqi_meqena",
      "kayanateghi",
      "kharuyk"
    ]
  },
  {
    id: 11,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1769510761035--0.6909717618359343image.webp&w=1920&q=75",
    location: { city: "Դիլիջան" },
    qanak: { maxPeople: 12 },
    price: { value: 35000, currency: "AMD", label: "35,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 4,
    senyakqanak: { value: 1, label: "1" },
    sanhanguycqanak: { value: 1, label: "1" },
    loxavazan: { hasPool: false, label: "Առանց լողավազանի" },
    amenities: [
      "shoghebaghniq",
      "pak_taghavar",
      "mangal",
      "wifi",
      "spasq",
      "kayanateghi",
      "arandzin_mutq"
    ]
  },
  {
    id: 12,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1768899027639--0.5116342310295525image.webp&w=1920&q=75",
    location: { city: "Նուռնուս" },
    qanak: { maxPeople: 24 },
    price: { value: 80000, currency: "AMD", label: "80,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 5,
    senyakqanak: { value: 1, label: "1" },
    sanhanguycqanak: { value: 2, label: "2" },
    loxavazan: { hasPool: true, type: "open", heated: true, label: "Բաց, Տաքացվող" },
    amenities: [
      "shoghebaghniq",
      "pak_taghavar",
      "mangal",
      "nvagarqich",
      "wifi",
      "smar-herustacuyc",
      "spasq",
      "kayanateghi",
    ]
  },
  {
    id: 13,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1768485493875--0.11421439312574466image.webp&w=1920&q=75",
    location: { city: "Բազմաղբյուր" },
    qanak: { maxPeople: 25 },
    price: { value: 80000, currency: "AMD", label: "80,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 10,
    senyakqanak: { value: 5, label: "5" },
    sanhanguycqanak: { value: 3, label: "3+" },
    loxavazan: { hasPoll: true, type: "open", heated: false, label: "Բաց" },
    amenities: [
      "bac_taghavar",
      "mangal",
      "chochanak",
      "wifi",
      "smart_tv",
      "kanachapat_aygi",
      "spasq",
      "kayanateghi",
      "buxari",
      "kharuyk",
      "batut"
    ]
  },
  {
    id: 14,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1768298297154--0.3429359699627581image.webp&w=1920&q=75",
    location: { city: "Հաղարծին" },
    qanak: { maxPeople: 8 },
    price: { value: 60000, currency: "AMD", label: "60,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 8,
    senyakqanak: { value: 4, label: "4" },
    sanhanguycqanak: { value: 1, label: "1" },
    loxavazan: { hasPoll: false, label: "Առանց լողավազանի" },
    amenities: [
      "jacuzzi",
      "mangal",
      "wifi",
      "smart_tv",
      "spasq",
      "kayanateghi",
    ]
  },
  {
    id: 15,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1770378889173--0.6904224472275469image.webp&w=1920&q=75",
    location: { city: "Պտղնի" },
    qanak: { maxPeople: 25 },
    price: { value: 70000, currency: "AMD", label: "70,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 10,
    senyakqanak: { value: 5, label: "5" },
    sanhanguycqanak: { value: 2, label: "2" },
    loxavazan: { hasPoll: false, label: "Առանց լողավազանի" },
    amenities: [
      "sexani_tenis",
      "pak_taxavar",
      "mangal",
      "wifi",
      "smart_tv",
      "spasq",
      "kayanateghi",
      "playstation"
    ]
  },
  {
    id: 16,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1767006351333--0.2275965997522813image.webp&w=1920&q=75",
    location: { city: "Գեղարդ" },
    qanak: { maxPeople: 8 },
    price: { value: 80000, currency: "AMD", label: "80,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 8,
    senyakqanak: { value: 3, label: "3" },
    sanhanguycqanak: { value: 1, label: "1" },
    loxavazan: { hasPoll: false, label: "Առանց լողավազանի" },
    amenities: [
      "pak_taghavar",
      "mangal",
      "chochanak",
      "wifi",
      "smart_tv",
      "spasq",
      "kayanateghi",
    ]
  },
  {
    id: 17,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1768897370620--0.19061674669363327image.webp&w=1920&q=75",
    location: { city: "Օհանավան" },
    qanak: { maxPeople: 6 },
    price: { value: 60000, currency: "AMD", label: "60,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 6,
    senyakqanak: { value: 3, label: "3" },
    sanhanguycqanak: { value: 2, label: "2" },
    loxavazan: { hasPoll: false, label: "Առանց լողավազանի" },
    amenities: [
      "mangal",
      "odorakich",
      "wifi",
      "smart_tv",
      "nvagarkich",
      "spasq",
      "kayanateghi",
      "kharuyk",
    ]
  },
  {
    id: 18,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1768485493875--0.11421439312574466image.webp&w=1920&q=75",
    location: { city: "Բազմաղբյուր" },
    qanak: { maxPeople: 25 },
    price: { value: 80000, currency: "AMD", label: "80,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 10,
    senyakqanak: { value: 5, label: "5" },
    sanhanguycqanak: { value: 3, label: "3+" },
    loxavazan: { hasPoll: true, type: "open", heated: false, label: "Բաց" },
    amenities: [
      "bac_taghavar",
      "mangal",
      "chochanak",
      "wifi",
      "smart_tv",
      "kanachapat_aygi",
      "spasq",
      "kayanateghi",
      "buxari",
      "kharuyk",
      "batut"
    ]
  },
  {
    id: 19,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1767004992542--0.01686626293412985image.webp&w=1920&q=75",
    location: { city: "Գեղարդ" },
    qanak: { maxPeople: 6 },
    price: { value: 60000, currency: "AMD", label: "60,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 6,
    senyakqanak: { value: 2, label: "2" },
    sanhanguycqanak: { value: 1, label: "1" },
    loxavazan: { hasPoll: false, label: "Առանց լողավազանի" },
    amenities: [
      "mangal",
      "wifi",
      "smart_tv",
      "spasq",
      "kayanateghi",
    ]
  },
  {
    id: 20,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1766738569225--0.12206903448369033image.webp&w=1920&q=75",
    location: { city: "Սևան" },
    qanak: { maxPeople: 40 },
    price: { value: 150000, currency: "AMD", label: "150,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 20,
    senyakqanak: { value: 6, label: "6 և ավելի" },
    sanhanguycqanak: { value: 3, label: "3+" },
    loxavazan: { hasPoll: false, label: "Առանց լողավազանի" },
    amenities: [
      "pak_taghavar",
      "mangal",
      "wifi",
      "smart_tv",
      "odorakich",
      "kayanateghi",
      "mankakan_xagahraparak",
      "batut"
    ]
  },
  {
    id: 21,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1766668830473--0.09494233481535441image.webp&w=1920&q=75",
    location: { city: "Ջերմուկ" },
    qanak: { maxPeople: 12 },
    price: { value: 35000, currency: "AMD", label: "35,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 12,
    senyakqanak: { value: 5, label: "5" },
    sanhanguycqanak: { value: 2, label: "2" },
    loxavazan: { hasPoll: false, label: "Առանց լողավազանի" },
    amenities: [
      "shoghebaghniq",
      "mangal",
      "wifi",
      "smart_tv",
      "spasq",
      "kayanateghi"
    ]
  },
  {
    id: 22,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1768305665629--0.5160952049141572image.webp&w=1920&q=75",
    location: { city: "Ապարան" },
    qanak: { maxPeople: 20 },
    price: { value: 80000, currency: "AMD", label: "80,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 8,
    senyakqanak: { value: 3, label: "3" },
    sanhanguycqanak: { value: 1, label: "1" },
    loxavazan: { hasPoll: true, type: "close", heated: true, label: "Փակ, Տաքացվող" },
    amenities: [
      "shoghebaghniq",
      "pak_taghavar",
      "mangal",
      "nvagarkich",
      "smart_tv",
      "odorakich",
      "spasq",
      "kayanateghi"
    ]
  },
  {
    id: 23,
    nkar: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2Fcompressed_images%2Fcompressed_1766411555937--0.051559510158725175image.webp&w=1920&q=75",
    location: { city: "Հաղարծին" },
    qanak: { maxPeople: 10 },
    price: { value: 70000, currency: "AMD", label: "70,000 ֏" },
    gisherakac: { value: true, label: "Այո" },
    gisherakacmard: 10,
    senyakqanak: { value: 5, label: "5" },
    sanhanguycqanak: { value: 2, label: "2" },
    loxavazan: { hasPoll: false, label: "Առանց լողավազանի" },
    amenities: [
      "pak_taghavar",
      "mangal",
      "wifi",
      "smart_tv",
      "spasq",
      "kayanateghi"
    ]
  },
];


export default function Apranqashar() {
  return (
    <div className="w-full">
      <div className="mt-[40px] sm:mt-[32px] md:mt-10">
        <div className="px-[9vw]">
          <div className="flex">
            <Filtr />
            <div className="flex flex-col mr-[24px] ml-[24px]">
              <Bajiner />

              <div className="pt-[24px]">
                <p className="text-[16px] pb-[24px] leading-[140%] font-[600]">
                  Լավագույն առաջարկներ
                </p>

                <div className="grid grid-cols-3 gap-[24px]">
                  {apranq.map((item) => (
                    <Apranq
                      key={item.id}
                      nkar={item.nkar}
                      qaxaq={item.location.city}
                      qanak={item.qanak.maxPeople}
                      gin={item.price.label}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
