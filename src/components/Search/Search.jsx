import React, { useState } from "react";

export const Search = ({ details }) => {
    const [searchField, setSearchField] = useState("");

    // retorna lista de produtos filtrados
    const filteredProdutos = details.filter(
        produto => {
            return (
                produto.name.toLowerCase().includes(searchField.toLowerCase())
            );
        }
    );

    // para cada evento seta o texto para filtrar
    const handleChange = e => {
        setSearchField(e.target.value);
        console.log(e.target.value);
        console.log(filteredProdutos)
    };

    return (
        <div className='search-input'>
            <input type="search" placeholder='Pesquisar'
                onChange={handleChange}
            />
        </div>
    )
}