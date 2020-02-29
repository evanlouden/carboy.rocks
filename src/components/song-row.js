import React from 'react'

const SongRow = (props) => (
  <tr className="text-gray-200 border-b border-white font-thin">
    <td className="pt-4 pb-1">
      {props.title}
    </td>
    <td className="pt-4 pb-1">
      {props.chart}
    </td>
    <td className="pt-4 pb-1">
      {props.city}
    </td>
  </tr>
)

export default SongRow
