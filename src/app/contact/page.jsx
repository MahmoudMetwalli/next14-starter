import Image from 'next/image';
import styles from './contact.module.css'
const ContactPage = () => {
	return (
	  <div className={styles.container}>
		<div className={styles.imageContainer}>
			<Image className={styles.img} src='/contact.png' alt='' fill/>
		</div>
		<div className={styles.formContainer}>
			<form action='' className={styles.form}>
				<input type='text' placeholder='Name'/>
				<input type='text' placeholder='E-Mail Adress'/>
				<input type='text' placeholder='Phone Number (Optional)'/>
				<textarea name='' id='' cols='30' rows='10' placeholder='Please type your message here...'></textarea>
				<button>Send</button>
			</form>
		</div>
	  </div>
  );
};

export default ContactPage;
