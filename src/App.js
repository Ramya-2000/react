import logo from './logo.svg';
import './App.css';

import React from "react"
import ReactDom from "react-dom"

function App() {
  return (
    <header>
      {/* <nav className="nav">
        {/* <img src="./logo.svg" alt="logo" className="nav-logo"/>  */}
         {/* <img src={logo} className="App-logo" alt="logo" /> */}
         {/* <h1>React Learning</h1>
        <ul className="nav-items">
        <li>Pricing</li>
        <li>Contact</li>
        <li>About us</li>
        </ul>
        </nav> */} 
    </header>
  );
}
function MainContent(){
  return (
    <div>
      <h2>Iam excited to learn react</h2>
      <ol>
        <li>It is popular library</li>
        <li>It is not framework</li>
      </ol>
    </div>
  )
}
function Page(){
  return(
    <div>
      <App/>
      <MainContent/>
      </div>
  )
}
ReactDom.render(<Page/>,document.getElementById("root"))


export default App;