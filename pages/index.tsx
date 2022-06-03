import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import ContentSection from '../components/ContentSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavbarLogo from '../public/Software Strongman.png'
import { TiThMenuOutline } from '../node_modules/react-icons/ti'
const Home: NextPage = () => {
  return (
    <React.Fragment>
      {/* Header */}
      <Header />

      {/* Drawer Wrapper */}
      <div className="drawer mx-auto max-w-7xl bg-pink-500 md:bg-base-300 lg:bg-base-200">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer-3">
            <TiThMenuOutline
              size={30}
              className="mt-4 ml-4 flex-1 justify-start text-base-200 hover:text-secondary md:text-gray-300"
            />
          </label>
          {/* Conent */}
          <ContentSection />

          {/* Footer */}
          <Footer />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu w-80 overflow-y-auto bg-base-100 p-4">
            {/* Drawer Menu Items */}
            <li>
              <a>Gym PR's 💪🏻</a>
            </li>
            <li>
              <a>Nerdy Projects 💻</a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
