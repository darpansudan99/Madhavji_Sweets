import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './About.css';

const About = () => {
    return (
        <div id="aboutContainer">
            <h1> About MadhavJi</h1>
            <div id='aboutContent'>
                <div id='aboutUS'>
                    <h1>About US</h1>
                    <p> Madhavji Sweet Shop is your destination for delightful and mouthwatering sweets. We are passionate about creating the most delicious and authentic sweets that will satisfy your sweet cravings like never before.</p>
                    <Link to={'/about'}><button>Know More</button> </Link>
                </div>
                <hr />
                <vl />
                <div id='ourHistory'>
                    <h1>Our History</h1>
                    <p> At Madhavji, we are committed to delivering the finest sweets to our customers. Our journey began with a deep love for traditional Indian sweets and the desire to share them with the world. We believe that every piece of our sweet is a piece of happiness that brings smiles to our customers' faces.</p>
                    <Link to={'/about'}><button>Know More</button> </Link>
                </div>
            </div>

        </div>
    )
}

export default About