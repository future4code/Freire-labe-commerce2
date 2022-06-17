import React from "react";
import './AppLogo.css';

/*React Icons*/
import { GiExplodingPlanet } from 'react-icons/gi';

export const AppLogo = () => {
    return (
        <div className='header-logo'>
          <GiExplodingPlanet />

          <div className='header-texts'>
            <h1>T-shirt Space</h1>
            <h5>Do espaço direto pra vc!</h5>
          </div>
        </div>
    )
}