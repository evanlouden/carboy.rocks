import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default ({ data }) => (
  <section>
    <Img
      fluid={data.file.childImageSharp.fluid}
      alt="Bahston, MA"
    />
  </section>
)

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
