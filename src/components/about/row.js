import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from 'prop-types';

const Row = ({ bio, instrument, name, fluid }) => {
  return (
    <div id={name} className="items-center p-6 mx-auto odd:bg-gray-300 even:bg-white md:p-12 sm:flex sm:even:flex-row-reverse">
      <div className="w-full mb-4 sm:mx-10">
        <div className="mb-2 text-center sm:text-left">
          <span className="text-xl text-gray-900">{name}</span>
          <span className="ml-2 text-xs italic">{instrument}</span>
        </div>
        <div className="text-sm text-justify">
          {bio}
        </div>
      </div>
      <div className="w-48 mx-auto">
        <GatsbyImage image={fluid} className="w-full" />
      </div>
    </div>
  );
}

Row.propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  instrument: PropTypes.string,
  fluid: PropTypes.object
};
export default Row
