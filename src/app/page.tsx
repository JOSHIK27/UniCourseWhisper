import { Button } from "@nextui-org/react";
import Link from "next/link";
import university from "../../public/End of school-bro.png";
import course_review from "../../public/Online Review-rafiki.png";
import prof_review from "../../public/Teacher student-bro.png";
import chat from "../../public/Chat-cuate.png";
export default function Home() {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="ml-4 sm:ml-40 mt-36">
          <div>
            <div className="text-[65px] text-[#12372A] mb-8 font-cinzer font-300">
              UNI <br /> COURSE <br /> WHISPER
            </div>
            <div className="text-[20px] tracking-[0.6em] text-[#12372A] mb-8 font-sans font-bold">
              UNVEILING ANONYMOUS REVIEWS
            </div>
          </div>
          <Link href={"pages/login"}>
            <Button className="bg-[#12372A] font-semibold tracking-[0.2em] w-32 text-white font-sans">
              EXPLORE
            </Button>
          </Link>
        </div>
        <img src={university.src} className="w-[600px] h-[600px]"></img>
      </div>
      <div className="h-80 bg-white">
        <div className="text-center font-sans text-[40px] pt-20 mb-12">
          WHY UNI COURSE WHISPER ?
        </div>
        <div className="text-center">
          Ever wondered which course to elective choose ??
        </div>
        <div className="text-center">
          Have you ever been curious to know about the teaching style of course
          instructor ??
        </div>
        <div className="text-center">
          Ever felt like chatting with an alumuni of same course ??
        </div>
      </div>
      <div className="bg-white">
        <div className="text-center font-sans text-[40px] pt-20 mb-12">
          WE GOT YOU COVERED !!
        </div>
        <div className="flex justify-evenly items-center flex-wrap">
          <img src={course_review.src} height={500} width={500}></img>
          <div>
            <div className="text-[20px]">
              Checkout what almuni told about courses
            </div>
            <br />
            <Button className="bg-[#46985D] font-semibold tracking-[0.2em] w-32 text-white font-sans">
              EXPLORE
            </Button>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row mb-4 justify-evenly items-center flex-wrap">
          <div>
            <div className="text-[20px]">
              Checkout what almuni told about course leaders
            </div>
            <br />
            <Button className="bg-[#46985D] font-semibold tracking-[0.2em] w-32 text-white font-sans">
              EXPLORE
            </Button>
          </div>
          <img src={prof_review.src} height={500} width={500}></img>
        </div>
        <div className="flex bg-[#46985D] justify-evenly items-center flex-wrap">
          <img src={chat.src} height={500} width={500}></img>
          <div>
            <div className="text-[20px] text-white">Chat With Alumini</div>
            <br />
            <Button className="bg-[#9edcb0] font-semibold tracking-[0.2em] w-32 text-black font-sans">
              CHAT
            </Button>
          </div>
        </div>
      </div>
      <footer className="text-center pt-20">
        Contact Us
        <div className="flex justify-center mt-8">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/twitter--v1.png"
            alt="twitter--v1"
            className="mr-4"
          />
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/linkedin.png"
            alt="linkedin"
            className="mr-4"
          />
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/github.png"
            alt="github"
          />
        </div>
      </footer>
    </div>
  );
}
