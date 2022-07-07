import classes from './myPosts.module.scss';
import Post from './post/Post';

const MyPosts = () => {
    const postData = [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'How are you doing?', likesCount: 11},
        {id: 3, message: 'Hey yo!', likesCount: 14},
    ];

    const postDataMapped = postData.map(item => {
        return (
            <Post message={item.message} id={item.id} likesCount={item.likesCount}/>
        )
    })
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
                {/*<Post message="Hi, how are you?" likesCount="23"/>*/}
                {/*<Post message="It's my first post" likesCount="44"/>*/}
                {postDataMapped}
            </div>
        </div>
    );
}

export default MyPosts;