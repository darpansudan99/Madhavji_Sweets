
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Cart.css';

import CartCard from '../cards/CartCard';
import empty from '../../Assests/images/empty-cart.png';

const Cart = () => {
  const cart = useSelector(state => state.cart.cart);

  return (
    <div id="cartContainer">
      <div className="container">
        {cart.length !== 0 && <h2> Items in your cart - ({cart.length}) </h2>}
        <div id="cartListContainer">
          {cart.length === 0 ? <div className="emptyCartContainer">
            <img src={empty} alt='Empty Cart' width={"200px"} height={"200px"} />
            <Link to="/menu" className="continueShopping"><button>Continue Shopping <i className="fa-solid fa-bag-shopping"></i></button></Link>
          </div>
            : <CartCard />}
        </div>
      </div>
    </div>
  )
}

export default Cart
