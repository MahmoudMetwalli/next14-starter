import Image from "next/image";
import styles from './about.module.css'
const AboutPage = () => {
	return (
	  <div className={styles.container}>
		<div className={styles.textContainer}><h1>This is a mini-project for the learning of Next.js</h1></div>
		<div className={styles.imageContainer}>
		<Image src='/city.png' alt='' fill/>
		</div>
	  </div>
  );
};

export default AboutPage;
