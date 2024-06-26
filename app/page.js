import LaptopModel from "@/components/LaptopModel";
import LaptopOpen from "@/components/LaptopOpen";
import Link from "next/link";

export default function Home() {
  const gradientStyle = {
    background: "linear-gradient(304deg, #111 3.19%, #171717 99%);",
  };

  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <section className="bg-[url('/images/loyaltri-bg.png')] h-screen w-full">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 py-20">
          <div className="flex flex-col justify-center items-center gap-10">
            <Link
              href="/about"
              className="text-white text-5xl md:text-[80px] text-center font-semibold w-full lg:w-[950px]"
            >
              HRMS Platform Designed by HR for HR
            </Link>
            <p className="text-[16px] font-normal text-center w-full md:w-[650px]">
              A simple and efficient way for HR to manage your People. A ton of
              automation, simple pricing, fast support.
            </p>
          </div>
        </div>
      </section>
      <section className="">
        {/* <LaptopModel/> */}
        <LaptopOpen />
      </section>
      <section className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0">
        <div className=" h-[400vh] [view-timeline-name:--reveal-wrapper]">
          <div className="sticky top-0 flex min-h-screen items-center justify-center">
            <div className="w-full lg:w-[700px]">
              <p className="supports-[animation-timeline]:reveal-text text-xl text-black text-left md:text-[38px] lg:leading-[133%] font-semibold w-fit">
                We started with WFM to tackle the education sector's HR issues.
                After success, we expanded to health and retail. By interviewing
                over 100 HR professionals, we created our new HRMS software,
                Loyaltri.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-80 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
          <div className="flex flex-col justify-center items-center gap-2">
            <div
              className="rounded-2xl w-[262px] h-[210px]"
              style={gradientStyle}
            ></div>
            <div
              className="rounded-2xl w-[262px] h-[360px]"
              style={gradientStyle}
            ></div>
          </div>
          <div className="flex flex-col justify-end items-end gap-2">
            <div
              className="rounded-2xl w-[262px] h-[360px]"
              style={gradientStyle}
            ></div>
            <div
              className="rounded-2xl w-[262px] h-[60px]"
              style={gradientStyle}
            ></div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div
              className="rounded-2xl w-[262px] h-[210px]"
              style={gradientStyle}
            ></div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 pb-40">
            <div
              className="rounded-2xl w-[262px] h-[60px]"
              style={gradientStyle}
            ></div>
            <div
              className="rounded-2xl w-[262px] h-[230px]"
              style={gradientStyle}
            ></div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 -mt-80">
            <div
              className="rounded-2xl w-[262px] h-[210px]"
              style={gradientStyle}
            ></div>
            <div
              className="rounded-xl w-[262px] h-[360px]"
              style={gradientStyle}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
}
