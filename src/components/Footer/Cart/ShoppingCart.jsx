import React, { useEffect } from "react";
import './ShoppingCart.css';

/*React Icons*/
import { MdShoppingCart } from 'react-icons/md';

/*Components*/
import { ItemCart } from "./ItemCart";

export const ShoppingCart = ({cartList, setCartList, totalPriceCart, setTotalPriceCart}) => {

    /*Calcula o valor total dos produtos adicionados ao carrinho e mostra como monetário*/
    useEffect(() => {
        let totalPrice = 0;

        cartList.forEach(item => {
            totalPrice += item.price * item.quantity;
        });

        setTotalPriceCart(totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    }, [cartList]);

    /*Apaga todos os produtos do carrinho*/
    const ClearShoppingCart = () => {
        /*Confirmação de limpeza do carrinho*/
        let confirmClear = window.confirm('Deseja limpar o carrinho?');
        
        confirmClear && setCartList([]);
    }

    return (
        <div className='App-ShoppingCart'>
            {/*Trigger que controla o botão do carrinho de compras*/}
            <input type="checkbox" id='ShoppingCart-trigger'/>

            <div className="Navbar-ShoppingCart">
                <div className="cart-icon-count">
                    <MdShoppingCart size={30} className='cart-icon'/>
                    <span>{cartList.length}</span>
                </div>

                <div className="cart-price-total">
                    <h4>TOTAL:</h4>
                    <h1>{totalPriceCart}</h1>
                </div>                
            </div>

            <div className='Modal-ShoppingCart'>
                <div className="Modal-ShoppingCart-header">
                    <h1>Carrinho</h1>

                    {/*Botão LIMPAR CARRINHO só aparece quando o carrinho tiver pelo menos um produto*/}
                    {cartList.length > 0 &&
                        <button className="Modal-ShoppingCart-clear" onClick={() => ClearShoppingCart()}>
                            LIMPAR CARRINHO
                        </button>
                    }
                </div>

                {/*Mensagem de carrinho vazio*/}
                {cartList.length === 0 &&
                    <h2>Carrinho vazio</h2>
                }


                {cartList.map((product) => (
                    <ItemCart
                        key={product.key}
                        product={product}

                        cartList={cartList}
                        setCartList={setCartList}
                    />
                ))}
            </div>
        </div>
    )
}