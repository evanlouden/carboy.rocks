import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout"
import Row from "../components/show/row"
import SEO from "../components/seo"

const Shows = () => {
  const data = useStaticQuery(graphql`{
  file(relativePath: {eq: "band_new.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 750, layout: CONSTRAINED)
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
      <div className="w-full max-w-screen-md mx-auto">
        <div className="border border-gray-500">
          <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            className="bg-cover picture filter brightness-75" />
        </div>
        <table className="w-full">
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

      </div>
    </Layout>
  );
}

export default Shows
