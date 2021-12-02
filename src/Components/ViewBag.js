import React from 'react';
import '../App.css';

function ViewBag(props) {
    const {cartItems, onAdd, onRemove} = props
    const itemsPrice = cartItems.reduce((a, c) => a + c.prices[0].amount * c.qty, 0);
    console.log(cartItems);
    return (
      <div>
        <h1 className="cartTitle">Cart</h1>
        <div>
            {cartItems.length === 0 && <div>Cart items empty</div>}
        </div>
        {cartItems.map((item) => (
          <div key={item.brand} className="cartViewBag">
            <div className="cartLeft">
              <h5 className="cartName">{item.name}</h5>
              <div className="cartAmount">
              ${item.prices[0].amount.toFixed(2)}
              </div>
            </div>
            <div className="cartRight">
              <div className="cartButton">
                <button onClick={()=>onAdd(item)} className="btnAdd">+</button>
                <p>{item.qty} </p>
                <button onClick={()=>onRemove(item)} className="btnRemove">-</button>
              </div>
              <div >
                <img src={item.gallery[0]} alt={item.brand} className="cartImage"/>
              </div>
            </div>
            
          </div>
        ))}
        {cartItems.length !== 0 && (
          <> 
            <div className="cartTotal">
              Total ${itemsPrice.toFixed(2)}
            </div>
          </>
        )}
        <div className="cartCheckout">
          <button className="cartBtnCheckout">Check Out</button>
        </div>
      </div>
    );
}

export default ViewBag;
