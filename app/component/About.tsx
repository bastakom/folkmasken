import Image from "next/image";
import mask from "@/public/mask.png";
import Link from "next/link";

const About = () => {
  return (
    <div className="py-20 flex flex-col lg:flex-row px-5 lg:px-0 lg:max-w-[80%] mx-auto text-black gap-14 items-center">
      <div className="flex flex-col gap-5 lg:w-1/2">
        <span className="border-2 px-[19px] py-[9px] border-black text-center max-w-[200px]">
          <span className="text-center px-4 py-[1px] bg-[#E8D49E] text-[15px] font-medium">
            FOLKMASKEN
          </span>
        </span>
        <h2 className="text-[24px] font-bold tracking-[3.36px]">
          ANSIKTSSKYDD 90M
        </h2>
        <p className="lg:max-w-[70%]">
          Ansiktsskydd AS 90 M bildar tillsammans med ett filter en skyddsmask
          mot kemiska och biologiska ämnen samt radioaktiva partiklar.
          Ansiktsskyddet är CE-certifierat och CE-märkt för högsta
          skyddskategori (Klass 3). Används i första hand av Försvarsmakten och
          övriga krishanteringsorganisationer.
        </p>
        <ul>
          <li>• Skyddsmasken tillverkas i Sverige</li>
          <li>• CE-märkt och godkänd för civil användning</li>
          <li>• Lång förvaringstid {">"} 25 år</li>
          <li>• Filtergänga enligt NATO-standard</li>
        </ul>
        <p>Mer information om Ansiktsskydd 90 M finns på sesprotection.se</p>
        <div className="mt-10">
          <Link
            href="https://www.sesprotection.se/produkter/ansiktsskydd-as-90m/"
            className="mt-14 bg-[#263568] px-14 py-5 text-white"
          >
            Läs mer
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative h-[250px] lg:h-[500px]">
        <Image src={mask} fill alt="ANSIKTSSKYDD 90M" />
      </div>
    </div>
  );
};

export default About;
