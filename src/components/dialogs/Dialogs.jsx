import Dialog from './dialog/Dialog'
import './Dialogs_style.css'
import Message from './message/Message'
import React from 'react'


const Dialogs = (props) => {

    let DialogsElements = props.state.dialogs.map( dialog => <Dialog id={dialog.id} friend={dialog.friend} /> )

    let MessagesElements = props.state.messages.map( message => <Message text={message.text} message_class={message.message_class}/> )

    let newMessageElement = React.useRef(null)

    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage(text)
        newMessageElement.current.value = ''
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateNewMessageText(text)
    }

    return (
        <div className='dialogs'>
            <div className='dialogs__items'>
                { DialogsElements }
            </div>
            <div className='messages'>
                { MessagesElements }
                <div>
                    <textarea className='message_input' onChange={onMessageChange} value={props.newMessageText} ref={ newMessageElement }></textarea>
                    <button className='to_send_button' onClick={ addMessage }>
                        <img src='https://icons-for-free.com/iconfiles/png/512/media+message+send+telegram+icon-1320192980424419632.png' alt='to_send' className='to_send_img'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
