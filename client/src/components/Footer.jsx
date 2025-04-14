import React from 'react';
import '../styles/styles.css'

function Footer() {
  return (
    <footer className="footer ">
      <div className="section__container footer__container">
        <div className="footer__col">
          <h4>INFORMATION</h4>
          <p>Home</p>
          <p>About</p>
          <p>Offers</p>
          <p>Seats</p>
          <p>Destinations</p>
        </div>
        <div className="footer__col">
          <h4>CONTACT</h4>
          <p>Support</p>
          <p>Media</p>
          <p>Socials</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
