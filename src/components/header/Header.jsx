import classes from './header.module.scss';

const Header = () => {
	return (
		<header className={classes.header}>
			<img className={classes.logo} src="https://i.pinimg.com/originals/23/80/0b/23800b995292379883a15d9a4c382b22.png" alt="" />
		</header>
	);
}

export default Header;