import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const Home = () => {
  return (
    <div className="home_main">
        <div className="container d-flex justify-content-around">
            <LeftSide/>
            <RightSide/>
        </div>
    </div>
  )
}

export default Home