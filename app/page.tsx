import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";
import About from "./component/About";
import src from '@/public/logo.png';


export default function Home() {
  return (
    <>
    <Image src={src} width={250} height={50} className="absolute left-20 lg:left-10 top-5 z-50" alt="ses protection" />
      <div className="h-full relative">
        <div className="flex flex-col items-center justify-center h-full py-14 lg:py-0 lg:h-[80vh] gap-5 lg:gap-10 px-10 lg:px-0 z-10 relative">
          <div className="opacity-30 bg-black absolute h-full w-full z-0" />
          <h1 className="text-[18px] lg:text-[42px] lg:w-[80%] mx-auto text-center font-bold z-10 pt-10 lg:pt-0">
            SES PROTECTION – DIN SVENSKA LEVERANTÖR AV
            BRANDBEKÄMPNINGSUTRUSTNING FRÅN ROSENBAUER
          </h1>
          <div className="flex flex-col gap-10 lg:w-[50%] text-center text-[22px] z-10">
            <p>
              SES Protection är den svenska leverantören av
              brandbekämpningsutrustning från Rosenbauer. I sortimentet finns
              personlig skyddsutrustning från hjälmar till boots, handskar och
              fulla dräkter.
            </p>
            <p>
              För mer information om Rosenbauers produkter besök deras
              webbplats. Vid frågor och beställningar kontakta SES Protection.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:gap-5 z-10">
            <Link
              href="https://www.sesprotection.se/"
              className=" bg-[#263568] border-2 border-[#263568] px-5 py-4 text-[12px] mt-5 font-semibold tracking-[1.25px] button z-10"
            >
              SES PROTECTION.SE
            </Link>
            <Link
              href="https://www.rosenbauer.com/"
              className="border-[2px] border-white px-5 py-4 text-[12px] mt-5 font-semibold tracking-[1.25px] button z-10"
            >
              OM FOLKMASKEN
            </Link>
          </div>
        </div>
        <Image src={bg} fill alt="Sesprotection" className="object-cover z-0" />
      </div>
      <About />
      <div>
        <video className="px-5 pb-10 lg:p-20" controls>
          <source
            src="https://ses.admin-login.se/wp-content/uploads/2023/05/%E2%80%A2SES-NewPac-16x9_0915.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}
