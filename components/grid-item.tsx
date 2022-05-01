import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
export const GridItem = ({ thumbnail, href, title, textBody, btnName, id }) => (
  <div className="card  rounded-md bg-base-100 shadow-xl lg:card-side">
    <figure className="rounded-md border-b-4 border-solid border-white  lg:border-b-0 lg:border-r-4">
      <Image
        src={thumbnail}
        alt={title}
        className=""
        placeholder="blur"
        loading="lazy"
        height={400}
        width={400}
      />
      {/* <img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /> */}
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{textBody}</p>
      <div className="card-actions justify-end">
        <NextLink href={`/${href}/${id}`}>
          <button className="btn btn-primary">{btnName}</button>
        </NextLink>
      </div>
    </div>
  </div>
)
