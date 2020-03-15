import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import NavToggle from './nav-toggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 shadow-md">
      <div className="sm:mx-auto sm:w-3/4">
        <div className="sm:hidden flex flex-row-reverse">
          <div className="my-auto pr-6" onClick={toggle}>
            <NavToggle isOpen={isOpen} />
          </div>
        </div>
        <div className={`sm:flex sm:justify-around ${isOpen ? "" : "hidden"}`}>
          <div className="bg-black sm:inline text-center my-auto p-3 sm:p-0 sm:pt-1">
            <Link className="text-gray-300 hover:text-gray-600" to="/shows">Shows</Link>
          </div>
          <div className="bg-black sm:inline text-center my-auto p-3 sm:p-0 sm:pt-1">
            <Link className="text-gray-300 hover:text-gray-600" to="/about">About</Link>
          </div>
          <div className="bg-black sm:inline text-center my-auto p-3 sm:p-0 sm:pt-1">
            <Link className="text-gray-300 hover:text-gray-600" to="/media">Media</Link>
          </div>
          <div className="bg-black sm:inline text-center my-auto p-3 sm:p-0 sm:pt-1">
            <a className="text-gray-300 hover:text-gray-600" href="https://www.instagram.com/carboy.rocks/">
              <FontAwesomeIcon className="fa-lg" icon={faInstagram} />
            </a>
          </div>
          <div className="bg-black sm:inline text-center my-auto p-3 pb-4 sm:pb-0 sm:p-0 sm:pt-1">
            <a className="text-gray-300 hover:text-gray-600" href="https://twitter.com/carboyRocks">
              <FontAwesomeIcon className="fa-lg" icon={faTwitter} />
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
