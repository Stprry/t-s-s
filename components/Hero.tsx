import React from 'react'
import Image from 'next/image'
export default function Hero() {
  return (
    <div className="hero h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src="https://api.lorem.space/image/movie?w=260&h=400"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <h5 className="align-center flex w-full justify-center py-3">
            Are you here for?
          </h5>
          <div className="flex w-full flex-col lg:flex-row">
            <div className="card btn-ghost rounded-box grid h-32 flex-grow cursor-pointer place-items-center bg-base-300">
              Strongman
            </div>
            <div className="divider lg:divider-horizontal">OR</div>
            <div className="card btn-ghost rounded-box grid h-32 flex-grow cursor-pointer place-items-center bg-base-300">
              Software
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
