import Image from 'next/image';
import styles from './postCard.module.css';
import Link from 'next/link';

const PostCard = () => {
  return (
    <div className={styles.container}>
		<div className={styles.top}>
			<div className={styles.imageContainer}>
				<Image src='/food.png' alt='' className={styles.image} fill/>
			</div>
			<span className={styles.date}>01.11.2023</span>
		</div>
		<div className={styles.bottom}>
			<h1 className={styles.title}>Title</h1>
			<p className={styles.desc}>A statement that tells you how something or someone looks, sounds, etc. : words that describe something or someone. [count] Reporters called the scene “a disaster area,” and I think that was an accurate description. I applied for the position after reading the job description.</p>
			<Link className={styles.link} href='/blog/post'>Want to read more ?</Link>
		</div>
	</div>
  );
};

export default PostCard;
