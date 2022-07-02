import classes from './post.module.scss';

const Post = (props) => {
	return (
		<div className={classes.item}>
			<img src="https://avatars.mds.yandex.net/i?id=5c907459c7847eb712dc5acc99499e0d-7084676-images-thumbs&n=13&exp=1" alt="" />
			{props.message}
			<div>
				<span>like</span> {props.likesCount}
			</div>
		</div>
	);
}

export default Post;