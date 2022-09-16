import React from 'react'

const Header = () => {
  return (
    <>
    <div className="main d-flex justify-content-between">
        <div className="fast_side d-flex align-content-center" > 
        <div className="bar_logo ">
            <img src="https://online.visual-paradigm.com/repository/images/ad24bb02-cbb9-45de-ad90-9cd29356fad6/logos-design/neon-bar-logos.png" alt="bar logo" />
        </div>
        <div className="short_info">
            <h1>Bar</h1>
            <p>78 Sazz Street, India</p>
            <h6><span className="badge bg-success">Open</span></h6>
        </div>
        </div>
        <div className="mid_side text-center ">
            <img src="https://d1uxq5uu95as1y.cloudfront.net/covers/3bd8570f2d74094c_Screen-Shot-2021-03-10-at-3.08.11-PM.png" alt="img" />
        </div>
        <div className="third_side"></div>
    </div>
    
    </>
  )
}

export default Header