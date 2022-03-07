import { NavLink } from 'react-router-dom';

import pizzaLogo from '../../assets/img/pizza-logo.svg';

import Button from './Button';

//========================================================================================================================================================

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <NavLink to='/'>
                    <div className="header__logo">
                        <img width="38" src={pizzaLogo} alt="Pizza logo" />
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </NavLink>
                <Button />
            </div>
        </div>
    )
}

//========================================================================================================================================================

export default Header;
