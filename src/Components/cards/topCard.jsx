import React from 'react';
import '../../App.css';
import './topCard.css'
import { CartState } from '../../App';
import Tippy from '@tippyjs/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/Slices/CartSlice';
import veg from '../../Assests/images/veg.jpg';
import nonVeg from '../../Assests/images/non-veg.png';

const TopCard = ({ val }) => {

  const { setOpenSnack } = CartState();
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Add to cart function
  const addToCartCall = (val) => {
    dispatch(addToCart(val))
    setOpenSnack({ open: true, html: `${val.strMeal} is added to cart`, severity: "success", time: "800" })
  }
  // Remove from cart function
  const removeFromCartCall = (val) => {
    dispatch(removeFromCart(val))
    setOpenSnack({ open: true, html: `${val.strMeal} is removed from cart`, severity: "success", time: "800" })
  }

  return (
    <div className="topCardContainer" id={val.idMeal}>
      <img src={val.strMealThumb} alt={val.strMeal} width={200} height={200} />
      <div className='details_wrapper'>
        <h2>{val.strMeal}</h2>
        <div className='details'>
          <span className='type'>
            {(val.strCategory.toLowerCase() === "beef" || val.strCategory.toLowerCase() === 'chicken' || val.strCategory.toLowerCase() === "goat" || val.strCategory.toLowerCase() === 'lamb' || val.strCategory.toLowerCase() === 'pork' || val.strCategory.toLowerCase() === 'seafood') ? <img src={nonVeg} alt='non-veg' width={"20px"} height={"20px"} /> : <img src={veg} alt='veg' width={"20px"} height={"20px"} />}
          </span>
          <p style={{ display: "inline" }}>Price: ₹ <span className='wrongPrice'> {val.price + 50}</span> {val.price} </p>
        </div>
        <div>
          {cart.some((p) => p.idMeal === val.idMeal) ?
            <Tippy content='Remove'>
              <button className='delete' aria-label='remove-from-cart' onClick={() => removeFromCartCall(val)}> <i className="fa-solid fa-circle-minus"></i> </button>
            </Tippy> :
            <Tippy content='Add to cart'>
              <button className='add' aria-label='add-to-cart' onClick={() => addToCartCall(val)}>
                <i className="fa-solid fa-cart-plus"></i>
              </button>
            </Tippy>}
          {/* <button className='addToWishlist'>
          <Tippy content='Wishlist'><i className="fa-solid fa-heart"></i></Tippy>
        </button> */}
          <Tippy content='view details'>
            <button className='viewDetails' aria-label='view-details' onClick={() => navigate(`product/${val.idMeal}`)}>
              <i className="fa-solid fa-eye"></i>
            </button>
          </Tippy>
        </div>
      </div>
    </div>

  )
}

export default TopCard