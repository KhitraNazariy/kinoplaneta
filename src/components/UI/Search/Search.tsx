import React, {FC} from 'react';
import {FiSearch} from "react-icons/fi";
import {MdOutlineClose} from "react-icons/md";

import scss from './Search.module.scss';

interface SearchProps {
    searchValue: string;
    setSearchValue: (value: string) => void;
    placeholder: string;
}

const Search: FC<SearchProps> = ({setSearchValue, searchValue, placeholder}) => {

    console.log(searchValue)

    return (
        <div className={scss.search}>
            <div className={scss.search_searchIcon}>
                <FiSearch/>
            </div>
            <input
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                className={scss.search_input}
                type="text"
                placeholder={placeholder}
            />
            {searchValue &&
                <div
                    onClick={() => setSearchValue('')}
                    className={scss.search_clearIcon}
                >
                    <MdOutlineClose/>
                </div>
            }
        </div>
    );
};

export {Search};