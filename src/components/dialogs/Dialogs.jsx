import classes from './dialogs.module.scss';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";


const Dialogs = (props) => {


    const dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messagesElements = props.messages.map(m => <Message message={m.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;