import Feature from "@/components/Feature";
import LaptopModel from "@/components/LaptopModel";
import LaptopOpen from "@/components/LaptopOpen";
import Link from "next/link";
// icons
import { FaCircleCheck } from "react-icons/fa6";

export default function Home() {
  const gradientStyle = {
    background: "linear-gradient(304deg, #111 3.19%, #171717 99%);",
  };
  const gradientStyle2 = {
    background: "linear-gradient(292deg, #111 12.49%, #1D1D1D 85.64%);",
  };

  return (
    <div className="flex flex-col justify-center items-center pt-10 md:pt-20">
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
      <Feature />
      <section className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 py-20">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="text-[#D48DFF] text-2xl md:text-[32px] font-bold">
              Feature Modules
            </p>
            <p className="text-white text-3xl md:text-6xl font-bold">
              Features only for your business.
            </p>
            <p className="text-white text-xl font-normal">
              Here are several features we provide to you to make the greatest
              HRM system for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="col-span-2 bg-custom-gradient4 rounded-3xl p-10">
              <div className="flex">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#D48DFF] text-xl font-semibold">
                      Recruitment Module
                    </p>
                    <p className="text-white text-[34px] font-bold">
                      Effortless Onboarding in 60 Seconds
                    </p>
                    <p className="text-[16px] font-normal">
                      Say goodbye to paperwork. Instantly generate and e-sign
                      offer letters, HR forms, and NDAs with our mobile-friendly
                      portal.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#EBE7FF] text-[16px] font-normal flex items-center gap-2">
                      <span>
                        <FaCircleCheck />
                      </span>
                      Paperwork on any device in under 2 minutes.
                    </p>
                    <p className="text-[#EBE7FF] text-[16px] font-normal flex items-center gap-2">
                      <span>
                        <FaCircleCheck />
                      </span>
                      Simple and intuitive interface, Fastest time to
                      productivity
                    </p>
                  </div>
                  <div
                    className="border-l-[4px] border-l-[#121111] p-5"
                    style={gradientStyle2}
                  >
                    <p>
                      "Onboarding a new employee used to take us hours, now it's
                      just a minute. We can start them working immediately."
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#D48DFF] text-[16px] font-semibold">
                        Khaled
                      </p>
                      <p className="text-[#D48DFF] text-[16px] font-semibold">
                        Khaled
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 bg-custom-gradient4 rounded-3xl p-10">
              <div className="flex">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#D48DFF] text-xl font-semibold">
                      Recruitment Module
                    </p>
                    <p className="text-white text-[34px] font-bold">
                      Effortless Onboarding in 60 Seconds
                    </p>
                    <p className="text-[16px] font-normal">
                      Say goodbye to paperwork. Instantly generate and e-sign
                      offer letters, HR forms, and NDAs with our mobile-friendly
                      portal.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#EBE7FF] text-[16px] font-normal flex items-center gap-2">
                      <span>
                        <FaCircleCheck />
                      </span>
                      Paperwork on any device in under 2 minutes.
                    </p>
                    <p className="text-[#EBE7FF] text-[16px] font-normal flex items-center gap-2">
                      <span>
                        <FaCircleCheck />
                      </span>
                      Simple and intuitive interface, Fastest time to
                      productivity
                    </p>
                  </div>
                  <div
                    className="border-l-[4px] border-l-[#121111] p-5"
                    style={gradientStyle2}
                  >
                    <p>
                      "Onboarding a new employee used to take us hours, now it's
                      just a minute. We can start them working immediately."
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#D48DFF] text-[16px] font-semibold">
                        Khaled
                      </p>
                      <p className="text-[#D48DFF] text-[16px] font-semibold">
                        Khaled
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 bg-custom-gradient4 rounded-3xl p-10">
              <div className="flex">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#D48DFF] text-xl font-semibold">
                      Recruitment Module
                    </p>
                    <p className="text-white text-[34px] font-bold">
                      Effortless Onboarding in 60 Seconds
                    </p>
                    <p className="text-[16px] font-normal">
                      Say goodbye to paperwork. Instantly generate and e-sign
                      offer letters, HR forms, and NDAs with our mobile-friendly
                      portal.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-[#EBE7FF] text-[16px] font-normal flex items-center gap-2">
                      <span>
                        <FaCircleCheck />
                      </span>
                      Paperwork on any device in under 2 minutes.
                    </p>
                    <p className="text-[#EBE7FF] text-[16px] font-normal flex items-center gap-2">
                      <span>
                        <FaCircleCheck />
                      </span>
                      Simple and intuitive interface, Fastest time to
                      productivity
                    </p>
                  </div>
                  <div
                    className="border-l-[4px] border-l-[#121111] p-5"
                    style={gradientStyle2}
                  >
                    <p>
                      "Onboarding a new employee used to take us hours, now it's
                      just a minute. We can start them working immediately."
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="text-[#D48DFF] text-[16px] font-semibold">
                        Khaled
                      </p>
                      <p className="text-[#D48DFF] text-[16px] font-semibold">
                        Khaled
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="col-span-4 lg:col-span-1">
            <div className="flex flex-col justify-center items-center gap-5">
              <p className="text-[#D48DFF] text-2xl md:text-[32px] font-bold">
                Feature Modules
              </p>
              <p className="text-white text-3xl md:text-6xl font-bold">
                Why Choose Loyaltri
              </p>
              <p className="text-white text-xl font-normal">
                Where HR Innovation Meets Practical Solutions
              </p>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-3 bg-custom-gradient4 rounded-[20px] p-10">
            <div className="flex flex-col justify-center items-center gap-5">
              <p className="text-[#D48DFF] text-2xl md:text-[32px] font-bold">
                Feature Modules
              </p>
              <p className="text-white text-3xl md:text-6xl font-bold">
                Why Choose Loyaltri
              </p>
              <p className="text-white text-xl font-normal">
                Where HR Innovation Meets Practical Solutions
              </p>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-1 bg-[#49F1E7] rounded-[20px] p-10">
            <div className="flex flex-col justify-center items-center gap-5">
              <p className="text-[#D48DFF] text-2xl md:text-[32px] font-bold">
                Feature Modules
              </p>
              <p className="text-white text-3xl md:text-6xl font-bold">
                Why Choose Loyaltri
              </p>
              <p className="text-white text-xl font-normal">
                Where HR Innovation Meets Practical Solutions
              </p>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-2 bg-custom-gradient4 rounded-[20px] p-10">
            <div className="flex flex-col justify-center items-center gap-5">
              <p className="text-[#D48DFF] text-2xl md:text-[32px] font-bold">
                Feature Modules
              </p>
              <p className="text-white text-3xl md:text-6xl font-bold">
                Why Choose Loyaltri
              </p>
              <p className="text-white text-xl font-normal">
                Where HR Innovation Meets Practical Solutions
              </p>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-1 bg-custom-gradient4 rounded-[20px] p-10">
            <div className="flex flex-col justify-center items-center gap-5">
              <p className="text-[#D48DFF] text-2xl md:text-[32px] font-bold">
                Feature Modules
              </p>
              <p className="text-white text-3xl md:text-6xl font-bold">
                Why Choose Loyaltri
              </p>
              <p className="text-white text-xl font-normal">
                Where HR Innovation Meets Practical Solutions
              </p>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-4 bg-custom-gradient4 rounded-xl p-5">
            <div className="flex justify-center items-center gap-5">
              <p className="text-[#D48DFF] text-2xl md:text-[32px] font-bold">
                Feature Modules
              </p>
              <p className="text-white text-xl font-normal">
                Where HR Innovation Meets Practical Solutions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
