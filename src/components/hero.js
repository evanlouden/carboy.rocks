import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';

export default function Hero() {
  return (
    <StaticQuery
      query={graphql`
        query HeroQuery {
          fileName: file(relativePath: { eq: "images/hero.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <section>
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Bahston, MA"
          />
        </section>
      )}
    />
  )
}
