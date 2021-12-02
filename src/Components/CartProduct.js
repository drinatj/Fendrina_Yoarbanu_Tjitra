import React from "react";
import '../App.css';
import Common from '../Assets/Common.png';

const CartProduct = ({name, currency, amount, images})=>{
    return(
        <div> 
            <div className="contItems">
                <img src={images} alt={name} className="pictItems"/>
                <img src={Common} alt="yui" className="hiddenIcon"/>
                <p>{name}</p>
                <p>{currency} {amount}</p>
            </div>
        </div>
    )
};

export default CartProduct;