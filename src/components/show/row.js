import React from 'react'

const Row = (props) => (
  <tr className="text-gray-200 border-b border-white font-thin">
    <td className="pl-3 sm:pl-1 pt-4 pb-1">
      {props.date}
    </td>
    <td className="pt-4 pb-1">
      <a href={`${props.website}`}>{props.venue}</a>
    </td>
    <td className="pt-4 pb-1">
      {props.city}
    </td>
  </tr>
)

export default Row
