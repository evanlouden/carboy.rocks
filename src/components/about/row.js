import React from "react"
import Img from "gatsby-image"

const Row = ({ bio, index, instrument, name, fluid }) => {
  const isEven = number => number % 2 === 0
  const isRowEven = isEven(index)
  const flexDirection = isRowEven ? "sm:flex-row-reverse" : "sm:flex-row"
  const imageFlexDirection = !isRowEven ? "sm:justify-start" : "sm:justify-end"
  const textDirection = isRowEven ? "sm:text-left" : "sm:text-right"
  const imageStyle = { "width": "100%" }
  return (
    <div className={`bg-gray-900 border-b border-white md:w-3/4 max-w-screen-xl mx-auto p-8 md:p-12 sm:flex ${flexDirection}`}>
      <div className="mx-auto sm:mx-10 text-center w-1/2 pb-8 sm:py-0">
        <h2 className={`${textDirection} text-gray-100 text-3xl leading-9 font-extrabold sm:text-4xl`}>
          {name}
          <br />
          <span className="text-yellow-500 text-xl">{instrument}</span>
        </h2>
      </div>
      <div className={`mx-auto sm:mx-10 w-1/2 pb-8 sm:py-0 justify-around flex ${imageFlexDirection}`}>
        <div className="inline-flex rounded-md shadow w-48 border border-yellow-500 border-thin">
          <Img className="rounded" style={imageStyle} fluid={fluid} />
        </div>
      </div>
    </div>
  )
}

export default Row
