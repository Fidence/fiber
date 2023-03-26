import React from 'react'

const SecondComp = () => {
  return (
    <div className='second'>
       <div className="sec-wrap container">
            <div className="fiberr">
                <h3>why Fiber</h3>
                <h1>A good portfolio means good <br /> empoyability</h1>
            </div>
            <div className="skills">
                <div className="build">
                    <img src="/img/time.svg" alt="" />
                    <h4>Build in minutes</h4>
                    <p>With a slection of premade templete you can build a portfolio in less than 20 minutes</p>
                </div>
                <div className="build">
                    <img src="/img/code.svg" alt="" />
                    <h4>A custom CSS</h4>
                    <p>Customize your personal portfolio even more with the ability to add your own custom CSS styles</p>
                </div>
                <div className="build">
                    <img src="/img/allSizes.svg" alt="" />
                    <h4>Responsive</h4>
                    <p>All fiber teplates are fully responsive to ensure the expirence is seenless across all devices</p>
                </div>
            </div>
       </div>
    </div>
  )
}

export default SecondComp;