import React from 'react'
import Logo from '../public/Software Strongman.png'
import Hero from './Hero'
import PL from '../public/fulllogo.png'
import { GridItem } from './grid-item'
import GridSection from './GridSection'

function ContentSection() {
  return (
    <>
      <div className="hidden md:block">
        <Hero />
      </div>
      <div className="max-h-screen overflow-y-auto">
        <GridSection />
      </div>
    </>
  )
}

export default ContentSection
