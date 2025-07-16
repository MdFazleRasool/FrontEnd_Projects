import React from 'react'
import con from '../../assets/images/contact.png'
import './Contact.css'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function Contact() {

  useGSAP(()=>{
    let t1 = gsap.timeline()
    gsap.from(".leftContact img",{
      x:-200,
      duration : 1.5,
      opacity:0,
      stagger:1,
      ScrollTrigger : {
        trigger:'.leftContact img',
        scroll:'body',
        scrub :2 ,
        markers: true ,
        start : ' top 60%', 
        end:'top 30%'
      }
    })
    gsap.from("form",{
      x:-200,
      duration : 1.5,
      opacity:0,
      stagger:1,
      ScrollTrigger : {
        trigger:'form',
        scroll:'body',
        scrub :2 ,
        markers: true ,
        start : ' top 60%', 
        end:'top 30%'
      }
    })
  })


  return (
    <div id='contact'>
     <div className='leftContact'>
        <img src= {con}  alt='image' />
     </div>
     <div className='rightContact'>
        <form   action='https://formspree.io/f/xjkrpran' method='post'>
            <input name='username' type='text' placeholder='name'/>
            <input name='email' type='email' placeholder='email'/>
            <textarea name='message' id='textarea' placeholder='message'></textarea>
            <input type='submit' id='btn' value='submit'/>

        </form>
     </div>
        
    </div>
  )
}

export default Contact