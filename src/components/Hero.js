import React from "react"


import img from "../image/pics.jpeg"


export default function Hero() {
    return (
        <section>
            <img src={img} alt="react" class="center" className="hero--photo" />
            <h1 className="hero--header"> React Learning </h1>
            <ul className="hero--text">
            <li>React is an opensource javascript library.</li>
            <li>It is not a framework</li>
            <li>It is used for building user interfaces based on UI components for the single page application.</li>
            <li>Handling the view layer of web and mobile application</li>
             <li>Mainly used for interactive elements on website</li>
             <li>Reactjs updates only the virtual DOM.</li>
            </ul>
        </section>
    )
}

