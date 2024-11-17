import React from 'react'
import { Navbar } from './Navbar'

const Loader = () => {
  return (
    

    <div className="flex align-middle flex-col justify-center h-screen ">

      <Navbar picture={1} />
      <div className="flex flex-col justify-center align-middle items-center h-screen bg-white ">
        <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 24 24"><circle cx="4" cy="12" r="3" fill="#2f80ed"><animate id="svgSpinners3DotsBounce0" attributeName="cy" begin="0;svgSpinners3DotsBounce1.end+0.25s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle><circle cx="12" cy="12" r="3" fill="#2f80ed"><animate attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle><circle cx="20" cy="12" r="3" fill="#2f80ed"><animate id="svgSpinners3DotsBounce1" attributeName="cy" begin="svgSpinners3DotsBounce0.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".33,.66,.66,1;.33,0,.66,.33" values="12;6;12"/></circle></svg>
      
        <div className="pt-5 font-mono">
          <h1 className=" text-5xl md:text-6xl font-semibold font-mono text-gray-700">Verifying</h1>
        </div>
      </div>

      
    </div>

  )
}

export default Loader

