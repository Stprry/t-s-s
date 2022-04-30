import React from 'react'
import Image from 'next/image'
import Logo from '../public/Software Strongman.png'
export default function Hero() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center bg-gray-50 py-8 px-4 sm:px-6 lg:py-12 lg:px-8">
      <div className="flex-col">
        <Image src={Logo} height="150" width={300} />
      </div>
      <h2 className="flex-col font-mono text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className=" ">
          Hey, I'm Sam I'm a full stack developer by day and Amateur Strongman
          by night.
        </span>
      </h2>
    </div>
  )
}
