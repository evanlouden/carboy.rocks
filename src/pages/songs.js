import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Songs = () => (
  <Layout>
    <SEO title="Songs" />
    <div className="container max-w-screen-sm p-4 mx-auto">
      <div className="flex flex-col p-4 text-gray-800 bg-gray-200 rounded">
        <div className="flex justify-around">
          <div className="text-2xl text-center">
            Big O
          </div>
        </div>
        <div className="flex mx-auto">
          <audio controls src="http://carboy.rocks/audio/big_o.mp3"></audio>
        </div>
        <div className="flex justify-around">
          <form method="get" action="http://carboy.rocks/charts/big_o_treble.pdf">
            <button className="px-4 py-2 text-white bg-blue-500 border border-gray-600 rounded">
              Treble
            </button>
          </form>
          <form method="get" action="http://carboy.rocks/charts/big_o_bass.pdf">
            <button className="px-4 py-2 text-white bg-blue-500 border border-gray-600 rounded">
              Bass
            </button>
          </form>
        </div>
      </div>
    </div>

    <div className="container max-w-screen-sm p-4 mx-auto">
      <div className="flex flex-col p-4 text-gray-800 bg-gray-200 rounded">
        <div className="flex justify-around">
          <div className="text-2xl text-center">
            Ricksha
          </div>
        </div>
        <div className="flex mx-auto">
          <audio controls src="http://carboy.rocks/audio/ricksha.mp3"></audio>
        </div>
        <div className="flex justify-around">
          <form method="get" action="http://carboy.rocks/charts/ricksha.pdf">
            <button className="px-4 py-2 text-white bg-blue-500 border border-gray-600 rounded">
              Chart
            </button>
          </form>
        </div>
      </div>
    </div>

    <div className="container max-w-screen-sm p-4 mx-auto">
      <div className="flex flex-col p-4 text-gray-800 bg-gray-200 rounded">
        <div className="flex justify-around">
          <div className="text-2xl text-center">
            I5
          </div>
        </div>
        <div className="flex mx-auto">
          <audio controls src="http://carboy.rocks/audio/i5.mp3"></audio>
        </div>
        <div className="flex justify-around">
          <form method="get" action="http://carboy.rocks/charts/i_5_treble.pdf">
            <button className="px-4 py-2 text-white bg-blue-500 border border-gray-600 rounded">
              Treble
            </button>
          </form>
          <form method="get" action="http://carboy.rocks/charts/i_5_bass.pdf">
            <button className="px-4 py-2 text-white bg-blue-500 border border-gray-600 rounded">
              Bass
            </button>
          </form>
        </div>
      </div>
    </div>

    <div className="container max-w-screen-sm p-4 mx-auto">
      <div className="flex flex-col p-4 text-gray-800 bg-gray-200 rounded">
        <div className="flex justify-around">
          <div className="text-2xl text-center">
            Colorado
          </div>
        </div>
        <div className="flex mx-auto">
          <audio controls src="http://carboy.rocks/audio/colorado.mp3"></audio>
        </div>
        <div className="flex justify-around">
          <form method="get" action="http://carboy.rocks/charts/colorado_treble.pdf">
            <button className="px-4 py-2 text-white bg-blue-500 border border-gray-600 rounded">
              Treble
            </button>
          </form>
          <form method="get" action="http://carboy.rocks/charts/colorado_bass.pdf">
            <button className="px-4 py-2 text-white bg-blue-500 border border-gray-600 rounded">
              Bass
            </button>
          </form>
        </div>
      </div>
    </div>

    <div className="container max-w-screen-sm p-4 mx-auto">
      <div className="flex flex-col p-4 text-gray-800 bg-gray-200 rounded">
        <div className="flex justify-around">
          <div className="text-2xl text-center">
            Dirty Spoons
          </div>
        </div>
        <div className="flex mx-auto">
          <audio controls src="http://carboy.rocks/audio/dirty_spoons.mp3"></audio>
        </div>
        <div className="flex justify-around">
        <form method="get" action="http://carboy.rocks/charts/dirty_spoons_treble.pdf">
            <button className="px-4 py-2 text-white bg-blue-500 border border-gray-600 rounded">
              Treble
            </button>
          </form>
          <form method="get" action="http://carboy.rocks/charts/dirty_spoons_bass.pdf">
            <button className="px-4 py-2 text-white bg-blue-500 border border-gray-600 rounded">
              Bass
            </button>
          </form>        </div>
      </div>
    </div>
  </Layout>
)

export default Songs
