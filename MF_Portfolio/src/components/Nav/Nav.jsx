import React from 'react'
import "./Nav.css"
import {Link} from "react-scroll"
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function Nav() {
  let menu = useRef()
  let mobile = useRef()
  useGSAP(()=>{
    let t1 = gsap.timeline()
    gsap.from("nav h1",{
      y:-100,
      duration : 0.7,
      opacity:0
    })
    t1.from("nav ul li",{
      y:-100,
      duration : 0.5,
      opacity:0,
      stagger:1
    })
  })
  return (
    <nav>
      <h1>MF's PORTFOLIO</h1>
      <ul className='desktop'>
        <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}><li> Home </li></Link>
        <Link to="about" activeClass='active' spy={true}  smooth={true} duration={500}><li> About </li></Link>
        <Link to="projects" activeClass='active' spy={true}  smooth={true} duration={500}><li> Projects </li></Link>
        <Link to="contact" activeClass='active' spy={true}  smooth={true} duration={500}><li> Contact </li></Link>
      </ul>
      <div className='hamburger' ref={menu} onClick={() =>{
          mobile.current.classList.toggle("activemobile");
          menu.current.classList.toggle("activeham");
      }}>
        <div className='ham'></div>
        <div className='ham'></div>
        <div className='ham'></div>
      </div>
      <ul className='mobile' ref={mobile}>
        <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}><li> Home </li></Link>
        <Link to="about" activeClass='active' spy={true}  smooth={true} duration={500}><li> About </li></Link>
        <Link to="projects" activeClass='active' spy={true}  smooth={true} duration={500}><li> Projects </li></Link>
        <Link to="contact" activeClass='active' spy={true}  smooth={true} duration={500}><li> Contact </li></Link>
      </ul>
    </nav>
  )
}

export default Nav