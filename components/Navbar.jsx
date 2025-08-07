import React from 'react';
import styles from '../app/Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
    console.log(styles)
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <Link href="/">
            <li>Home</li>
        </Link>
        
        <Link href="/posts">
            <li>Posts</li>
        </Link>
        <Link href="/users">
            <li>Users</li>
        </Link>
        <input type="text" placeholder='Search...' />
      </ul>
    </nav>
  );
}

export default Navbar;
