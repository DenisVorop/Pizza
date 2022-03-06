import React from 'react';
import { useState } from "react";

//========================================================================================================================================================

const initialState = {
    crust: ['тонкое', 'традиционное'],
    size: [26, 30, 40]
}

const Card = ({ id, imageUrl, name, price, onAddPizza, countToCart }) => {

    const [crustActive, setCrustActive] = useState(initialState.crust[0]);
    const [sizeActive, setSizeActive] = useState(initialState.size[1]);

    const onChangeSize = (size) => {
        setSizeActive(size)
    }

    const onChangeCrust = (crust) => {
        setCrustActive(crust)
    }

    const onCLickAddPizza = () => {
        const obj = { id, imageUrl, name, price, size: sizeActive, type: crustActive }
        onAddPizza(obj);
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    <li className={crustActive === initialState.crust[0] ? 'active' : null} onClick={() => onChangeCrust(initialState.crust[0])}>{initialState.crust[0]}</li>
                    <li className={crustActive === initialState.crust[1] ? 'active' : null} onClick={() => onChangeCrust(initialState.crust[1])}>{initialState.crust[1]}</li>
                </ul>
                <ul>
                    <li className={sizeActive === initialState.size[0] ? 'active' : null} onClick={() => onChangeSize(initialState.size[0])}>{initialState.size[0]} cm.</li>
                    <li className={sizeActive === initialState.size[1] ? 'active' : null} onClick={() => onChangeSize(initialState.size[1])}>{initialState.size[1]} cm.</li>
                    <li className={sizeActive === initialState.size[2] ? 'active' : null} onClick={() => onChangeSize(initialState.size[2])}>{initialState.size[2]} cm.</li>
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div className="button button--outline button--add" onClick={onCLickAddPizza}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {countToCart && <i>{countToCart}</i>}
                </div>
            </div>
        </div>
    )
}

//========================================================================================================================================================

export default Card;
