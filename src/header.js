// import logo from './logo.svg';
import './App.css';
import React from "react"
import ReactDom from "react-dom"

function Header() {
  return (
      <nav className="nav">
      {/* <img src="./logo.svg" alt="logo" className="nav-logo"/>  */}
       {/* <img src={logo} className="App-logo" alt="logo" /> */}
       <h1>React Learning</h1>
      <ul className="nav-items">
      <li>Pricing</li>
      <li>Contact</li>
      <li>About us</li>
      </ul>
      </nav>

  );
}

function Page(){
  return(
    <div>
      <Header/>
      </div>
  )
}
ReactDom.render(<Page/>,document.getElementById("root"))


export default Header;