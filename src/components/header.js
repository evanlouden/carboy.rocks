import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Header = ({ siteTitle }) => (
  <header className="bg-black w-full fixed top-0 pin-t shadow-md">
    <div className="sm:mx-auto sm:w-2/3">
      <ul>
        <li id="nav-toggle" className="p-3 sm:hidden text-right">
          <i id="nav-show" className="text-gray-300 hover:text-gray-600 far fa-bars fa-lg"></i>
          <i id="nav-hide" className="text-gray-300 hover:text-gray-600 hidden far fa-times fa-lg"></i>
        </li>
      </ul>
      <ul id="nav-items" className="sm:flex sm:justify-around hidden">
        <li className="sm:inline p-3 sm:p-4 text-center">
          <Link className="text-gray-300 hover:text-gray-600" to="/shows">Shows</Link>
        </li>
        <li className="sm:inline p-3 sm:p-4 text-center">
          <Link className="text-gray-300 hover:text-gray-600" to="/about">About</Link>
        </li>
        <li className="sm:inline p-3 sm:p-4 text-center">
          <Link className="text-gray-300 hover:text-gray-600" to="/media">Media</Link>
        </li>
        <li className="sm:inline p-3 sm:p-4 text-center">
          <a className="text-gray-300 hover:text-gray-600" href="https://www.instagram.com/carboy.rocks/">
            <FontAwesomeIcon className="fa-lg" icon={faInstagram} />
          </a>
        </li>
        <li className="sm:inline p-3 pb-6 sm:p-4 text-center">
          <a className="text-gray-300 hover:text-gray-600" href="https://twitter.com/carboyRocks">
            <FontAwesomeIcon className="fa-lg" icon={faTwitter} />
          </a>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
