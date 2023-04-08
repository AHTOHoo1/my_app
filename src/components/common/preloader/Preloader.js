import preloader from '../../../assets/images/preloader.svg';
import "./preloader_style.css"


const Preloader = (props) => {
    return(
        <div>
            <img src={preloader} alt='preloader' className='preloader' />
        </div>
    )
}

export default Preloader;
