import React, { useEffect } from 'react';
import { CartState } from '../../App';
import '../cart/Cart.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQTY, increaseQTY } from '../../redux/Slices/CartSlice';


const CartCard = () => {

     const navigate = useNavigate();

     // Importing state from context
     const { open, setOpen, logged, setOpenSnack, total, setTotal } = CartState();
     const cart = useSelector(state => state.cart.cart);
     const dispatch = useDispatch();

     useEffect(() => {
          var sum = cart.reduce((acc, val) => acc + (val.price * val.qty), 0);
          setTotal(sum);
     }, [cart, setTotal])

     const checkout = () => {
          if (logged === false) {
               setOpenSnack({ open: true, html: `You are not logged in! Please login first.`, severity: 'error', time: "1500" })
          } else {
               navigate('/checkout');
          }
     }

     const increase = (val) => {
          dispatch(increaseQTY({ idMeal: val.idMeal, qty: val.qty + 1 }))
     }

     const decrease = (val) => {
          dispatch(decreaseQTY({ idMeal: val.idMeal, qty: val.qty - 1 }))
     }

     const remove = (val) => {
          setOpen({ open: true, html: `Are your to remove "${val.strMeal}" from cart ?`, type: "trash", value: val })
     }

     return (
          <div id="cartCardContainer">
               <div id="cartList">

                    {/* Mapping to print the items in carts */}
                    {cart.length !== 0 && cart.map((val, index) => {
                         return <div key={index} className="cartProductContainer">
                              <div className='cartProductDetails'>
                                   <img src={val.strMealThumb} alt={val.strMeal} width={200} height={120} />
                                   <h3> {val.strMeal}</h3>
                              </div>
                              <div className='cartProductPrice'>
                                   <p className='price'> Price: ₹ <span>{val.price}</span></p>
                                   <p className='itemPrice'>Item Price: ₹ <span>{val.price * val.qty}</span></p>
                              </div>
                              <div className="cartProductQuantity">
                                   <div className='quantity'>
                                        <i className="fa-solid fa-circle-minus" onClick={() => decrease(val)} />
                                        {val.qty}
                                        <i className="fa-solid fa-circle-plus" onClick={() => increase(val)} />
                                   </div>
                                   <div className='deleteItem'>
                                        <Tippy content='delete from cart' placement="left">
                                             <i class="fa-solid fa-trash-can" onClick={() => remove(val)}></i>
                                        </Tippy>
                                   </div>
                              </div>
                         </div>
                    })}
               </div>

               {/* For Total Sum and Checkout */}

               <div id="total">
                    <div>
                         <button className='clear' onClick={() => {
                              setOpen({ ...open, open: true, html: "Are you sure to empty your cart ?", type: "empty" })
                         }}> Empty Cart </button>
                    </div>
                    <div>
                         <h2>Total: ₹{total}</h2>
                         <button className='checkout' onClick={checkout}> Proceed to Checkout </button>
                    </div>
               </div>

          </div>
     )
}

export default CartCard;

