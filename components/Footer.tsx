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
    <footer className="footer bg-neutral px-4 py-1 text-neutral-content">
      <div className="hidden place-items-center md:block">
        <p>
          <span className="font-bold text-primary">The Software Strongman</span>{' '}
          <br />
          A Personal portfolio site and blog for myself, all content and
          opinions featured are my own. / company's featured.
          <br /> <br />{' '}
        </p>
      </div>
      <div className="mt-0">
        <span className="footer-title text-primary">Social's</span>
        <div className="mb-4 grid grid-flow-col gap-4">
          <a
            className="transition-all duration-300 hover:text-secondary"
            href="https://www.instagram.com/softwarestrongman/"
          >
            <AiOutlineInstagram size={40} className="" />
          </a>

          <a
            className="transition-all duration-300 hover:text-secondary"
            href="https://www.youtube.com/channel/UCX33WoczxgmVbzDCh6OZX5A"
          >
            <AiOutlineYoutube size={40} className="" />
          </a>

          <a
            className="transition-all duration-300 hover:text-secondary"
            href="https://github.com/Stprry"
          >
            <AiOutlineGithub size={40} className="" />
          </a>
        </div>
        <span className="right-0 font-bold text-secondary">
          &copy;SoftwareStrongman {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}

export default Footer
