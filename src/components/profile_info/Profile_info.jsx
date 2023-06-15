import Preloader from '../common/preloader/Preloader';
import './info_style.css';
import userPhoto from '../../assets/images/user_icon.webp';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader />
    }

    const onMailPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    let onSubmit = (values) => {
        //console.log(values)
        props.saveProfile(values)
        setEditMode(false)
    }

    return (
        <div>

            <div className='prof__info'>
                <div><img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} className='ava__img' alt='ava' width={200} height={200} />
                    {props.isOwner && <div className='upload_file_block'>
                        <label htmlFor="file-upload"><img src='https://cdn-icons-png.flaticon.com/128/1092/1092216.png' className='upload_file_img' alt='upload_file_img' /></label>
                        <input type='file' id="file-upload" name="file-upload" onChange={onMailPhotoSelected} />
                    </div>}</div>
                <div className='about'>
                    {props.isOwner ? <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} /> : <span className='hzs_status' >Status: {props.status}</span> }
                    
                    {editMode ? <ProfileDataForm {...props} onSubmit={onSubmit} deactiveActiveMode={() => {setEditMode(false)}} /> 
                    : <ProfileData {...props} activeEditMode={() => {setEditMode(true)}} />}
                </div>
            </div>
        </div>
    )
}



const ProfileData = (props) => {
    return (
        <div>
            <div className='about_me' >Name: {props.profile.fullName}</div>
            <div className='about_me'>○ Looking for a job: {props.profile.lookingForAJob ? 'Yes, for sure' : 'No no no'}</div>
            { props.profile.lookingForAJob && <div className='about_me' >○ Skills: {props.profile.lookingForAJobDescription} </div>}
            <div className='about_me' >○ About me: {props.profile.aboutMe}</div>
            <div className='about_me' >○ Contacts: {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
            })}</div>
            {props.isOwner && <button onClick={props.activeEditMode} className='change_data_button' ><img alt='change_data' width={30} src='https://www.freeiconspng.com/thumbs/edit-icon-png/edit-icon-png-24.png' /></button>}
        </div>
    )
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div className='about_me' >{contactTitle}: {contactValue}</div>
}

export default ProfileInfo;

/*
<img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' alt='shapka' className='prof__img'/>
*/