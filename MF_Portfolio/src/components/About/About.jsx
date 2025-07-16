import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from "../../assets/images/mern.png"
import java from "../../assets/images/java.png"
import dsa from "../../assets/images/dsa.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function About() {

  useGSAP(()=>{
    let t1 = gsap.timeline()
    gsap.from(".circle",{
      x:-100,
      duration : 1,
      opacity:0,
      stagger:1,
      ScrollTrigger : {
        trigger:'.circle',
        scroll:'body',
        scrub :2 ,
        markers: true ,
        start : ' top 60%', 
        end:'top 30%'
      }
    })
    gsap.from(".line",{
      y:-100,
      duration : 1,
      opacity:0,
      stagger:1,
      ScrollTrigger : {
        trigger:'.line',
        scroll:'body',
        scrub :2 ,
        markers: true ,
        start : ' top 60%', 
        end:'top 30%'
      }
    })
    gsap.from(".aboutdetails h1",{
      x:-100,
      duration : 1,
      opacity:0,
      stagger:1,
      ScrollTrigger : {
        trigger:'.aboutdetails h1',
        scroll:'body',
        scrub :2 ,
        markers: true ,
        start : ' top 60%', 
        end:'top 30%'
      }
    })
    gsap.from(".aboutdetails ul",{
      y:-100,
      duration : 1,
      opacity:0,
      stagger:1,
      ScrollTrigger : {
        trigger:'.aboutdetails ul',
        scroll:'body',
        scrub :2 ,
        markers: true ,
        start : ' top 60%', 
        end:'top 30%'
      }
    })
    gsap.from(".rightAbout",{
      y:-100,
      duration : 1,
      opacity:0,
      stagger:1,
      ScrollTrigger : {
        trigger:'.rightAbout',
        scroll:'body',
        scrub :2 ,
        markers: true ,
        start : ' top 60%', 
        end:'top 30%'
      }
    })
    
  })

  return (
    <div    id='about'>
      <div  className='leftAbout'>
        <div className='circle-line'>
          <div className='circle'></div>
          <div className='line'></div>
          <div className='circle'></div>
          <div className='line'></div>
          <div className='circle'></div>
        </div>
        <div className='aboutdetails'>
          <div className='personalInfo'>
            <h1>Personal Info</h1>
            <ul>
              <li>
              <span>NAME</span> : MD FAZLE RASOOL</li>
              <li><span>AGE</span>: 21</li>
              <li><span>GENDER </span>: MALE</li>                 
              <li><span>LANGUAGE KNOWN </span>: ENGLISH , HINDI , URDU , FRENCH</li>
            </ul>
          </div>
          <div className='education'>
            <h1>EDUCATION</h1>
            <ul>
              <li><span>DEGREE</span> : B.TECH</li>
              <li><span>BRANCH</span>: COMPUTER SCIENCE</li>
              <li><span>CGPA </span>: 8.7</li>            
            </ul>
          </div>
          <div className='Skills'>
            <h1>SKILLS</h1>
            <ul>
              <li>MERN STACK DEVELOPER</li>
              <li>JAVA </li>
              <li>DSA</li>                 
              <li>DBMS</li>

            </ul>
          </div>
        </div>

      </div>
      <div  className='rightAbout'>
        <Card title={"MERN STACK WEB DEVELOPER"} image={mern}/>
        <Card title={"JAVA"} image={java} />
        <Card title={"DSA"}  image={dsa} />
      </div>


    </div>
  )
}

export default About