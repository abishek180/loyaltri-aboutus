import Image from 'next/image'
import React from 'react'
import loyaltriold from "@/public/images/loyaltriold.png"

const AnimatedText = () => {
  return (
    <section className='max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0'>
        <div className="h-[400vh] [view-timeline-name:--reveal-wrapper]">
        <div className="sticky top-0 flex min-h-screen items-center justify-center">
          <div className='flex flex-col justify-center items-center gap-10'>
            <p className="supports-[animation-timeline]:reveal-text text-xl text-black text-center md:text-[38px] lg:leading-[133%] font-semibold w-full lg:w-[807px]">
                The story starts with identifying a significant gap in the <span className='text-gradient'>HRMS</span> software used by the education sector.
            </p>
            <p className="supports-[animation-timeline]:reveal-text text-xl text-black text-center md:text-[38px] lg:leading-[133%] font-semibold w-full lg:w-[965px]">
               Observing schools struggling with outdated systems, we developed an initial version called <span className='text-gradient'>WFM</span>  and introduced it to schools.
            </p>
            {/* <div className='w-[850px] h-[650px] overflow-hidden rounded-[40px] border-[2px] border-[#242424]'>
                <Image src={loyaltriold} className='w-full h-full object-cover object-center'/>
            </div> */}
          </div>
        </div>
    </div>
    </section>
  )
}

export default AnimatedText