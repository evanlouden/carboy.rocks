import React from "react"
import Img from "gatsby-image"

const Row = ({ bio, index, instrument, name, fluid }) => {
  const isEven = number => number % 2 === 0
  const isRowEven = isEven(index)
  const flexDirection = isRowEven ? "sm:flex-row-reverse" : "sm:flex-row"
  const backgroundColor = isRowEven ? "200" : "800"
  const textColor = isRowEven ? "800" : "200"
  const textDirection = isRowEven ? null : "sm:text-right"
  const imageStyle = { "width": "100%" }
  return (
    <div className={`bg-gray-${backgroundColor}`}>
      <div className={`sm:w-2/3 max-w-screen-xl mx-auto py-12 px-4 sm:px-6 sm:py-16 sm:px-8 sm:flex sm:items-center sm:justify-around ${flexDirection}`}>
        <h2 className={`${textDirection} text-gray-${textColor} text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10`}>
          {name}
          <br />
          <span className="text-indigo-600">{instrument}</span>
        </h2>
        <div className="mt-8 flex sm:flex-shrink-0 sm:mt-0">
          <div className="inline-flex rounded-md shadow w-48">
            <Img style={imageStyle} fluid={fluid} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Row
