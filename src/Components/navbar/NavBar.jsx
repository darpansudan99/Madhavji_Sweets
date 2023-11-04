import Tippy from '@tippyjs/react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartState } from '../../App';
import '../../App.css';
import './Nav.css';
import madhavji from '../../Assests/images/madhavji.jpg';


const NavBar = ({ theme, setTheme }) => {

    const { logged, setLogged, userName } = CartState();
    const cart = useSelector(state => state.cart.cart);
    // State for navbar toggle
    const [toggle, setToggle] = useState(false);
    // Dark Mode switch function
    const dark = () => {
        theme === "light" ? setTheme("darkTheme") : setTheme("light")
        hideNav()
    }
    // Hide navbar function on mobile screen
    const hideNav = () => {
        setToggle(false);
    }

    return (
        <div id="navContainer">
            <div className="container">
                <header className="header">
                    <div className="logo">
                        <Link to="/"><img src={madhavji} alt="logo" width={'200px'} height={"50px"} /> </Link>
                    </div>
                    <nav className='navbar'>
                        <Link to="/"><h1 >Home</h1></Link>
                        <Link to="/about"><h1>About</h1></Link>
                        <Link to="/menu"><h1>Our Menu</h1></Link>
                        <a href='#footerContainer'><h1>Contact</h1></a>
                    </nav>
                    <div className='options'>
                        {logged ? <Tippy content="logout">
                            <div className='logged_in'>
                                <h1 onClick={() => setLogged(false)} > <i className="fa-solid fa-right-from-bracket"></i> </h1>
                                <span style={{ fontSize: "1.1rem", paddingLeft: ".2rem", alignSelf: "center" }}>{userName}</span>
                            </div>
                        </Tippy>
                            : <>
                                <Tippy content="login">
                                    <Link to="/login"><h1 onClick={hideNav}> <i className="fa-solid fa-right-to-bracket"></i> </h1></Link>
                                </Tippy>
                                <Tippy content="create account">
                                    <Link to="/create"><h1 onClick={hideNav}> <i className="fa-solid fa-user-plus"></i></h1></Link>
                                </Tippy></>}
                        <Tippy content="theme switcher">
                            <h1 onClick={dark} id='themeSwitcher' className={`fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}> </h1>
                        </Tippy>
                        <Tippy content="cart">
                            <Link to="/cart" ><h1 className="fas fa-shopping-cart cart-btn"><span>{cart.length}</span></h1></Link>
                        </Tippy>
                    </div>

                    {/* Nav bar for Mobile starts-----------------> */}

                    <div className="navbarMob" >
                        <i className='fa-solid fa-bars' onClick={(e) => { setToggle(true) }}></i>
                        {toggle && (<div className='overlay'>
                            <h1 className='fa-solid fa-xmark' onClick={(e) => { setToggle(false) }}> </h1>
                            <Link to="/"><h1 onClick={hideNav}>Home</h1></Link>
                            <Link to="/"><h1 onClick={hideNav}>About</h1></Link>
                            <Link to="/menu"><h1 onClick={hideNav}>Menu</h1></Link>
                            <Link to="/"><h1 onClick={hideNav}>Contact</h1></Link>
                            {logged ?
                                <Tippy content="logout">
                                    <h1 onClick={setLogged("")} ><i className="fa-solid fa-right-from-bracket"></i> </h1>
                                    <span style={{ fontSize: "1.3rem", paddingLeft: ".5rem", alignSelf: "center" }}>{logged}</span>
                                </Tippy>
                                : <>
                                    <Link to="/login"><h1 onClick={hideNav}> Login</h1></Link>
                                    <Link to="/create"><h1 onClick={hideNav}> Create Account </h1></Link>
                                </>}
                            <hr />
                            <div className='optionsM' >
                                <h1 onClick={dark} id='themeSwitcher' > <i className="fa-solid fa-moon"></i> </h1>
                                <Link to="/cart"><h1 onClick={hideNav} > <i className="fas fa-shopping-cart cart-btn"><span>{cart.length}</span></i></h1></Link>
                            </div>
                        </div>)}
                    </div>
                    {/* Nav bar for Mobile Ends-----------------> */}
                </header>
            </div>
        </div>
    )
}

export default NavBar
