import React, { useEffect, useState } from "react";
import './info_style.css';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] )

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <dir>
                    <span onClick={activateEditMode} >Status: {props.status}</span>
                </dir>
            }
            {editMode &&
                <div>
                    <input className="status__input" value={status} onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
