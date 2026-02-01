import React from 'react'
import Hero from './ui/hero'
import Features from './ui/features'
import Testimonials from './ui/testimonials'
import Cta from './ui/cta'
import Faq from './ui/fqa'
import './body.css'
function Body() {
  return (
    <div className="gp-body">
      <div className="p-body">
        <Hero/>
        <Features/>
        <Testimonials/>
        <Cta/>
        <Faq/>
      </div>
    </div>
  )
}

export default Body
