import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";

export default ({ data }) => (
  <section>
    <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="Bahston, MA" />
  </section>
)

export const query = graphql`{
  fileName: file(relativePath: {eq: "images/hero.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 400, height: 250, layout: CONSTRAINED)
    }
  }
}
`
