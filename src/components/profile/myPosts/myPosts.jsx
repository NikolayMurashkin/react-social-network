import classes from './myPosts.module.scss';
import Post from './post/Post';

const MyPosts = () => {
	return (
		<div>
			my posts
			<div>
				<textarea></textarea>
				<button>Add post</button>
			</div>
			<div className={classes.posts}>
				<Post message="Hi, how are you?" likesCount="23" />
				<Post message="It's my first post" likesCount="44" />
			</div>
		</div>
	);
}

export default MyPosts;