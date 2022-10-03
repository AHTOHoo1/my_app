import './Dialogs_style.css'
import React from 'react'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs_reducer'
import Dialogs from './Dialogs'


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())

    }

    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageTextActionCreator(body))
    }

    return <Dialogs updateNewMessageText={onMessageChange}
        addMessage={addMessage}
        dialogsPage={state} />
}

export default DialogsContainer;
