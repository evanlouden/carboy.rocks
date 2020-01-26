import React from "react"
import Layout from "../components/layout"
import ShowRow from "../components/show-row"
import SEO from "../components/seo"

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/myimage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Shows = () => (
  <Layout>
    <SEO title="Shows" />
    <div className="mx-auto w-full sm:w-2/3">
      <div className="h-32 sm:h-64 mb-8 border-white border-solid border bg-cover bg-center text-center">
        <ShowRow date="14 Jan" venue="Great Scott" city="Allston, MA"/>
        <ShowRow date="20 Jan" venue="Brighton Music Hall" city="Brighton, MA"/>
        <ShowRow date="10 Feb" venue="Mighty Squirrel Brewing" city="Waltham, MA"/>
      </div>
    </div>
  </Layout>
)

export default Shows
