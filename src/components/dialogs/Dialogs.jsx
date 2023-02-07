import Dialog from './dialog/Dialog'
import './Dialogs_style.css'
import Message from './message/Message'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../validators'
import { Textarea } from '../common/FormControl/FormControl'

const maxLength10 = maxLengthCreator(10)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder='Enter your message'
                className='message_input'
                component={Textarea}
                name='newMessageBody'
                validate={[required, maxLength10]} />
            <button className='to_send_button' >
                <img src='https://icons-for-free.com/iconfiles/png/512/media+message+send+telegram+icon-1320192980424419632.png' alt='to_send' className='to_send_img' />
            </button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

const Dialogs = (props) => {

    let state = props.dialogsPage

    let DialogsElements = state.dialogs.map(dialog => <Dialog id={dialog.id} friend={dialog.friend} key={dialog.id} />)

    let MessagesElements = state.messages.map(message => <Message text={message.text} message_class={message.message_class} key={message.id} />)


    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }

    return (
        <div className='dialogs'>
            <div className='dialogs__items'>
                {DialogsElements}
            </div>
            <div className='messages'>
                {MessagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

export default Dialogs;
