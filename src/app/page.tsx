import { Button } from "@nextui-org/react";
import Link from "next/link";
import university from "../../public/End of school-bro.png";
export default function Home() {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="ml-40 mt-36">
          <div className="text-[65px] text-[#12372A] mb-8 font-cinzer font-300">
            UNI <br /> COURSE <br /> WHISPER
          </div>
          <div className="text-[20px] tracking-[0.6em] text-[#12372A] mb-8 font-sans font-bold">
            UNVEILING ANONYMOUS REVIEWS
          </div>
          <Link href={"pages/login"}>
            <Button className="bg-[#12372A] font-semibold tracking-[0.2em] w-32 text-white font-sans">
              EXPLORE
            </Button>
          </Link>
        </div>
        <img src={university.src} className="w-[600px] h-[600px]"></img>
      </div>
    </div>
  );
}
