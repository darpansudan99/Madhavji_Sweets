import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartState } from '../../App';
import './Checkout.css';
import checkout from '../../Assests/checkout.gif';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../redux/Slices/CartSlice';


const Checkout = () => {
  const { userName, total } = CartState();
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const reset = () => {
    dispatch(clearCart);
    navigate('/menu');
  }

  return (
    <div id="checkout">
      <img src={checkout} alt='success' />
      <h1> {`${userName} Thank you For your order!`} </h1>
      <h3> {`You have ordered ${cart.length} items worth price ₹${total}`} </h3>
      <button onClick={reset}> Continue Shopping <i class="fa-solid fa-bag-shopping"></i></button>
    </div>
  )
}

export default Checkout
