import classes from './navbar.module.scss';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li><NavLink className={navData => navData.isActive ? classes.active : classes.link}
                             to='/Profile'>Profile</NavLink></li>
                <li><NavLink className={navData => navData.isActive ? classes.active : classes.link}
                             to='/Messages'>Messages</NavLink></li>
                <li><NavLink className={navData => navData.isActive ? classes.active : classes.link}
                             to='/News'>News</NavLink></li>
                <li><NavLink className={navData => navData.isActive ? classes.active : classes.link}
                             to='/Music'>Music</NavLink></li>
                <li><NavLink className={navData => navData.isActive ? classes.active : classes.link}
                             to='/Settings'>Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;