import React from 'react'
import "./Section.css";

const Section = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
            <h1>How the app works</h1>
            <div className="section_content">
                <img src="./tel.png" alt="" />
                <div className="section_content-text">
                <h3>Create an account</h3>
                <h4>Create/login to an existing account to get started</h4>
                <p>An account is created with your email and a desired password</p>
                </div>
            </div>
            <div className="section_content_2">                <div className="section_content-text">
                <h3>Explore varieties</h3>
                <h4>Shop for your favorites meal as e dey hot.</h4>
                <p>Shop for your favorite meals or drinks and enjoy while doing it.</p>
                </div>
                <img src="./tel1.png" alt="" />
            </div>
            <div className="section_content">
                <img src="./tel2.png" alt="" />
                <div className="section_content-text">
                <h3>Checkout</h3>
                <h4>When you done check out and get it delivered.</h4>
                <p>When you done check out and get it delivered with ease.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Section
