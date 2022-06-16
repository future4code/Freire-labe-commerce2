import React from 'react';
import logo from './logo.svg';
import './App.css';

import { VscRocket } from 'react-icons/vsc';
import { GiExplodingPlanet } from 'react-icons/gi';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { TbArrowsSort } from 'react-icons/tb';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GiExplodingPlanet />

        <div className='header-texts'>
          <h1>T-shirt Space</h1>
          <h5>Do espaço direto pra vc!</h5>
        </div>
        
        <VscRocket />
      </header>

      <div className="App-body">
        <div className='search-input'>
          <input type="text" placeholder='Pesquisar'/>
        </div>

        <div className='filter-card-value'>
          <input type="number" placeholder='Valor mínimo'/>
          <input type="number" placeholder='Valor máximo'/>
        </div>

        <div className='sort-select'>
          <select>
            <option value="">Crescente</option>
            <option value="">Decrescente</option>
          </select>
          
          <TbArrowsSort />
        </div>

        <div className='cards-container'>
          <div className='card'>
            <div className='card-img'>
              <img src="https://ae01.alicdn.com/kf/Hdb25259355544b639e6ba4fdd8c96d57t/Impresso-Espa-o-de-Experi-ncia-Dos-Homens-T-Shirt-de-Algod-o-camiseta-O-pesco.jpg_Q90.jpg_.webp" alt="" />
            </div>
            <h3>Producto 1</h3>
            <h1>R$200,00</h1>
            <button>Comprar</button>
          </div>

          <div className='card'>
            <div className='card-img'>
              <img src="https://ae01.alicdn.com/kf/Hdb25259355544b639e6ba4fdd8c96d57t/Impresso-Espa-o-de-Experi-ncia-Dos-Homens-T-Shirt-de-Algod-o-camiseta-O-pesco.jpg_Q90.jpg_.webp" alt="" />
            </div>
            <h3>Producto 1</h3>
            <h1>R$200,00</h1>
            <button>Comprar</button>
          </div>

          <div className='card'>
            <div className='card-img'>
              <img src="https://ae01.alicdn.com/kf/Hdb25259355544b639e6ba4fdd8c96d57t/Impresso-Espa-o-de-Experi-ncia-Dos-Homens-T-Shirt-de-Algod-o-camiseta-O-pesco.jpg_Q90.jpg_.webp" alt="" />
            </div><h3>Producto 1</h3>
            <h1>R$200,00</h1>
            <button>Comprar</button>
          </div>
        </div>
      </div>

      {/*Trigger que controla o botão do carrinho de compras*/}
      <input type="checkbox" id='shop-cart'/>

      <footer className='App-footer'>
        <div className='footer-cart'>
          <label htmlFor="shop-cart">
            <MdOutlineLocalGroceryStore />
          </label>
        </div>
      </footer>

      <div className='App-modal-cart'>
        <h1>Hello world!</h1>
      </div>
    </div>
  );
}

export default App;
