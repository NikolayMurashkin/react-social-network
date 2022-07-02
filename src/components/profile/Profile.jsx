import classes from './profile.module.scss';
import MyPosts from './myPosts/myPosts';

const Profile = () => {
    return (
        <main>
            <div>
                <img src="https://w-dog.ru/wallpapers/10/8/429143089982909/spokojstvie-dva-dzhek-lejk-ozero-kanada.jpg"
                     alt=""/>
            </div>
            <div>
                ava + descr
            </div>
            <MyPosts/>
        </main>
    );
}

export default Profile;