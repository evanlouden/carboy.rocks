import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/pro-regular-svg-icons'

const NavToggle = (props) => {
  if (props.isOpen) {
    return <FontAwesomeIcon className="fa-lg text-gray-300" icon={faTimes} />
  } else {
    return <FontAwesomeIcon className="fa-lg text-gray-300" icon={faBars} />
  }
}

export default NavToggle
