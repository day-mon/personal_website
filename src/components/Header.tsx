import React from 'react'
import '../styles/Header.css'

const Header = () =>
{
    return (
        <div className="head">
            <ul className="topNav">
                <li><a href="#">.home()</a></li>
                <li><a href={"#"}>.projects() </a></li>
                <li><a href={"#"}>.about() </a></li>
                <li><a href={"#"}>.contact() </a></li>
            </ul>
        </div>
    )
}

export default Header
