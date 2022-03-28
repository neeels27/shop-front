import React from 'react';
import Link from "next/link";
import LogoImg from "../../../public/CR7.png";  
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footer__main}>
            <div className={styles.footer__logo}>
                <img src={LogoImg.src} alt="CR7" />    
            </div>
        </div>
    );
}

export default Footer;
