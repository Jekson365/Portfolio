import React, { useContext, useEffect } from 'react'
import './sidebar.css'
import { useState } from 'react'
import { UserContext } from '../../App'



export const Navigation = () => {

    const { activeNavItem, setNavItem } = useContext(UserContext)
    const {contact,setContact} = useContext(UserContext)
    const [select, setSelect] = useState()
    

    const navItems = [
        {
            id: 1,
            name: "Intro",
        },
        {
            id: 2,
            name: "About Me",
        },
        {
            id: 3,
            name: "Skills",
        },
        {
            id: 5,
            name: "Projects",
        },
    ]
    const handleNavItem = (e) => {
        setNavItem(e.target.id)


    }



    return (
        <>
            <div className='nav-container'>
                <div className='logo'>
                    <h1 className='c-white name'><span style={{"color":"#1cd6cd"}}>J</span>eko</h1>
                </div>
                <div className='nav-items'>
                    {navItems.map((single) => {
                        return (
                            <>
                                <li className='nav-item'><a href='#'
                                    onClick={handleNavItem} id={single.id}>{single.name}</a></li>
                            </>
                        )
                    })}
                </div>
                <div className='contact'>
                    <h5 className='c-white' onClick={()=>setContact(!contact)}>Contact me</h5>
                </div>
            </div>
        </>
    )
}
