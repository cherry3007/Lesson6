import React from 'react'
import "./Footer.css";


const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
        <div className="footer_content">
                    <h1>Download the app now.</h1>
                    <h4>Available on your favorite store. Start your premium experience now</h4>
                    <button className="play">Playstore</button>
                    <button className='app'>App store</button>
                </div>
                <nav className="nav">
                    <img src="./logo.png" alt="" />
                    <img src="./sociaaal.png" alt=""  className='social'/>
                    <p>Copywright 2020 Bella Onojie.com</p>
                </nav>
        </div>
      </footer>
    </div>
  )
}

export default Footer
