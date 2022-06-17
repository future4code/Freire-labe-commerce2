import React from "react";
import './ShoppingCart.css';

/*React Icons*/
import { MdShoppingCart } from 'react-icons/md';

/*Components*/
import { ItemCart } from "./ItemCart";

export const ShoppingCart = ({cartList, setCartList}) => {

    /*Soma o valor total do carrinho*/
    const totalPriceCart = () => {
        let total = 0;
        cartList.forEach(item => {
            total += item.price * item.quantity;
        });
        
        return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
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
                    <h1>{totalPriceCart()}</h1>
                </div>                
            </div>

            <div className='Modal-ShoppingCart'>
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