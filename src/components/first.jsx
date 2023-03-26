import React from 'react'

const FirstComp = () => {
  return (
    <div className='first'>
        <div className="container">
           <div className="left">
                <div className="rating">
                    <div className="stars">
                        <img src="/img/star.svg" alt="" />
                        <img src="/img/star.svg" alt="" />
                        <img src="/img/star.svg" alt="" />
                        <img src="/img/star.svg" alt="" />
                        <img src="/img/star.svg" alt="" />
                    </div>
                    <span> Rated 4.8/5 (reviews)</span>
                </div>
                <div className="creat">
                    <h1 className='header-creat'>Create your portfolio in minutes</h1>
                    <p className='creat-txt'>With fiber, you can setup your own personal portfolio in minutes <br />with dozens of premade, beautiful templates</p>
                </div>
                <div className="free">
                    <button className='btn-start'>Start Free Trials</button>
                    <button className='btn-view'>View Examples</button>
                </div>
                <div className="check">
                    <div className="check-flex">
                        <img src="/img/Checkmark.svg" alt="" />
                        <span>No Credit Required</span>
                    </div>
                    <div className="check-flex">
                         <img src="/img/Checkmark.svg" alt="" />
                        <span>10 Free Templates</span>
                    </div>
                </div>
           </div>
           <div className="right">
         
            <img src="/img/hero.png" alt="" />
           </div>
        </div>

    </div>
  )
}

export default FirstComp;