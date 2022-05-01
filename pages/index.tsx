import type { NextPage } from 'next'
import React from 'react'
import ContentSection from '../components/ContentSection'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      {/* Header */}
      <Header />

      {/* Drawer Wrapper */}
      <div className="drawer mx-auto max-w-7xl">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Nav Bar*/}
          <div className="navbar sticky top-0 z-50 w-full bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-ghost btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">Navbar Logo</div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Nav Menu Items */}
                <li>
                  <a>Navbar Item 1</a>
                </li>
                <li>
                  <a>Navbar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Conent */}
          <ContentSection />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu w-80 overflow-y-auto bg-base-100 p-4">
            {/* Drawer Menu Items */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
