import TextReveal from '@/components/TextReveal'
import { Hero } from '@/components/Hero'
import { Bentogrid} from '@/components/Bentogrid'
import { ImageScroll } from '@/components/ImageScroll'
import React from 'react'
import TextEffect from '@/components/TextEffect'
import { AnimatedDiv } from '@/components/AnimatedDiv'
import DrawSvg from '@/components/DrawSvg'
import { ImageSlider } from '@/components/ImageSlider'
import { Hr } from '@/components/Hr'
import { Map } from '@/components/Map'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
        <Hero 
        description="The web has come a long way in the last ten years, but why is HR software stuck in the past? It doesn't have to be that way, We want to change that, We want to reimagine HRMS Software."
        />
        <DrawSvg/>
        <TextReveal/>
        <ImageScroll/>
        <TextEffect/>
        <Bentogrid/>
        <Hr/>
        <AnimatedDiv/>
        <ImageSlider/>
        <Map/>
        <Footer/>
    </div>
  )
}

export default page