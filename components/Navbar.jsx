import React from 'react';
import styles from '../app/Navbar.module.css';

const Navbar = () => {
    console.log(styles)
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>Home</li>
        <li>Posts</li>
        <li>Users</li>
      </ul>
    </nav>
  );
}

export default Navbar;
