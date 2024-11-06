import Head from 'next/head';
import { FeaturedPosts } from '../components/home-page/fetured-posts';
import { Hero } from '../components/home-page/Hero';
import { getFeaturedPosts } from '../lib/post-util';

const HomePage = props => {
	const { posts } = props;

	return (
		<>
			<Head>
				<title>Ira` Blog</title>
				<meta name="description" content="I post about programming and web dev" />
			</Head>
			<Hero />
			<FeaturedPosts posts={posts} />
		</>
	);
};

export const getStaticProps = () => {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts,
		},
	};
};

export default HomePage;
