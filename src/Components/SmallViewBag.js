import React from 'react';
import '../App.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function SmallViewBag(props) {
  const {cartItems, onAdd, onRemove, countCartItems} = props
  const itemsPrice = cartItems.reduce((a, c) => a + c.prices[0].amount * c.qty, 0);
  console.log(cartItems);
  return (
    <div>
        <div className="secCenter"> 	
            <input className="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
            <label className="forDropdown" for="dropdown">
              <AiOutlineShoppingCart size={30}/> {' '}
              {countCartItems ? (
                <button className="badgeNotif">{countCartItems}</button>
              ) : (
                ''
              )}
            </label>{' '}
            <div className="sectionDropdown"> 
              <p className="detailDropdown">{' '}
              {countCartItems ? (
                <p className="countItems"><span>My bag, </span> {countCartItems} items</p>
              ) : (
                ''
              )}
              </p>{' '}
              <div>
                  {cartItems.length === 0 && <div>Cart items empty</div>}
              </div>
              {cartItems.map((item) => (
                <div key={item.brand} className="viewBagDetail">
                  <div className="viewLeft">
                    <p className="viewLeftName">{item.name}</p>
                    <p>${item.prices[0].amount.toFixed(2)}</p>
                  </div>
                  <div className="viewRight">
                    <div className="viewRightButton">
                      <button onClick={()=>onAdd(item)} className="btnAdd">+</button>
                      <p>{item.qty}</p>
                      <button onClick={()=>onRemove(item)} className="btnRemove">-</button>
                    </div>
                    <div>
                      <img src={item.gallery[0]} alt={item.gallery[0]} className="viewImage"/>
                    </div>
                  </div>
                  
                </div>
              ))}
              {cartItems.length !== 0 && (
                <>
                  <div className="viewTotal">
                    Total 
                    <div className="viewTotalAmount">
                      ${itemsPrice.toFixed(2)}
                    </div>
                  </div>
                </>
              )}
              <div className="viewButton">
                <Link to="/viewBag">
                  <button className="btnViewBag">View Bag</button>
                </Link>
                <button type="button" className="btnCheckOut">Check Out</button>
              </div>
            </div>
        </div>
    </div>
  );
}

export default SmallViewBag;
