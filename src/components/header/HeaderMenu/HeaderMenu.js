import React from "react";
import Link from "next/link";
import styles from "./HeaderMenu.module.scss";
import {useRouter} from "next/router";

const Headermenu = () => {
  const router = useRouter();
  return (
    <div className={styles.header__menu}>
      <nav>
        <ul>
          <li className={router.pathname=="/about" ? styles.active : ""}>
            <Link href="/about">
              <a>À Propos</a>
            </Link>
          </li>
          <li className={router.pathname=="/shop" ? styles.active : ""}>
            <Link href="/shop">
              <a>Magasin en ligne</a>
            </Link>
          </li>
          <li className={router.pathname=="/contact" ? styles.active : ""}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Headermenu;
