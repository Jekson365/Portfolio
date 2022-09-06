import React, { useState } from 'react'
import { useContext } from 'react'
import { FaBeer, FaPhoneSquareAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { UserContext } from '../../App'

export const Contact = () => {
    const { contact } = useContext(UserContext)
    return (
        <>
            <div className={contact ? "contact-box contact-box-active" : "contact-box"}>
                <h3>Contact Me</h3>
                <input type='text' value="jemali.ergemlidze.1@btu.edu.ge" />
                <textarea placeholder="text..." rows='10'></textarea>
                <button type='button'>Send</button>
                <div className='more'>
                    <div className='phone'>
                        <FaPhoneSquareAlt />
                        +995 557 98 37 61
                    </div>
                    <div className='linkedin'>
                        <FaLinkedin />
                        <a href='https://www.linkedin.com/in/jemiko-199730225/'>Jemiko.</a>
                    </div>
                    <div className='email'>
                        <FaEnvelope/>
                        Jemali.ergemlidze.1@btu.edu.ge
                    </div>
                </div>
            </div>

        </>
    )
}
