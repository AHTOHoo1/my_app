import './Dialogs_style.css'
import { addMessage } from '../../redux/dialogs_reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

/*
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

let authRedirectComponent = withAuthRedirect(Dialogs)

export default connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent)
*/

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Dialogs);
