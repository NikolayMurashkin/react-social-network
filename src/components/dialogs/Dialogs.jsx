import classes from './dialogs.module.scss';
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

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    const dialogsData = [
        {id: 1, name: 'Veronika'},
        {id: 2, name: 'Timofei'},
        {id: 3, name: 'Dashka'},
        {id: 4, name: 'Monya'},
        {id: 5, name: 'Cherry'},
        {id: 6, name: 'Tilda'},
        {id: 7, name: 'Zephyr'},
    ];

    const dialogsMap = dialogsData.map(item => {
        return (
            <DialogItem name={item.name} id={item.id}/>
        )
    })

    const messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you doing?'},
        {id: 3, message: 'Hey yo!'},
    ];

    const messagesMap = messagesData.map(item => {
        return (
            <Message message={item.message}/>
        )
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {/*<DialogItem name="Veronika" id="1"/>*/}
                {/*<DialogItem name="Timofei" id="2"/>*/}
                {/*<DialogItem name="Dashka" id="3"/>*/}
                {/*<DialogItem name="Monya" id="4"/>*/}
                {/*<DialogItem name="Cherry" id="5"/>*/}
                {/*<DialogItem name="Tilda" id="6"/>*/}
                {/*<DialogItem name="Zephyr" id="7"/>*/}
                {dialogsMap}
            </div>
            <div className={classes.messages}>
                {/*<Message message="Hi"/>*/}
                {/*<Message message="How are you doing?"/>*/}
                {/*<Message message="Hey yo!"/>*/}
                {messagesMap}
            </div>
        </div>
    )
}

export default Dialogs;