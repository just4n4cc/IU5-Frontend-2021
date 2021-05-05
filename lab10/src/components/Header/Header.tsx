import React from "react"
import "./Header.css"
import spy from "./img/spy.svg"
import eye from "./img/eye.svg"

const Header: React.FC = () => {
    return (
        <header>
            <img src={spy} alt=""/>
            <h2>Sneaky search</h2>
            <img src={eye} alt=""/>
        </header>
    );
}

export default Header;