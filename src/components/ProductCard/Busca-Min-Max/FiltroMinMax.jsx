import React from "react";
import './FiltroMinMax.css';

const FiltroMinMax = ({inputFilterMin, filterMin, inputFilterMax, filterMax}) => {
    

    return (
    <div className='filter-card-value'>
        <input type="number" value={filterMin} onChange={inputFilterMin} placeholder='Valor mínimo'/>
        <input type="number" value={filterMax} onChange={inputFilterMax} placeholder='Valor máximo'/>
    </div>
    )
}

export default FiltroMinMax;