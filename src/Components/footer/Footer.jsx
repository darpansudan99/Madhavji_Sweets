import React, { useState } from 'react';
import './Footer.css';
import '../../App.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Footer = () => {
    const [visible, setVisible] = useState(false);

    const visibility = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    window.addEventListener('scroll', visibility)
    return (
        <div id="footerContainer">
            <div className="container">
                <Tippy interactive={false}
                    content={<p> Help </p>}
                    placement={"right"}
                >
                    <i className="fa-solid fa-headset" id='help' />
                </Tippy>
                <div id='footerDetails'>
                    <div className="contact">
                        <h1>Contact</h1>
                        <p><i className="fa-solid fa-square-phone"></i> <span>+91-9996214384</span></p>
                        <p><i className="fa-solid fa-square-phone"></i> <span>+91-9896316690</span></p>
                        <p><i className="fa-solid fa-envelope"></i> <span>support@madhavji.in</span></p>
                        <p>Live customer care service available Mon-Sat 10 am - 7 pm on non-public holidays</p>
                    </div>
                    <div className="details">
                        MadhavJi is your one-stop-shop if you seek and crave for local and regional flavours, unique products and authentically experience different cultures of entire India. At MadhavJi, you can get limited available speciality food, a huge variety of tastes and offerings, regional variants of famous food and enjoy far distant seasonal delicacies right your doorstep.
                    </div>
                </div>
                <div id='copyright'> &copy; Darpan Sudan </div>
                <Tippy content={'Back to top'} placement='left'>
                    <i className='fa-solid fa-circle-chevron-up' id='backToTop' style={{ display: visible ? 'inline' : 'none' }} onClick={scrollToTop}  ></i>
                </Tippy>
            </div>
        </div>
    )
}

export default Footer
