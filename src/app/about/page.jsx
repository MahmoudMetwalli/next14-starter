import Image from "next/image";
import styles from './about.module.css'
const AboutPage = () => {
	return (
	  <div>
		<div className={styles.imageContainer}>
		<Image src='/city.png' alt='' fill/>
		</div>
		AboutPage
	  </div>
  );
};

export default AboutPage;
