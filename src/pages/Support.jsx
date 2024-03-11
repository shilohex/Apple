import React from 'react'
import Header from '../component/Header/Header'
import './Support.css'
import top from '../assets/supportAsset/asset 0.jpeg'
import top1 from '../assets/supportAsset/asset 1.png'
import top2 from '../assets/supportAsset/asset 2.png'
import top3 from '../assets/supportAsset/asset 3.png'
import top4 from '../assets/supportAsset/asset 4.png'

const Support = () => {
  return (
    <div id='support' >
          <Header bgcol={'white'} txtcol={'black'}/>
          <div>
            <div id='support-top-div'>
            <img id='support-top' src={top} alt="" />

            </div>
            <h1>Apple Support</h1>
            <img src={top1} alt="" />
            <p>iPhone</p>
            <img src={top2} alt="" />
           <p>Mac</p>
            <img src={top3} alt="" />
            <p>iPad</p>
            <img src={top4} alt="" />
            <p>Music</p>


          </div>
    </div>
  )
}

export default Support