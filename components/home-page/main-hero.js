import Image from 'next/image';
import classes from './hero.module.css'

export const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
        <Image src='/images/site/Ira.png' alt="An image showing Ira" width={150} height={150} />
      </div>
			<h1>Hi! I`m Ira</h1>
			<p>I blog about web development - especially frontend.</p>
		</section>
	);
};
