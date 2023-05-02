import { Field, Form, Formik } from "formik";
import "./info_style.css"

const ProfileDataForm = (props) => {

    let saveProfileData = (values) => {
        props.onSubmit(values)
    }
    let con = props.profile.contacts;

    return (
        <div>
            <Formik initialValues={{ fullName: props.profile.fullName, 
                                    lookingForAJob: props.profile.lookingForAJob, 
                                    lookingForAJobDescription: props.profile.lookingForAJobDescription, 
                                    aboutMe: props.profile.aboutMe,
                                    contacts: {
                                        facebook: con.facebook,
                                        website: con.website,
                                        vk: con.vk,
                                        twitter: con.twitter,
                                        instagram: con.instagram,
                                        youtube: con.youtube,
                                        github: con.github,
                                        mainLink: con.mainLink
                                    } }} onSubmit={saveProfileData} >
                    <Form >
                        <div className='about_me' >Name: <Field type='input' name='fullName' className="change_data_form" /></div>
                        <div className='about_me'>○ Looking for a job? <Field type='checkbox' name='lookingForAJob' className="profile_checkbox" /> </div>
                        <div className='about_me' >○ My skills: <Field type='textarea' name='lookingForAJobDescription' className="change_data_form" /> </div>
                        <div className='about_me' >○ About me: <Field type='textarea' name='aboutMe' className="change_data_form" /> </div>
                        <div className='about_me' >○ Contacts: {Object.keys(props.profile.contacts).map(key => {
                            return <div>{key}: {<Field name={'contacts.' + key} type='input' className="change_data_form" />}</div>
                        })}</div>
                        <div>
                            <button type="submit" className="change_data_button" ><img alt="change_data" width={30} src="https://www.pngkey.com/png/full/445-4453331_checkmark-check-mark-in-a-circle.png" /></button>
                            <button onClick={props.deactiveActiveMode} className="change_data_button" ><img alt="change_data" width={30} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Phoenician_teth.svg/1024px-Phoenician_teth.svg.png" /></button>
                        </div>
                    </Form>
            </Formik>
            
        </div>
    )
}


export default ProfileDataForm;

/**/

/**/
