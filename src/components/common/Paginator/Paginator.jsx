import React, {useState} from 'react';
import "./paginator_style.css";


let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div >
        { portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }} className='page__number' >PREV</button> }

            {pages
                .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                .map((p) => {
                return <button className={ currentPage === p ? "selected__page" : "page__number" }
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</button>
            })}
        { portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }} className='page__number' >NEXT</button> }


    </div>
}

export default Paginator;


//{currentPage === p ? "selected__page" : "page__number"}