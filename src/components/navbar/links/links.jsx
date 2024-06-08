import styles from './links.module.css';
import NavLink from './navLink/navLink';

const Links = () => {
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
  // TEMPORARY
  const session = true;
  const admin = true;
  return (
    <div className={styles.links}>
      {links.map(link => (
        <NavLink item={link} key={link.title} />
      ))}
      {session
        ? (
          <>{admin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
          <button>Log Out</button>
          </>
          )
        : (<NavLink item={{ title: 'LogIn', path: '/login' }} />)}
    </div>
  );
};

export default Links;
