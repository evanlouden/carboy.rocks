import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return(
    <Layout>
    <SEO title="Home" />
      <div className="h-screen bg-cover bg-center text-center Hero">
        <div className="text-black pt-32 sm:pt-48 text-4xl sm:text-6xl logo-font">
          Carboy
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
