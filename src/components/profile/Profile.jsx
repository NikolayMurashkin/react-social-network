import classes from './profile.module.scss';
import MyPosts from './myPosts/myPosts';
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = () => {
    return (
        <main>
            <ProfileInfo/>
            <MyPosts/>
        </main>
    );
}

export default Profile;