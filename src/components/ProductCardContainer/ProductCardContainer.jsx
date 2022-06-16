import React from "react";
import './ProductCardContainer.css';

import { ProductCard } from "./ProductCard";

export const ProductCardContainer = ({details}) => {
    /*  Esse component realiza as seguintes ações:
            Recebe os dados do produto (props) e o método de adicionar ao carrinho ();
            Renderiza o card com os dados do produto;
            Renderiza o botão de COMPRAR (ADICIONAR AO CARRINHO);

        OBS:
            Este component é filho direto de App.
            O botão de COMPRAR (ADICIONAR AO CARRINHO) é um trigger que chama o método de adicionar o produto ao carrinho.           
            O método de adicionar ao carrinho é chamado pelo onClick do botão de COMPRAR (ADICIONAR AO CARRINHO).
            
        DADOS DO PRODUTO:
            - key: identificador do produto;
            - name: nome do produto;
            - price: preço do produto;
            - img: imagem do produto;
            - description: descrição do produto (usada no alt da imagem);
    */
    
    return (
        <div className='card-container'>
            <ul>
                <li>
                    {details.map(product => (
                        <ProductCard
                            key={product.key}
                            name={product.name} 
                            price={product.price} 
                            img={product.img} 
                            description={product.description}
                        />
                    ))}
                </li>
            </ul>
        </div>
    )
}