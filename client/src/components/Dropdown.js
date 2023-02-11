import './dropdown.css'

const Dropdown = () => {
  return (
    <div id="main-container">
      <div className="nav-container">
        <button id="dropbtn">
          <img src="https://i.imgur.com/SJrcrXD.png" id="menu-icon" />
          <div className="dropdown-content">
            <a href="" className="link">
              Home
            </a>
            <a href="" className="link">
              Projects
            </a>
            <a
              href="https://docs.google.com/document/d/1_FKt7qs3go3Jn7wIjhF_2AOn-wExzJa3toUnjQn5BlI/edit"
              className="link"
            >
              Resume
            </a>
            <a href="" className="link">
              About Me
            </a>
            <a href="" className="link">
              Message Board
            </a>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Dropdown
