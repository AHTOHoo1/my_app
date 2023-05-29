import { Link } from "react-router-dom";
import "./LogMenu_styles.css"


const LogMenu = (props) => {
    return (
        <div className="dropdown" >
            <Link to={"/profile"} className="log_menu_item" >{props.login} ⌄</Link>
            <div className="menu" >
                <Link to={"/profile"} className="log_menu_item_smaller" >profile</Link>
                <button onClick={props.logoutProcess} className="log_menu_item_smaller" > logout </button>
            </div>
        </div>
    )
}

export default LogMenu;
