import React, { useEffect } from 'react';
import './AboutPage.css';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <div id="aboutPageContainer">
      <div className="container">
        <div className="about_wrapper">
          <div id="aboutus">
            <h1>About Madhavji Sweet Shop</h1>
            <p>
              Welcome to Madhavji Sweet Shop, where sweet dreams come to life. We are passionate about crafting the most delectable and authentic sweets that will tantalize your taste buds and leave you craving for more.
            </p>
          </div>
          <div id="whoweare">
            <h1>Our Sweet Journey</h1>
            <p>
              Our story began with a profound love for traditional Indian sweets and a deep-rooted desire to share them with the world. We believe that each piece of our sweet is a piece of happiness that brings joy and smiles to our customers' faces.
            </p>
          </div>
          <div id="whatwedo">
            <h1>Our Sweet Creations</h1>
            <p>
              We take immense pride in offering a wide array of both traditional and innovative sweets, each carefully handcrafted with love and passion. From timeless favorites like Gulab Jamun and Jalebi to unique creations that blend a symphony of flavors and textures, our sweet shop caters to every sweet tooth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
