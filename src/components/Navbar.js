import React from "react"

import logoImg from "../logo.svg"


export default function Navbar() {
    return (
        <nav>
            <img src={logoImg} alt="logo" className="nav--logo" />
            <span>Reactjs</span>

        </nav>

    )


}