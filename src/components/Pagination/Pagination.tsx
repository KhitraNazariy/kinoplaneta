import React, {FC} from 'react';
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

import scss from './Pagination.module.scss';

interface PaginationProps {
    totalPages: number;
    page: number;
    setPage: (page: number) => void
}

const Pagination: FC<PaginationProps> = ({totalPages, setPage, page}) => {

    const isFirstPage = page === 1;
    const isLastPage = page === totalPages;


    return (
        <div className={scss.pagination}>
            <button
                className={scss.doubleLeft}
                onClick={() => setPage(1)}
                disabled={isFirstPage}
            >
                <AiOutlineDoubleLeft size={14}/>
            </button>

            <button
                className={scss.left}
                onClick={() => setPage(page - 1)}
                disabled={isFirstPage}
            >
                <IoIosArrowBack size={14}/>
            </button>

            <span className={scss.page}>{page} / {totalPages}</span>

            <button
                className={scss.right}
                onClick={() => setPage(page + 1)}
                disabled={isLastPage}
            >
                <IoIosArrowForward size={14}/>
            </button>

            <button
                className={scss.doubleRight}
                onClick={() => setPage(totalPages)}
                disabled={isLastPage}
            >
                <AiOutlineDoubleRight size={14}/>
            </button>
        </div>
    );
};

export {Pagination};