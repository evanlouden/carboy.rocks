import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Media = () => {
  const songs = [
    { title: "Mean Man", trackNumber: "1126692349", url: "mean-man-1" },
    { title: "Big O", trackNumber: "1126695559", url: "big-o" },
    { title: "I'm Just a Prisoner", trackNumber: "1126696801", url: "just-a-prisoner"},
    { title: "Colorado", trackNumber: "1126697389", url: "colorado-1" }
  ]

  return (
    <Layout>
      <SEO title="Media" />
      <table className="w-full mx-auto sm:w-2/3 md:w-1/2">
        <tbody>
          {
            songs.map((song) => {
              return (
                <tr className="font-thin text-gray-200" key={ song.trackNumber}>
                  <td className="pt-4 pb-1 pl-3 sm:pl-1">
                    <iframe
                      src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${song.trackNumber}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
                      title={song.title}
                      width="100%"
                      height="166"
                      allow="autoplay"
                      frameBorder="no"
                      scrolling="no"
                    />
                    <div className="font-sans text-sm font-thin text-black break-normal whitespace-nowrap overflow-ellipsis">
                      <a href="https://soundcloud.com/carboy_rocks" title="Evan Louden" target="_blank" className="text-black no-underline" rel="noreferrer">Evan Louden</a> · <a href={`https://soundcloud.com/carboy_rocks/${song.url}`} title={song.title} target="_blank" className="text-black no-underline" rel="noreferrer">{song.title}</a>
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </Layout>
  )
}

export default Media
