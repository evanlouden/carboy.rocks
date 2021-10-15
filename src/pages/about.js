import React from "react"
import { graphql, useStaticQuery} from "gatsby"
import Row from "../components/about/row"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {

  const biosData = useStaticQuery(graphql`
    query MyOldQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              bio
              instrument
              name
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
      <SEO title="Carboy | About" />
      {
        biosData.allMarkdownRemark.edges.map((data, index) => {
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
        })
      }
    </Layout>
  )
}

export default About
