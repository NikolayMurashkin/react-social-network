import classes from './myPosts.module.scss';
import Post from './post/Post';

const MyPosts = (props) => {


    const postsElements = props.posts.map(p => <Post message={p.message} id={p.id}
                                                     likesCount={p.likesCount}/>);

    return (
        <div className={classes.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;