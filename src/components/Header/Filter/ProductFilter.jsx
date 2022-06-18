import React from "react";
import './ProductFilter.css';

/*React Icons*/
import { ImFilter } from 'react-icons/im';
import { TbArrowsSort } from 'react-icons/tb';

export const ProductFilter = () => {
    return (
        <div className='ProductFilter'>
            <input type="checkbox" id="ProductFilter-trigger" />
            <ImFilter />
            
            <div className='ProductFilter-container'>
                <h3>FILTROS</h3>

                <select>
                    <option value="">Menor Preço</option>
                    <option value="">Maior Preço</option>
                    <option value="">A - Z</option>
                    <option value="">Z - A</option>
                </select>

                <TbArrowsSort />

                <input type="number" placeholder='Valor mínimo'/>
                <input type="number" placeholder='Valor máximo'/>
            </div>
        </div>
    )
}