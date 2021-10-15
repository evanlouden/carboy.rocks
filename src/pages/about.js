import React from "react"
import { graphql, useStaticQuery} from "gatsby"
import Row from "../components/about/row"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {

  const biosData = useStaticQuery(graphql`
    query biosQuery {
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
      <div className="max-w-screen-lg mx-auto">
        <p className="m-4 text-2xl text-white font-extralight">Carboy is a psychedelic funk/soul band based in Boston. Comprised of experienced musicians, they play a mix of original instrumentals and lesser known soul classics from the 60s.</p>
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
