import React, {useState} from 'react';
import './App.css';

/*Components*/
import { AppLogo } from './components/Header/Logo/AppLogo'; //Logo e título do site
import { SearchInput } from './components/Header/Search/SearchInput'; //Caixa de pesquisa por nome do produto
import { ProductFilter } from './components/Header/Filter/ProductFilter'; //Filtro de ordenação dos produtos
import { ProductCardContainer } from './components/Body/ProductCardContainer'; //Container dos cards dos produtos
import { ShoppingCart } from './components/Footer/Cart/ShoppingCart'; //Botão de compra

function App() {

  /*Armazena todos os produtos da loja*/
  const [productsList,setProductsList] = useState([{
    key: 1,
    name: 'Camisa 1',
    price: 15,
    img: 'https://picsum.photos/200/300/?1',
    description: 'Descrição do produto 1'
  }, {
    key: 2,
    name: 'Camisa 2',
    price: 25,
    img: 'https://picsum.photos/200/300/?2',
    description: 'Descrição do produto 2'
  }, {
    key: 3,
    name: 'Camisa 3',
    price: 35,
    img: 'https://picsum.photos/200/300/?3',
    description: 'Descrição do produto 3'
  }, {
    key: 4,
    name: 'Camisa 4',
    price: 45,
    img: 'https://picsum.photos/200/300/?4',
    description: 'Descrição do produto 4'
  }, {
    key: 5,
    name: 'Camisa 5',
    price: 55,
    img: 'https://picsum.photos/200/300/?5',
    description: 'Descrição do produto 5'
  }, {
    key: 6,
    name: 'Camisa 6',
    price: 65,
    img: 'https://picsum.photos/200/300/?6',
    description: 'Descrição do produto 6'
  }]);

  /*Armazena os produtos que foram adicionados ao carriniho*/
  const [cartList, setCartList] = useState([]);

  /*Armazena o valor total dos produtos adicionados ao carrinho*/
  const [totalPriceCart, setTotalPriceCart] = useState(0);

  const [selectedBrand, setSelectedBrand] = useState("MENOR");

  const [minimo, setMinimo] = useState(0);
  const [maximo, setMaximo] = useState(1000);

  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <AppLogo />

        <SearchInput 
          query = {query}
          setQuery = {setQuery}

        />

        <ProductFilter 
          setProductsList={setProductsList}
          selectedBrand = {selectedBrand}
          setSelectedBrand = {setSelectedBrand}
          minimo={minimo}
          setMinimo={setMinimo}
          maximo={maximo}
          setMaximo={setMaximo}
          query = {query}
          setQuery = {setQuery}
        />
      </header>

      <div className="App-body">          
        <ProductCardContainer
          productsList={productsList}
          selectedBrand = {selectedBrand}
          cartList={cartList}
          setCartList={setCartList}
          minimo={minimo}
          maximo={maximo}
          query={query}
        />
      </div>

      <footer className='App-footer'>
        <ShoppingCart 
          cartList={cartList} 
          setCartList={setCartList} 
          totalPriceCart={totalPriceCart}
          setTotalPriceCart={setTotalPriceCart}
        />
      </footer>
    </div>
  );
}

export default App;
