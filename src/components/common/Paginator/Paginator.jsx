import React, { useEffect, useState } from 'react';
import "./paginator_style.css";
import { Pagination } from '@mui/material';


let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let [, setPortionNumber] = useState(1);

    useEffect(() => {
        setPortionNumber(Math.ceil(currentPage / portionSize));
    }, [currentPage, portionSize]);


    const handleChange = (event, value) => {
        onPageChanged(value);
    };

    return <div >  
        <Pagination count={pagesCount} page={currentPage} onChange={handleChange} color='secondary' size='large' />
    </div>
}

export default Paginator;

