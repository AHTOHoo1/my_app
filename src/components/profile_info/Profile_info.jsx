import Preloader from '../common/preloader/Preloader';
import './info_style.css';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' alt='shapka' className='prof__img'/>
            <div className='prof__info'>
                <div><img src={props.profile.photos.large} className='ava__img' alt='ava' width={150} height={150} /></div>
                <div className='about'>
                    <div className='about__data'>○ Name: {props.profile.fullName}</div>
                    <div className='about__data'>○ About me: {props.profile.aboutMe}</div>
                    <div className='about__data'>○ Looking for a job: {props.profile.lookingForAJob ? 'Yes, for sure' : 'No no no'}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;


//<img src='https://cdn-icons-png.flaticon.com/512/1053/1053244.png' className='my_ava__img' alt='ava' width={100} height={100}/>
