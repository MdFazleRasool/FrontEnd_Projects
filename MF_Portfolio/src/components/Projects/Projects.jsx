import React from 'react'
import "./Projects.css"
import Card from '../Card/Card'
import va from '../../assets/images/va.png'
import fw from '../../assets/images/fw.png'
import cb from '../../assets/images/cb.png'
import br from '../../assets/images/br.png'
import tti from '../../assets/images/tti.png'
import ise from '../../assets/images/ise.png'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function Projects() {

  useGSAP(()=>{
    let t1 = gsap.timeline()
    gsap.from("#exp",{
      x:-200,
      duration : 1.5,
      opacity:0,
      stagger:1,
      ScrollTrigger : {
        trigger:'#exp',
        scroll:'body',
        scrub :2 ,
        markers: true ,
        start : ' top 60%', 
        end:'top 30%'
      }
    })
    gsap.from(".slider",{
      x:-200,
      duration : 1.5,
      opacity:0,
      stagger:1,
      ScrollTrigger : {
        trigger:'.slider',
        scroll:'body',
        scrub :2 ,
        markers: true ,
        start : ' top 60%', 
        end:'top 30%'
      }
    })
  })
  


  return (
    <div id='projects'>
        <h1 id='exp'>2+ years experince in projects</h1>
        <div className='slider'>
            <Card title={"VIRTUAL ASSISTANT"} image={va}/>
            <Card title={"AI POWERED FITNESS WEBSITE"} image={fw} />
            <Card title={"AI BACKGROUND REMOVER"} image={br} />
            <Card title={"AI CHATBOT"} image={cb}/>
            <Card title={"AI TEXT TO IMAGE "} image={tti}/>
            <Card title={"IMAGE SEARCH ENGINE "} image={ise} />
        </div>
    </div>
  )
}

export default Projects