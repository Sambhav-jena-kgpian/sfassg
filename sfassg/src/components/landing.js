import React from 'react'
import './landingstyle.css';
import eshopping from './eshopping.jpg'

function Landing(){
    return(
        <section class="LandingPage">
            <img src={eshopping} alt="pic" width="100%" height="auto"/>
        <section class="mainpart">
                <h1 className="heading-main">EXPLORE OUR COLLECTION!</h1>
                <a href="/category" className="categories">ELECTRONICS</a><br/><br/><br/>
                <a href="/" className="categories">CLOTHING</a><br/><br/><br/>
                <a href="/" className="categories">SPORTS EQUIPMENT</a><br/><br/>
                <a href="/" className="categories">HOUSE NEEDS</a>
            </section>
        </section>
    )
}
export default Landing