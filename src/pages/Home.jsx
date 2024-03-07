import React from 'react'
import Header from '../component/Header/Header'

const Home = () => {
  return (
    <>
    <div className="top">
      <p>
        Choose another country or region to see content specific to your
        location.
      </p>
      <div>
        <label for="dropdown"></label>
        <select id="dropdown" name="">
          <option value="Nigeria"> Nigeria </option>
          <option value="other country or region">
            other country or region
          </option>
        </select>
      </div>
      <div>continue</div>
    </div>
    <Header />
  </>
  )
}

export default Home