import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import Logo from '../public/Software Strongman.png'
import Image from 'next/image'
import Hero from './Hero'

export default function ContentSection() {
  return (
    <>
      <Hero />

      {/*Grid container for posts. */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center bg-pink-500 py-8 px-4 sm:px-6 lg:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-green-100 p-10 text-center text-lg font-bold text-green-500">
            1
          </div>
          <div className="rounded-lg bg-green-100 p-10 text-center text-lg font-bold text-green-500">
            2
          </div>
          <div className="rounded-lg bg-green-100 p-10 text-center text-lg font-bold text-green-500">
            3
          </div>
          <div className="rounded-lg bg-green-100 p-10 text-center text-lg font-bold text-green-500">
            4
          </div>
          <div className="rounded-lg bg-green-100 p-10 text-center text-lg font-bold text-green-500">
            5
          </div>
          <div className="rounded-lg bg-green-100 p-10 text-center text-lg font-bold text-green-500">
            6
          </div>
          <div className="rounded-lg bg-green-100 p-10 text-center text-lg font-bold text-green-500">
            7
          </div>
          <div className="rounded-lg bg-green-100 p-10 text-center text-lg font-bold text-green-500">
            8
          </div>
          <div className="rounded-lg bg-green-100 p-10 text-center text-lg font-bold text-green-500">
            9
          </div>
          <div className="rounded-lg bg-green-100 p-10 text-center text-lg font-bold text-green-500">
            10
          </div>
        </div>
      </div>
    </>
  )
}
