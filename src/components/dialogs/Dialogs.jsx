import Dialog from './dialog/Dialog'
import './Dialogs_style.css'
import Message from './message/Message'
import React from 'react'
import { Navigate } from 'react-router-dom'


const Dialogs = (props) => {

    let state = props.dialogsPage

    let DialogsElements = state.dialogs.map(dialog => <Dialog id={dialog.id} friend={dialog.friend} key={dialog.id} />)

    let MessagesElements = state.messages.map(message => <Message text={message.text} message_class={message.message_class} key={message.id} />)

    let newMessageText = state.newMessageText

    if (!props.isAuth) return <Navigate to="/login" /> ;

    let addMessage = () => {
        props.addMessage()

    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageText(body)
    }

    return (
        <div className='dialogs'>
            <div className='dialogs__items'>
                {DialogsElements}
            </div>
            <div className='messages'>
                {MessagesElements}
                <div>
                    <textarea placeholder='Enter your message'
                        className='message_input'
                        value={newMessageText}
                        onChange={onMessageChange}></textarea>
                    <button className='to_send_button' onClick={addMessage}>
                        <img src='https://icons-for-free.com/iconfiles/png/512/media+message+send+telegram+icon-1320192980424419632.png' alt='to_send' className='to_send_img' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
