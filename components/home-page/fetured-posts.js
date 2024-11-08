import { PostsGrid } from '../posts/posts-grid'
import classes from './featured-posts.module.css'

export const FeaturedPosts = (props) =>{
  return <section className={classes.latest}>
    <h2>Featured post</h2>
    <PostsGrid posts={props.posts}/>
  </section>
}