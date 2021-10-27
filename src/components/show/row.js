import React from 'react'

const Row = (props) => (
  <tr className="font-thin text-gray-200 border-b border-white" id={props.date}>
    <td className="pt-4 pb-1 pl-3 sm:pl-1">
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
