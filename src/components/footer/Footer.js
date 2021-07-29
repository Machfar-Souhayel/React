import React from 'react';
import styles from './footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt } from 'react-icons/fa';


function Footer({data}) {
return(
    <footer className={styles.footerContainer} id="footer">
      <img className={styles.logo} src="./images/Group 973.png" alt="Logo" />
      <div>
        <p>© {data}</p>
        <div className={styles.socialMedia}>
          <FaPhoneAlt />
          <p>+32485004002</p>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </footer>
)}
;


export default Footer;
