import React from 'react'
import Hero from './Hero'
import GridSection from './GridSection'
import SearchSection from './SearchSection'

function ContentSection() {
  return (
    <>
      <Hero />
      {/* <SearchSection /> */}
      <div className="max-h-screen overflow-y-auto">
        <GridSection />
      </div>
    </>
  )
}

export default ContentSection
