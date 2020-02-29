import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import NavToggle from '../components/nav-toggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="w-full sm:fixed shadow-md">
      <div className="sm:mx-auto sm:w-2/3">
        <ul className="h-16 sm:hidden flex flex-row-reverse">
          <li className="my-auto pr-6" onClick={toggle}>
            <NavToggle isOpen={isOpen} />
          </li>
        </ul>
        <ul className={`h-16 sm:flex sm:justify-around ${isOpen ? "" : "hidden"}`}>
          <li className="bg-black sm:inline text-center my-auto p-3 sm:p-0 sm:pt-1">
            <Link className="text-gray-300 hover:text-gray-600" to="/shows">Shows</Link>
          </li>
          <li className="bg-black sm:inline text-center my-auto p-3 sm:p-0 sm:pt-1">
            <Link className="text-gray-300 hover:text-gray-600" to="/about">About</Link>
          </li>
          <li className="bg-black sm:inline text-center my-auto p-3 sm:p-0 sm:pt-1">
            <Link className="text-gray-300 hover:text-gray-600" to="/media">Media</Link>
          </li>
          <li className="bg-black sm:inline text-center my-auto p-3 sm:p-0 sm:pt-1">
            <a className="text-gray-300 hover:text-gray-600" href="https://www.instagram.com/carboy.rocks/">
              <FontAwesomeIcon className="fa-lg" icon={faInstagram} />
            </a>
          </li>
          <li className="bg-black sm:inline text-center my-auto p-3 pb-4 sm:pb-0 sm:p-0 sm:pt-1">
            <a className="text-gray-300 hover:text-gray-600" href="https://twitter.com/carboyRocks">
              <FontAwesomeIcon className="fa-lg" icon={faTwitter} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
