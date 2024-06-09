import Image from 'next/image';
import styles from './home.module.css'

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>This is A Demonstration of Hard Work !</h1>
      <p className={styles.desc}>Always keep it UP !!</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
      <div className={styles.brands}>
        <Image src='/leaves.png' alt='' fill className={styles.brandImg}/>
      </div>
      </div>
    </div>
  </div>;
};

export default Home;