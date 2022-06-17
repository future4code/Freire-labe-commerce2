import React, {useState} from 'react';
import './App.css';

/*React Icons*/

/*Components*/
import { AppLogo } from './components/Header/Logo/AppLogo'; //Logo e título do site
import { SearchInput } from './components/Header/Search/SearchInput'; //Caixa de pesquisa por nome do produto
import { ProductFilter } from './components/Header/Filter/ProductFilter'; //Filtro de ordenação dos produtos
import { ProductCardContainer } from './components/Body/ProductCardContainer'; //Container dos cards dos produtos
import { ShoppingCart } from './components/Footer/Cart/ShoppingCart'; //Botão de compra

function App() {

  /*Lista que armazena todos os produtos da loja*/
  const [productsList, setProductsList] = useState([{
    key: 1,
    name: 'Produto 1',
    price: 150,
    img: 'https://picsum.photos/200/300/?random',
    description: 'Descrição do produto 1'
  }, {
    key: 2,
    name: 'Produto 2',
    price: 250.30,
    img: 'https://picsum.photos/200/300/?random',
    description: 'Descrição do produto 2'
  }, {
    key: 3,
    name: 'Produto 3',
    price: 350.50,
    img: 'https://picsum.photos/200/300/?random',
    description: 'Descrição do produto 3'
  }, {
    key: 4,
    name: 'Produto 4',
    price: 450.70,
    img: 'https://picsum.photos/200/300/?random',
    description: 'Descrição do produto 4'
  }, {
    key: 5,
    name: 'Produto 5',
    price: 550.90,
    img: 'https://picsum.photos/200/300/?random',
    description: 'Descrição do produto 5'
  }, {
    key: 6,
    name: 'Produto 6',
    price: 650.00,
    img: 'https://picsum.photos/200/300/?random',
    description: 'Descrição do produto 6'
  }]);

  /*Lista que armazena os produtos que foram comprados*/
  const [cartList, setCartList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <AppLogo />

        <SearchInput />

        <ProductFilter />
        
      </header>

      <div className="App-body">          
        <ProductCardContainer
          productsList={productsList}

          cartList={cartList}
          setCartList={setCartList}
        />
      </div>

      <footer className='App-footer'>
        <ShoppingCart cartList={cartList} setCartList={setCartList} />
      </footer>
    </div>
  );
}

export default App;
