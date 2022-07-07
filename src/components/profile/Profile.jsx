import MyPosts from './myPosts/myPosts';
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <main>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </main>
    );
}

export default Profile;