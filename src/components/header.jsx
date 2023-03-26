import React from 'react'
import { useState } from 'react';


const HeaderComp = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <header>
        <div className="nav container">
                <div className="logo">
                    <h2>Fiber</h2>
                </div>
          <div className="navbar">
                <div className="nav-wrap">
                    <ul className="nav-link">
                        <li className="nav-item">Community</li>
                        <li className="nav-item">Pricing</li>
                        <li className="nav-item">Features</li>
                    </ul>
                </div>
                <div className="signin_up">
                    <span>Sign in</span>
                    <button className='signup'>Sign Up</button>
                </div>
          </div>
          <div className='bar' onClick={handleShow}><img src="/img/Hamburger Menu.svg" alt="" /></div>
        </div>
         {
            show &&
            (<div className="navbar_max" onClick={handleShow}>
                <div className="nav-wrap">
                    <ul className="nav-link" >
                        <li className="nav-item">Community</li>
                        <li className="nav-item">Pricing</li>
                        <li className="nav-item">Features</li>
                    </ul>
                <div className="signin_up">
                    <span className='signup'>SignIn</span>
                    <span className='signup'>SignUp</span>
                </div>
                </div>
          </div>)
         }
    </header>
  )
}

export default HeaderComp;