import React from 'react'
import Hero from './ui/hero'
import Features from './ui/features'
import Testimonials from './ui/testimonials'
import Cta from './ui/cta'
import Faq from './ui/fqa'
function Body() {
  return (
    <div>
      <Hero/>
        <Features/>
        <Testimonials/>
        <Cta/>
        <Faq/>
    </div>
  )
}

export default Body
