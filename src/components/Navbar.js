import { faHeadphones } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './Style.css'
import {FontAwesomeIcon} from "@fortawesome/fontawesome-svg-core"

function Navbar() {
  return (
    <div className='Navbar'>
        <div className="nav-left">
        <i className="Lefticon fa-solid fa-headphones-simple fa-3x"></i>
        </div>
        
        <div className="nav-center">
            <h4>JS Music Player</h4>
        </div>
        <div className="nav-right">
            <i className=" NavleftIcon fa-brands fa-square-facebook"></i>
            <i className=" NavleftIcon fa-brands fa-square-github"></i>
            <i className=" NavleftIcon fa-brands fa-square-instagram"></i>
            <i className=" NavleftIcon fa-brands fa-square-twitter"></i>
        </div>

    </div>
  )
}

export default Navbar