import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Media = () => (
  <Layout>
    <SEO title="Media" />
    <table className="mx-auto w-full sm:w-2/3 md:w-1/2">
      <tbody>
        <tr className="text-gray-200 font-thin">
          <td className="pl-3 sm:pl-1 pt-4 pb-1">
            <div className="video-responsive">
              <iframe width="420" height="315" src="https://www.youtube.com/embed/IPvajoeQtaI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </td>
        </tr>
        <tr className="text-gray-200 font-thin">
          <td className="pl-3 sm:pl-1 pt-4 pb-1">
            <div className="video-responsive">
              <iframe width="420" height="315" src="https://www.youtube.com/embed/sKRU8dEZhmY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>          
            </div>
          </td>
        </tr>
        <tr className="text-gray-200 font-thin">
          <td className="pl-3 sm:pl-1 pt-4 pb-1">
            <div className="video-responsive">
              <iframe width="420" height="315" src="https://www.youtube.com/embed/b_iwICwyOB4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>          
            </div>
          </td>
        </tr>
        <tr className="text-gray-200 font-thin">
          <td className="pl-3 sm:pl-1 pt-4 pb-1">
            <div className="video-responsive">
              <iframe width="420" height="315" src="https://www.youtube.com/embed/TXvKnKaNdeI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>          
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </Layout>
)

export default Media