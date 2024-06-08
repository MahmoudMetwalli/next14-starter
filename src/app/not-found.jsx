import Link from "next/link";

const NotFoundPage = () => {
	return (
	  <div>
	    <h2>NotFoundPage</h2>
	    <p>This page doesn't exits</p>
		<Link href='/'>Return Home</Link>
	  </div>
  );
};

export default NotFoundPage;
