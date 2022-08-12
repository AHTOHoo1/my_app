import './info_style.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' alt='shapka' className='prof__img'/>
            <div className='prof__info'>
                <div><img src='https://cdn-icons-png.flaticon.com/512/1053/1053244.png' className='ava__ing' alt='ava' width={100} height={100}/></div>
                <div className='about'>
                    <div className='name__data'>Name: Anton</div>
                    <div className='age__data'>Age: 16</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
