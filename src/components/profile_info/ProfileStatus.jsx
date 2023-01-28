import React from "react";
import './info_style.css'


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState( {
            editMode: true
        } )
    }

    deactivateEditMode = () => {
        this.setState( {
            editMode: false
        } )
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(provProps, prevState) {
        if (provProps.status !== this.props.status) {
            this.setState({
                status: this.state.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <dir>
                        <span onClick={ this.activateEditMode } >Status: {this.props.status}</span>
                    </dir>
                }
                {this.state.editMode &&
                    <div>
                        <input className="status__input" autoFocus={true} onBlur={ this.deactivateEditMode } value={this.state.status} onChange={this.onStatusChange} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
