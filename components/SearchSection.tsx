import React from 'react'

function SearchSection() {
  return (
    <div className="flex items-center justify-end bg-pink-500 font-mono font-extrabold text-black">
      <div className="flex items-center py-2 px-2">
        <span className="nowrap mr-4 ml-4 inline">Search</span>
        <input
          type="text"
          placeholder="🔍 Type here"
          className="input input-bordered w-full max-w-xs font-mono font-extrabold text-white"
        />
      </div>
    </div>
  )
}

export default SearchSection
