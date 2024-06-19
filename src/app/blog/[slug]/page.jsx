import Image from 'next/image';
import styles from './singlePost.module.css'

const SinglePostPage = () => {
	return (
	  <div className={styles.container}>
		<div className={styles.imageContainer}>
			<Image className={styles.image} src='/food2.png' alt='' fill/>
		</div>
		<div className={styles.textContainer}>
			<h1 className={styles.title}>Tilte</h1>
			<div className={styles.detail}>
				<Image className={styles.avatar} src='/menu.png' alt='' height={30} width={30}/>
				<div className={styles.detailText}>
					<span className={styles.detailTitle}>Author</span>
					<span className={styles.detailValue}>Snacky</span>
				</div>
				<div className={styles.detailText}>
					<span className={styles.detailTitle}>Published</span>
					<span className={styles.detailValue}>01.01.2025</span>
				</div>
			</div>
			<div className={styles.content}>
				Desc
			</div>
		</div>
	  </div>
  );
};

export default SinglePostPage;
