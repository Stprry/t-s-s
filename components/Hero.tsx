import React from 'react'
import Image from 'next/image'
import Logo from '../public/Software Strongman.png'

// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
  return src
}

export default function Hero() {
  return (
    <>
      <div className="mx-0 hidden max-w-7xl  flex-col items-center justify-center px-4 pb-0 pt-4 text-xl text-gray-50 sm:px-6 md:flex  md:border-b-4  md:border-black  md:py-2  lg:px-8">
        <div className="">
          <Image
            src={Logo}
            height="100"
            width="200"
            loader={customLoader}
            className=""
          />
        </div>
        <h2 className="hidden flex-col font-mono font-extrabold tracking-tight  md:block">
          <span className=" ">
            Hey, I'm Sam I'm a full stack developer by day and Amateur Strongman
            by night. <br /> <br />
            Check out some of my posts below ⤵ .
          </span>
        </h2>
      </div>

      <div className="flex justify-center border-b-4 border-b-black pb-2 md:hidden">
        <Image
          src={Logo}
          height="100"
          width="200"
          loader={customLoader}
          className=""
        />
      </div>
    </>
  )
}
