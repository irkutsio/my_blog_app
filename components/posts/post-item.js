import Image from 'next/image';
import classes from './post-item.module.css';
import Link from 'next/link';

export const PostItem = props => {
	const { title, date, image, slug, excerpt } = props.post;

	const formatedDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	const imagePath = `/images/posts/${slug}/${image}`;
	const linkPath = `/posts/${slug}`;

	return (
		<li className={classes.post}>
			<Link href={linkPath} legacyBehavior>
				<a>
					<div className={classes.image}>
						<Image src={imagePath} alt={title} width={300} height={200}/>
					</div>
					<div className={classes.content}>
						<h3>{title}</h3>
						<time>{formatedDate}</time>
						<p>{excerpt}</p>
					</div>
				</a>
			</Link>
		</li>
	);
};
