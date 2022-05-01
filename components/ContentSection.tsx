import React from 'react'
import Logo from '../public/Software Strongman.png'
import Hero from './Hero'
import PL from '../public/fulllogo.png'
import { GridItem } from './grid-item'

function ContentSection() {
  return (
    <>
      <Hero />

      {/*Grid container for posts. */}
      <div className="mx-auto flex  w-full max-w-7xl flex-col items-center justify-center bg-pink-500 py-8 px-4 sm:px-6 lg:py-12 lg:px-8">
        <div className="grid w-full grid-cols-1 gap-4 p-5 md:grid-cols-2">
          <GridItem
            thumbnail={Logo}
            href="#"
            title="Test Card1"
            textBody="lorem fodifsdijfjsidjngijngfjng  gnjerijgerjinkgnj ierjng jn"
            btnName="Check it out"
          />

          <GridItem
            thumbnail={PL}
            href="#"
            title="Test Card2"
            textBody="lorem fodifsdijfjsidjngijngfjng  gnjerijgerjinkgnj ierjng jn"
            btnName="Check it out"
          />

          <GridItem
            thumbnail={PL}
            href="#"
            title="Test Card2"
            textBody="lorem fodifsdijfjsidjngijngfjng  gnjerijgerjinkgnj ierjng jn"
            btnName="Check it out"
          />

          <GridItem
            thumbnail={PL}
            href="#"
            title="Test Card2"
            textBody="lorem fodifsdijfjsidjngijngfjng  gnjerijgerjinkgnj ierjng jn"
            btnName="Check it out"
          />

          <GridItem
            thumbnail={Logo}
            href="#"
            title="Test Card1"
            textBody="lorem fodifsdijfjsidjngijngfjng  gnjerijgerjinkgnj ierjng jn"
            btnName="Check it out"
          />

          <GridItem
            thumbnail={PL}
            href="#"
            title="Test Card2"
            textBody="lorem fodifsdijfjsidjngijngfjng  gnjerijgerjinkgnj ierjng jn"
            btnName="Check it out"
          />

          <GridItem
            thumbnail={PL}
            href="#"
            title="Test Card2"
            textBody="lorem fodifsdijfjsidjngijngfjng  gnjerijgerjinkgnj ierjng jn"
            btnName="Check it out"
          />

          <GridItem
            thumbnail={PL}
            href="#"
            title="Test Card2"
            textBody="lorem fodifsdijfjsidjngijngfjng  gnjerijgerjinkgnj ierjng jn"
            btnName="Check it out"
          />
        </div>
      </div>
    </>
  )
}

export default ContentSection
