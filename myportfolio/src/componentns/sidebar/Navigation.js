import React from 'react'
import './sidebar.css'
import { useState } from 'react'

export const Navigation = () => {

    const [activeNavItem, setNavItem] = useState("")

    const navItems = [
        "Intro",
        "About Me",
        "Skills",
        "Experience",
        "Projects"
    ]
    const handleNavItem = (e) => {
        setNavItem(e.target)
    }
    
    
    return (
        <>
            <div className='nav-container'>
                <div className='logo'>
                    <h1 className='c-white name'>Jeko</h1>
                </div>
                <div className='nav-items'>
                    {navItems.map((single) => {
                        return (
                            <>
                                <li className='nav-item' onClick={handleNavItem}><a href='#'>{single}</a></li>
                            </>
                        )
                    })}
                </div>
                <div className='contact'>
                    <h5 className='c-white'>Contact me</h5>
                </div>
            </div>
        </>
    )
}
