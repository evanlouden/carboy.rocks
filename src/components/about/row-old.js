import React from 'react'
import Img from "gatsby-image"

const RowOld = ({bio, index, instrument, name, fluid}) => {
  const isEven = (number) => number % 2 === 0
  const isRowEven = isEven(index)
  const flexDirection = isRowEven ? "md:flex-row-reverse" : "md:flex-row"
  const textDirection = isRowEven ? null : "sm:text-right"
  return (
    <div className="sm:flex justify-center sm:p-8 bg-blue-900">
      <div className={`md:w-2/3 md:flex items-center ${flexDirection}`}>
        <div className="md:w-2/3 sm:inline h-full px-6 py-4 text-gray-200">
          <div className={`${textDirection}`}>
            <div className="font-bold uppercase text-lg inline">
              {name}
            </div>
            <div className="text-sm italic inline ml-2">{instrument}</div>          
          <p className="font-thin text-gray-200">
            {bio}
          </p>
          </div>
        </div>
        <div className="md:w-1/3 sm:inline h-full">
          <Img fluid={fluid} />
        </div>
      </div>
    </div>
  )
}

export default RowOld
