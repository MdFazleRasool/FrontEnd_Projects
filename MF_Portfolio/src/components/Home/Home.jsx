import React from 'react'
import "./Home.css"
import man from "../../assets/images/man.png"
import ReactTypingEffect from 'react-typing-effect';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function Home() {
  useGSAP(()=>{
    let t1 = gsap.timeline()
    t1.from(".line1",{
      y:100,
      duration : 1,
      opacity:0
    })
    t1.from(".line2",{
      y:100,
      duration : 1,
      opacity:0
    })
    t1.from(".line3",{
      y:100,
      duration : 1,
      opacity:0
    })
    gsap.from(".righthome",{
      x:200,
      duration : 1,
      opacity:0
    })
  })
  return (
    <div    id='home'>
      <div  className='lefthome'>
        <div className='homedetails'>
          <div className='line1'>I'm </div>
          <div className='line2'>MD FAZLE RASOOL</div>
          <div className='line3'>
            <ReactTypingEffect
              text={["WEB DEVELOPER", "SOFTWARE DEVELOPER","EDITOR"]}
              speed={100}
              eraseDelay={1000}
              eraseSpeed={10}
              typingDelay={500}
              cursor='|'
            />
          </div>
          <button>Hire Me</button>       
        </div>
      </div>
      <div  className='righthome'>
        <img src = {man} alt ="image" />
      </div>
    
    
    </div>
  )
}

export default Home