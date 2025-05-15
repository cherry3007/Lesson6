import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <div>
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <img src="./logo.png" alt="" />
                    <ul>
                        <li>Home</li>
                        <li>Product</li>
                        <li>Faq</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div className="header-content">
                    <h3>Food app</h3>
                    <h1>Why stay hungry when you can order form Bella Onojie</h1>
                    <h4>Download the bella onoje’s food app now on</h4>
                    <button className="play">Playstore</button>
                    <button className='app'>App store</button>
                    <img src="./phone.png" alt="" className='img'/>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header