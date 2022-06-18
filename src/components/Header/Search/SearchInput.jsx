import React from "react";
import './SearchInput.css';

/*React Icons*/
import { ImSearch } from 'react-icons/im';

export const SearchInput = () => {
    return (
        <div className='search-input'>
            <input type="search" placeholder='Pesquisar' />

            <ImSearch className="searchIcon"/>
        </div>
    )
}