import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Row from "../components/about/row"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {

  const biosData = useStaticQuery(graphql`
    query biosQuery {
      file(relativePath: {eq: "band_2.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 750) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      allMarkdownRemark (sort: {
        fields: frontmatter___order,
        order:ASC
      }
    ){
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
                  fluid(maxHeight: 150) {
    								...GatsbyImageSharpFluid
                  }
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
          <Img className="bg-cover picture filter brightness-75" fluid={biosData.file.childImageSharp.fluid} />
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
                  fluid={data.node.frontmatter.image.childImageSharp.fluid}
                />
              )
            }
          })
        }
      </div>
    </Layout>
  )
}

export default About
