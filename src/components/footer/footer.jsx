import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>All rights are reserved By Mahmoud Metwalli</div>
      <div className={styles.logo}>
      <Image src='/flower.png' alt='' fill className={styles.flowerImg}/>
      </div>
    </div>
  );
};

export default Footer;
