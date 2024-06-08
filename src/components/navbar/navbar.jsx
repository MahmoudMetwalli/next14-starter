import Links from './links/links';
import styles from './navbar.module.css';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.link}>
        <Links />
      </div>
    </div>
  );
};

export default NavBar;
