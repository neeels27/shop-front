import React from 'react';
import LogoImg from "../../../../public/CR7.png";
import styles from "./HeaderLogo.module.scss";

const Headerlogo = () => {
    return (
        <div className={styles.header__logo}>
            <img src={LogoImg.src} alt="CR7"/>  
        </div>
    );
}

export default Headerlogo;
