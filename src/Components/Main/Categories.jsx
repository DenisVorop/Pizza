import React from 'react';
import { useState } from "react";


const Categories = ({ categories }) => {

    const [categorieActive, setCategorieActive] = useState('Все');

    const changeCategorie = (categorie) => {
        setCategorieActive(categorie)
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((categorie, index) => {
                    return <li className={categorieActive === categorie ? 'active' : null} onClick={() => changeCategorie(categorie)} key={`${categorie}_${index}`}> {categorie} </li>
                })}
            </ul>
        </div>
    )
}

export default Categories;
