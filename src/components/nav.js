import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import NavToggle from './nav-toggle'
import YouTube from './../images/svgs/youtube-square.svg';
import Instagram from './../images/svgs/instagram.svg';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="max-w-screen-lg p-4 mx-auto sm:mb-4">
      <div className="w-full mx-auto">
        <div className="flex flex-row-reverse sm:hidden">
          <div className="pr-2 my-auto" onClick={toggle}>
            <NavToggle isOpen={isOpen} />
          </div>
        </div>
        <div className={`sm:flex sm:justify-around ${isOpen ? "" : "hidden"}`}>
          <div className="p-3 my-auto text-center bg-black sm:inline sm:p-0 sm:pt-1">
            <Link className="text-gray-300 hover:text-gray-600" to="/shows">Shows</Link>
          </div>
          <div className="p-3 my-auto text-center bg-black sm:inline sm:p-0 sm:pt-1">
            <Link className="text-gray-300 hover:text-gray-600" to="/about">About</Link>
          </div>
          <div className="p-3 my-auto text-center bg-black sm:inline sm:p-0 sm:pt-1">
            <Link className="text-gray-300 hover:text-gray-600" to="/media">Media</Link>
          </div>
          <div className="flex justify-center p-3 bg-black sm:inline sm:p-0 sm:pt-1">
            <a href="https://www.youtube.com/channel/UC68e7Wdx29Nun0KRNpFll9w" target="_blank" rel="noopener noreferrer">
              <YouTube className="w-8 h-8 text-gray-300 fill-current" />
            </a>
          </div>
          <div className="flex justify-center p-3 bg-black jus sm:inline sm:p-0 sm:pt-1">
            <a href="https://www.instagram.com/carboy.rocks/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-8 h-8 text-gray-300 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
