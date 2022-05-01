import React from 'react'
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineGithub,
} from 'react-icons/ai'
import Logo from '../public/Software Strongman.png'
import Image from 'next/image'

function Footer() {
  return (
    <footer className="footer bg-neutral p-4 text-neutral-content">
      <div className="sticky bottom-0 ">
        <p>
          <span className="font-bold text-primary">The Software Strongman</span>{' '}
          <br />
          A Personal portfolio site and blog for myself, all content and
          opinions featured are my own. / company's featured.
          <br /> <br />{' '}
          <span className="font-bold text-secondary">
            &copy;SoftwareStrongman {new Date().getFullYear()}
          </span>
        </p>
      </div>
      <div className="mt-0">
        <span className="footer-title text-primary">Social's</span>
        <div className="mb-4 grid grid-flow-col gap-4">
          <a className="transition-all duration-300 hover:text-secondary">
            <AiOutlineInstagram size={40} className="" />
          </a>

          <a className="transition-all duration-300 hover:text-secondary">
            <AiOutlineYoutube size={40} className="" />
          </a>

          <a className="transition-all duration-300 hover:text-secondary">
            <AiOutlineGithub size={40} className="" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
