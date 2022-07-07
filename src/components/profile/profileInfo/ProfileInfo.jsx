import classes from './profileInfo.module.scss';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://w-dog.ru/wallpapers/10/8/429143089982909/spokojstvie-dva-dzhek-lejk-ozero-kanada.jpg"
                     alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + descr
            </div>
        </div>
    );
}

export default ProfileInfo;