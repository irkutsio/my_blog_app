import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');



export const getPostsFiles = () => {
return fs.readdirSync(postsDirectory);
}

export const getPostData = postIdentifier => {
  const postSlug = postIdentifier.replace(/\.md$/, '');
	const filePath = path.join(postsDirectory, `${postSlug}.md`);
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	const { data, content } = matter(fileContent);

	

	const postData = {
		slug: postSlug,
		...data,
		content,
	};

	return postData;
};

export const getAllPosts = () => {
	const postFiles = getPostsFiles()

	const allPosts = postFiles.map(postFile => {
		return getPostData(postFile);
	});

	const sortedPosts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

	return sortedPosts;
};

export const getFeaturedPosts = () => {
	const allPosts = getAllPosts();
	const featuredPosts = allPosts.filter(post => post.isFeatured);

	return featuredPosts;
};
