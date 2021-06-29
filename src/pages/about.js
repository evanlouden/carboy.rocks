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
<<<<<<< HEAD
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
=======
      <SEO title="About" />
      <div className="max-w-screen-lg mx-auto">
<<<<<<< HEAD
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
=======
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
>>>>>>> bfd9816 (Improve About/Row styling)
          })
        }
      </div>
>>>>>>> f5e169d (Improve About/Row styling)
    </Layout>
  )
}

export default About
