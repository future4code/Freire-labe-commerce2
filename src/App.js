import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import { VscRocket } from 'react-icons/vsc';
import { GiExplodingPlanet } from 'react-icons/gi';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import { TbArrowsSort } from 'react-icons/tb';

import { Search } from './components/Search/Search';
import  FiltroMinMax from './components/ProductCardContainer/Busca-Min-Max/FiltroMinMax';
import { ProductCardContainer } from './components/ProductCardContainer/ProductCardContainer';
import { Cart } from './components/Modal/Cart';

function App() {
    
  const filterMin = 0
  const filterMax = 0
    
  function inputFilterMax (event) {
    filterMax = event.target.value
  }

  function inputFilterMin (event) {
    filterMin = event.target.value
  }

  const initialDetails = [
    {
      key: 1,
      img: "https://ae01.alicdn.com/kf/Hdb25259355544b639e6ba4fdd8c96d57t/Impresso-Espa-o-de-Experi-ncia-Dos-Homens-T-Shirt-de-Algod-o-camiseta-O-pesco.jpg_Q90.jpg_.webp",
      name: "Nike",
      price: "200,00",
      description: "Texto alt Nike"
    },
    {
      key: 2,
      img: "https://ae01.alicdn.com/kf/Hdb25259355544b639e6ba4fdd8c96d57t/Impresso-Espa-o-de-Experi-ncia-Dos-Homens-T-Shirt-de-Algod-o-camiseta-O-pesco.jpg_Q90.jpg_.webp",
      name: "Adidas",
      price: "300,00",
      description: "Texto alt Adidas"
    },
    {
      key: 3,
      img: "https://ae01.alicdn.com/kf/Hdb25259355544b639e6ba4fdd8c96d57t/Impresso-Espa-o-de-Experi-ncia-Dos-Homens-T-Shirt-de-Algod-o-camiseta-O-pesco.jpg_Q90.jpg_.webp",
      name: "Lacoste",
      price: "100,00",
      description: "Texto alt Lacoste"
    }
  ];

  {/*Lista que armazena os produtos que foram comprados*/}
  const [cartList, setCartList] = useState([]);

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

        <Search details={initialDetails} />      
          
        {/* INICIO CODIGO MURI */}
        <FiltroMinMax inputFilterMin={inputFilterMin} filterMin={filterMin} inpultFilterMax={inputFilterMax} filterMax={filterMax}/>

        {/*COMPONENTE 3*/}
        <div className='sort-select'>
          <select>
            <option value="">Crescente</option>
            <option value="">Decrescente</option>
          </select>

          <TbArrowsSort />
        </div>

        <ProductCardContainer 
          details={initialDetails}
          cartList={cartList} 
          setCartList={setCartList}
        />

        {/*TESTE CONSOLE.LOG*/}
        <div>
          {console.log(cartList)}
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

      <Cart cartList={cartList} setCartList={setCartList}/>
    </div>
  );
}

export default App;
