import React from 'react';

import pizzaLogo from '../../assets/img/pizza-logo.svg';
import Button from './Button';


const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img width="38" src={pizzaLogo} alt="Pizza logo" />
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                <Button />
            </div>
        </div>
    )
}

export default Header;
