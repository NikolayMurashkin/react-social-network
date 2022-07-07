import classes from "./dialogItem.module.scss";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`;
    return (
        <div className={classes.dialog}>
            <NavLink
                className={navData => navData.isActive ? classes.active : classes.dialog}
                to={path}>{props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;