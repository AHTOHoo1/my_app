import './Dialogs_style.css'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs_reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (body) => {
            dispatch(updateNewMessageTextActionCreator(body))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
