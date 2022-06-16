import React, { useState } from "react";
import { TbArrowsSort } from 'react-icons/tb';

export const Order = ({ details }) => {
    const [searchField, setSearchField] = useState("");

    const handleChange = e => {
        setSearchField(e.target.value);
        console.log(e.target.value);
        if(e.target.value === "Crescente"){
            console.log(filteredProdutosAsc());
        }else{
            console.log(filteredProdutosDesc());
        }
    };

    
    let filteredProdutosAsc = () => details.sort(function(x,y){
        return x.price > y.price?1:x.price < y.price?-1:0;
    });
    
    let filteredProdutosDesc = () => details.sort(function(x,y){
        return x.price < y.price?1:x.price > y.price?-1:0;
    })
    
    filteredProdutosAsc();

    return (
        <div className='sort-select'>
          <select onChange={handleChange}>
            <option value="Crescente">Crescente</option>
            <option value="Decrescente">Decrescente</option>
          </select>

          <TbArrowsSort />
        </div>
    )
}