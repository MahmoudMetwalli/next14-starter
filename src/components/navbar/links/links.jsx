'use client';

import { useState } from 'react';
import styles from './links.module.css';
import NavLink from './navLink/navLink';
import Image from 'next/image';


const links = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Contact',
    path: '/contact'
  },
  {
    title: 'Blog',
    path: '/blog'
  }
];


const Links = () => {
  const [open, setOpen] = useState(false);
  // TEMPORARY
  const session = true;
  const admin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map(link => (
          <NavLink item={link} key={link.title} />
        ))}
        {session
          ? (
            <>{admin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
            <button className={styles.logout}>Log Out</button>
            </>
            )
          : (<NavLink item={{ title: 'LogIn', path: '/login' }} />)}
      </div>
      <Image className={styles.menuButton} src='/newmenu.png' alt='' height={30} width={30} onClick={() => setOpen(prev => !prev)}/>
      { open && (<div className={styles.mobileLinks}>
        {links.map(link => (
          <NavLink item={link} key={link.title} />
        ))}</div>
      )}
    </div>
  );
};

export default Links;
