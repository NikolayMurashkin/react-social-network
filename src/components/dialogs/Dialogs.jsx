import classes from './dialogs.module.scss';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <NavLink className={`${classes.dialog} ${classes.active}`}>Veronika</NavLink>
                <NavLink className={classes.dialog}>Timofei</NavLink>
                <NavLink className={classes.dialog}>Dashka</NavLink>
                <NavLink className={classes.dialog}>Monya</NavLink>
                <NavLink className={classes.dialog}>Cherry</NavLink>
                <NavLink className={classes.dialog}>Tilda</NavLink>
                <NavLink className={classes.dialog}>Zephyr</NavLink>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you doing?</div>
                <div className={classes.message}>Hey yo!</div>
            </div>
        </div>
    )
}

export default Dialogs;