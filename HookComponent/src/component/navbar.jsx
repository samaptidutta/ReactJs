import React from 'react'
import {memo} from 'react'


const Navbar = ({adjective , getAdjective}) => {
    console.log("Navbar is render");
    
    return (
    <div>
        I am a {adjective} navbar
        <button>{getAdjective()}</button>
    </div>
    )
}

export default memo(Navbar)
