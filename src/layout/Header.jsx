import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <div>
            <div className='box'>
                <Link to="/" className="logo_1">EZYROX</Link>
                <Link to="/">HOME</Link>
                <Link to="/Sport">SPORT</Link>
                <Link to="/Kampyuter">KAMPYUTER</Link>
                <Link to="/Cart" className='icon-btn'>🛒</Link>
                <Link to="/Likes">❤️</Link>
            </div>

        </div>
    )
}
