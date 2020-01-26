import React from 'react'

const ShowRow = (props) => (
 <div className="text-white border-b border-white flex text-left justify-around">
  <div className="pt-6 text-left">
    {props.date}
  </div>
  <div className="pt-6">
    {props.venue}
  </div>
  <div className="pt-6">
    {props.city}
  </div>
 </div>
)

export default ShowRow
