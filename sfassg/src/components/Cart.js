import React from 'react'
import './landingstyle.css';

function Cart(props) {
    return (
        <div>
            <br/>
            <div className="Cart-Wrapper">
                <p className="Cart-details">
                Name: {props.desc} <br/> Quantity : {props.value}
                <br/>
                </p>
            </div>

        </div>
    )
}
export default Cart
