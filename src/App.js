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
    name: 'Camisa Sistema Solar',
    price: 59.90,
    img: "https://images.tcdn.com.br/img/img_prod/680735/camiseta_infantil_sistema_solar_5200_1_651f818b1324b31904a9bd36fd269ac6_20220106120712.jpg",
    description: 'Descrição do produto 1'
  }, {
    key: 2,
    name: 'Camisa NASA',
    price: 79.90,
    img: "https://images.tcdn.com.br/img/img_prod/680735/camiseta_nasa_361_1_8b78357544e178f10b7fa2aa2fa4892a.jpg",
    description: 'Descrição do produto 2'
  }, {
    key: 3,
    name: 'Camisa Origem da Lua',
    price: 74.90,
    img: "https://images.tcdn.com.br/img/img_prod/680735/camiseta_origem_da_lua_5279_1_fc531373368b671cda4b71b568cf8953.jpg",
    description: 'Descrição do produto 3'
  }, {
    key: 4,
    name: 'Camisa Poeira de Estrelas',
    price: 49.90,
    img: "https://images.tcdn.com.br/img/img_prod/680735/camiseta_feita_de_poeira_das_estrelas_3301_1_a51286ff5b81c234aa65c601afdb4323.jpg",
    description: 'Descrição do produto 4'
  }, {
    key: 5,
    name: 'Camisa Anatomia do Sol',
    price: 87.90,
    img: "https://images.tcdn.com.br/img/img_prod/680735/camiseta_anatomia_do_sol_5277_1_d5689b37bd47e692b27e488d16673c3f.jpg",
    description: 'Descrição do produto 5'
  }, {
    key: 6,
    name: 'Camisa Buraco Negro',
    price: 65.90,
    img: "https://images.tcdn.com.br/img/img_prod/680735/camiseta_buraco_negro_1023_1_a09f7d5ff81e4fc3e55e4d444c9e3420.jpg",
    description: 'Descrição do produto 6'
  }, {
    key: 7,
    name: 'Camisa Bolhas de Planetas',
    price: 78.90,
    img: "https://images.tcdn.com.br/img/img_prod/680735/camiseta_bolhas_de_sabao_333_1_497a240b26ca2c2f47f888ba1bb4fc72.jpg",
    description: 'Descrição do produto 7'
  }, {
    key: 8,
    name: 'Camisa Eu Quero Saber',
    price: 68.90,
    img: "https://images.tcdn.com.br/img/img_prod/680735/camiseta_eu_quero_saber_1125_1_f313e190505d2a8fe1f274ade6953e6b.jpg",
    description: 'Descrição do produto 8'
  }, {
    key: 9,
    name: 'Camisa Saturn V',
    price: 85.90,
    img: "https://images.tcdn.com.br/img/img_prod/680735/camiseta_saturn_v_933_1_4251cfc126493ce935ca9a7a9a68b559.jpg",
    description: 'Descrição do produto 9'
  }, {
    key: 10,
    name: 'Camisa Gatonauta',
    price: 99.90,
    img: "https://images.tcdn.com.br/img/img_prod/680735/camiseta_gatonauta_355_1_7a0bd53eaec236a83232382a539baf60.jpg",
    description: 'Descrição do produto 10'
  }, {
    key: 11,
    name: 'Camisa Astrologia',
    price: 105.90,
    img: "https://images.tcdn.com.br/img/img_prod/680735/camiseta_astrologia_951_1_2cb84ce39959774aa05128849b0c5c92.jpg",
    description: 'Descrição do produto 11'
  }, {
    key: 12,
    name: 'Camisa No Obligation',
    price: 82.90,
    img: "https://images.tcdn.com.br/img/img_prod/680735/camiseta_no_obligation_3286_1_9903022790ec9eaaec135e88820f4d09.jpg",
    description: 'Descrição do produto 12'
  }, {
    key: 13,
    name: 'Camisa Eclipse',
    price: 52.90,
    img: "https://images.tcdn.com.br/img/img_prod/680735/camiseta_eclipse_5274_1_1b269333806daf13304acc615d04addc.jpg",
    description: 'Descrição do produto 13'
  }, {
    key: 14,
    name: 'Camisa Rock Star',
    price: 74.90,
    img: "https://images.tcdn.com.br/img/img_prod/680735/camiseta_astro_4842_1_b5edbe71a2eb6289d44e7cb9f186846e.jpg",
    description: 'Descrição do produto 14'
  }, {
    key: 15,
    name: 'Camisa Olhe para as Estrelas',
    price: 80.90,
    img: "https://images.tcdn.com.br/img/img_prod/680735/camiseta_olhe_para_as_estrelas_3216_1_74f35fdc889a77dadde3be1eabf27a1c.jpg",
    description: 'Descrição do produto 15'
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
