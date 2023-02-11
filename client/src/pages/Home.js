import React from 'react'
import './home.css'
import '../components/Dropdown.js'

const Home = () => {
  return (
    <div className="home-maincontainer">
      <div className="maincontent-container">
        <div className="nameintro-container">
          <div className="name-intro">M</div>
          <div className="name-intro">A</div>
          <div className="name-intro">R</div>
          <div className="name-intro">I</div>
          <div className="name-intro">D</div>
          <div className="name-intro">I</div>
          <div className="name-intro">L</div>
          <div className="name-intro">I</div>
          <div className="name-intro">G</div>
        </div>
        <div className="jobtitlelocation-container">
          <span className="jobtitlelocation-text" id="span-jobtitle">
            FRONTEND DEVELOPER
          </span>
          <span className="jobtitlelocation-text" id="span-location">
            AUSTIN, TX
          </span>
        </div>
      </div>

      <footer>
        <a>
          <img
            src="https://i.imgur.com/ow2FdBI.png"
            className="icon"
            id="linkedin-img"
          />
        </a>
        <a>
          <img
            src="https://i.imgur.com/CwI2Iw4.png"
            className="icon"
            id="email-img"
          />
        </a>
        <a>
          <img
            src="https://i.imgur.com/nby3U8A.png"
            className="icon"
            id="github-img"
          />
        </a>
        <a>
          <img
            src="https://i.imgur.com/IHAuel0.png"
            className="icon"
            id="messageboard-img"
          />
        </a>
        <a>
          <img
            src="https://i.imgur.com/4P8qTgM.png"
            className="icon"
            id="call-img"
          />
        </a>
      </footer>
    </div>
  )
}

export default Home
