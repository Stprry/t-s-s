import React from 'react'
import { GridItem } from './grid-item'
import PL from '../public/fulllogo.png'
import Logo from '../public/Software Strongman.png'

function GridSection() {
  return (
    <div className="mx-auto flex  w-full max-w-7xl flex-col items-center justify-center bg-pink-500 py-8 px-4 sm:px-6 lg:py-12 lg:px-8">
      <div className="grid w-full grid-cols-1 gap-4 p-5 md:grid-cols-2">
        <GridItem
          thumbnail={Logo}
          href="#"
          id="#"
          title="Test Card1"
          textBody="lorem fodifsdijfjsidjngijngfjng  gnjerijgerjinkgnj ierjng jn"
          btnName="Check it out"
        />

        <GridItem
          thumbnail={PL}
          href="#"
          id="#"
          title="Test Card2"
          textBody="lorem fodifsdijfjsidjngijngfjng  gnjerijgerjinkgnj ierjng jn"
          btnName="Check it out"
        />
        <GridItem
          thumbnail={PL}
          href="#"
          id="#"
          title="Test Card2"
          textBody="lorem fodifsdijfjsidjngijngfjng  gnjerijgerjinkgnj ierjng jn"
          btnName="Check it out"
        />
        <GridItem
          thumbnail={PL}
          href="#"
          id="#"
          title="Test Card2"
          textBody="lorem fodifsdijfjsidjngijngfjng  gnjerijgerjinkgnj ierjng jn"
          btnName="Check it out"
        />
        <GridItem
          thumbnail={PL}
          href="#"
          id="#"
          title="Test Card2"
          textBody="lorem fodifsdijfjsidjngijngfjng  gnjerijgerjinkgnj ierjng jn"
          btnName="Check it out"
        />
        <GridItem
          thumbnail={PL}
          href="#"
          id="#"
          title="Test Card2"
          textBody="lorem fodifsdijfjsidjngijngfjng  gnjerijgerjinkgnj ierjng jn"
          btnName="Check it out"
        />
        <GridItem
          thumbnail={PL}
          href="#"
          id="#"
          title="Test Card2"
          textBody="lorem fodifsdijfjsidjngijngfjng  gnjerijgerjinkgnj ierjng jn"
          btnName="Check it out"
        />
      </div>
    </div>
  )
}

export default GridSection
