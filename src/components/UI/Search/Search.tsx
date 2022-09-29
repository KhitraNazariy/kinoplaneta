import React, {FC, useCallback, useState} from 'react';
import {FiSearch} from "react-icons/fi";
import {MdOutlineClose} from "react-icons/md";
import debounce from "lodash.debounce";

import scss from './Search.module.scss';

interface SearchProps {
    searchValue: string;
    setSearchValue: (value: string) => void;
    placeholder: string;
}

const Search: FC<SearchProps> = ({setSearchValue, searchValue, placeholder}) => {

    const [value, setValue] = useState('');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateSearchValue = useCallback(
        debounce((value) => {
            setSearchValue(value)
        }, 500),[]
    )

    const onChangeInput = event => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }

    return (
        <div className={scss.search}>
            <div className={scss.search_searchIcon}>
                <FiSearch/>
            </div>
            <input
                value={value}
                onChange={onChangeInput}
                className={scss.search_input}
                type="text"
                placeholder={placeholder}
            />
            {value &&
                <div
                    onClick={() => {
                        setSearchValue('')
                        setValue('')
                    }}
                    className={scss.search_clearIcon}
                >
                    <MdOutlineClose/>
                </div>
            }
        </div>
    );
};

export {Search};