import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Row from "../components/show/row"
import SEO from "../components/seo"

const Shows = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "trumpet-player.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allShowsCsv {
        edges {
          node {
            id
            venue
            id
            date
            city
            website
          }
        }
      }
    }
  `)

  const showsData = data.allShowsCsv.edges

  return (
    <Layout>
      <SEO title="Shows" />
      <div className="mx-auto w-full sm:w-2/3 md:w-1/2 border-white border">
        <Img className="picture" fluid={data.file.childImageSharp.fluid} />
      </div>
      <table className="mx-auto w-full sm:w-2/3 md:w-1/2">
        <tbody>
          {
            showsData.map((show) => {
              let { id, date, venue, city, website } = show.node
              return (
                <Row key={id} date={date} venue={venue} city={city} website={website} flex />
              )
            })
          }  
        </tbody>
      </table>
    </Layout>
  )
}

export default Shows
