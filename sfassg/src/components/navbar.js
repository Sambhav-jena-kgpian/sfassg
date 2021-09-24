import React from 'react'
import './landingstyle.css';

function Navbar() {
    return (
        <section className="navbar">
            <ul className="header">
                <li><a href="/">Feedback</a></li>
                <li><a href="/">Wishlist</a></li>
                <li><a href="/">Specials</a></li>
                <li><a href="/">Home</a></li>
            </ul>
        </section>
    )
}
export default Navbar
