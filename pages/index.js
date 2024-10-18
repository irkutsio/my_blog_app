import { FeaturedPosts } from '../components/home-page/fetured-posts';
import { Hero } from '../components/home-page/Hero';
import { getFeaturedPosts } from '../lib/post-util';

const HomePage = props => {

	const {posts} = props

	return (
		<>
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
