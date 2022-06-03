import React from 'react'
import Image from 'next/image'
import Logo from '../public/Software Strongman.png'
function SearchSection() {
  return (
    <div className="flex items-center justify-center border-b-4 border-black bg-pink-500 font-mono font-extrabold text-black">
      <span className="mb-2 mt-2 lg:m-0">
        <div style={{ width: '150px', height: '100px', position: 'relative' }}>
          <Image
            src={Logo}
            alt={'Software Strongman Logo'}
            layout="fill"
            className="md:invisible"
          />
        </div>
      </span>
    </div>
  )
}

export default SearchSection
