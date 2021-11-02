import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Row from "../components/about/row"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {

  const biosData = useStaticQuery(graphql`query biosQuery {
  file(relativePath: {eq: "band_2.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 750, layout: CONSTRAINED)
    }
  }
  allMarkdownRemark(sort: {fields: frontmatter___order, order: ASC}) {
    edges {
      node {
        id
        frontmatter {
          bio
          instrument
          name
          publish
          order
          image {
            childImageSharp {
              gatsbyImageData(height: 150, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
}
`)

  return (
    <Layout>
      <SEO title="About" />
      <div className="w-full max-w-screen-md mx-auto">
        <div className="border border-gray-500">
          <GatsbyImage
            image={biosData.file.childImageSharp.gatsbyImageData}
            className="bg-cover picture filter brightness-75" />
        </div>

        <p className="px-4 py-6 text-xl text-white font-extralight">Carboy is a jazz-funk and soul band from Boston. They play a mix of original instrumentals and lesser known soul classics from the 60s. While new to each other, the members of Carboy bring years of experience playing shows all over the USA. Their high-energy grooves and inspired improvisation is sure to get people on their feet.</p>
        {
          biosData.allMarkdownRemark.edges.map((data, index) => {
            if (data.node.frontmatter.publish) {
              return (
                <Row
                  key={data.node.id}
                  index={index}
                  bio={data.node.frontmatter.bio}
                  name={data.node.frontmatter.name}
                  instrument={data.node.frontmatter.instrument}
                  fluid={data.node.frontmatter.image.childImageSharp.gatsbyImageData}
                />
              );
            }
          })
        }
      </div>
    </Layout>
  );
}

export default About
