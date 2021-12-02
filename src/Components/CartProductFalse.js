import React from "react";
import '../App.css';

const CartProductFalse = ({name, currency, amount, images})=>{
    return(
        <div> 
            <div className="contItems">
                <img src={images} alt={name} className="pictItems"/>
                <div className="pictItemsFalse">
                    <h2 className="textFalse">OUT OF STOCK</h2>
                </div>
                <p>{name}</p>
                <p>{currency} {amount}</p>
            </div>
        </div>
    )
};

export default CartProductFalse;