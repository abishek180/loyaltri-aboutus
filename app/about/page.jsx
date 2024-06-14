import AnimatedLineBox from '@/components/AnimatedLineBox'
import AnimatedText from '@/components/AnimatedText'
// import { Bentogrid } from '@/components/Bentogrid'
import { Hero } from '@/components/Hero'
import { Bentogrid} from '@/components/Bentogrid'
import { ImageScroll } from '@/components/ImageScroll'
import React from 'react'
import TextEffect from '@/components/TextEffect'
import { AnimatedDiv } from '@/components/AnimatedDiv'

const page = () => {
  return (
    <div>
        <Hero 
        description="The web has come a long way in the last ten years, but why is HR software stuck in the past? It doesn't have to be that way, We want to change that, We want to reimagine HRMS Software."
        />
        {/* <AnimatedLineBox/> */}
        <AnimatedText/>
        <ImageScroll/>
        <TextEffect/>
        <Bentogrid/>
        <AnimatedDiv/>
    </div>
  )
}

export default page