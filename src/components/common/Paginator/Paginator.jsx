import "./paginator_style.css";
import { Pagination } from '@mui/material';


let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    const handleChange = (event, value) => {
        onPageChanged(value);
    };

    return <div >  
        <Pagination count={pagesCount} page={currentPage} onChange={handleChange} color='secondary' size='large' />
    </div>
}

export default Paginator;

