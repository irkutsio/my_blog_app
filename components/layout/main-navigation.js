import Link from 'next/link';
import { Logo } from './logo';
import classes from './main-navigation.module.css';

export const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<Link href="/" passHref legacyBehavior>
				<Logo />
			</Link>
			<nav>
				<ul>
					<li>
						<Link href="/posts">Posts</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
					<li></li>
				</ul>
			</nav>
		</header>
	);
};
