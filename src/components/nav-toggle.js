import React from 'react'
import Bars from './../images/svgs/bars.svg';
import Times from './../images/svgs/times.svg';

const NavToggle = (props) => {
  if (props.isOpen) {
    return <Times className="w-8 h-8 text-gray-300 fill-current" />
  } else {
    return <Bars className="w-8 h-8 text-gray-300 fill-current" />
  }
}

export default NavToggle
