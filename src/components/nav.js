import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import NavToggle from './nav-toggle'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="px-4 py-4 mx-auto shadow-md max-w-7xl sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-3/4">
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
