import React from "react";
import './ProductCard.css';

export const ProductCard = (props) => {
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
        <div className='card'>
            <div className='card-img'>
                <img src={props.img} alt={props.description}/>
            </div>

            <h3>{props.name}</h3>
            <h1>{props.price}</h1>

            <button>COMPRAR</button>
        </div>

    )
}