import { Link } from "react-router-dom";

const Dialog = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className='dialog'>
            <Link to={path} className='dialog__item'>{props.friend}</Link>
        </div>
    )
}

export default Dialog;