
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { CartState } from '../../App';
import { addToCart, decreaseQTY, increaseQTY, removeFromCart } from '../../redux/Slices/CartSlice';
import '../product/Product.css';


const Product = () => {
    const params = useParams();
    const id = params.ID;

    const { setOpenSnack } = CartState();
    const state = useSelector(state => state.cart);
    const dispatch = useDispatch();

    let quan = 0;

    const [val, setVal] = useState();

    useEffect(() => {
        state.products.forEach((val) => {
            if (val.idMeal === id)
                setVal(val)
        })
    }, [id, state.products])

    useEffect(() => {
        window.scrollTo({
            top: 0, behavior: "smooth"
        })
    }, [])

    return (
        <>
            {val !== undefined && <>
                <Box id="productContainer">
                    <button onClick={() => window.history.go(-1)}> <i className="fa-solid fa-arrow-left" />  Go back</button>
                    <div id='detail'>
                        <div>
                            <img src={val.strMealThumb} alt={val.strMeal} />
                        </div>
                        <div id='detailsProd'>
                            <Typography sx={{ fontSize: "2rem" }} variant="h3"> {val.strMeal}</Typography>
                            <Typography sx={{ fontSize: "1.5rem" }} variant="h3"> Price: ₹{val.price} <span className='wrongPrice'>{val.price + 50}</span> </Typography>
                            <div className='quantity'>
                                Quantity: {state.cart.some((p) => p.idMeal === val.idMeal) ? <> <i className="fa-solid fa-circle-plus" onClick={() => {
                                    dispatch(increaseQTY({ idMeal: val.idMeal, qty: quan + 1 }))
                                }} />
                                    {state.cart.forEach((p) => { if (p.idMeal === val.idMeal) quan = p.qty })}
                                    {quan !== null && quan}
                                    <i className="fa-solid fa-circle-minus" onClick={() => {
                                        dispatch(decreaseQTY({ idMeal: val.idMeal, qty: quan - 1 }))
                                    }} />
                                </> : 0}
                            </div>
                            <Typography variant='h6'> Area: {val.strArea} </Typography>
                            <Typography variant='h6'> Tags: {val.strTags} </Typography>
                            {quan === 0 ? <button className='addtoCart' onClick={() => {
                                dispatch(addToCart(val))
                                setOpenSnack({ open: true, html: `${val.strMeal} is added to cart`, severity: "success", time: "800" })
                            }} > Add to Cart</button> : <button className='remove' onClick={() => {
                                dispatch(removeFromCart(val))
                                setOpenSnack({ open: true, html: `${val.strMeal} is removed from cart`, severity: "success", time: "800" })
                            }}> Remove from Cart</button>}
                            {val.strSource && <Typography element='button'><a href={val.strSource} target='blank' className="link"> Know More</a> </Typography>}
                        </div>
                    </div>
                    <div id="more">
                        <p id='instruction'> {val.strInstructions}</p>
                        <iframe src={val.strYoutube} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </Box>
            </>}

        </>
    )
}

export default Product


