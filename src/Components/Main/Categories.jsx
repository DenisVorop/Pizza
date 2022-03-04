import React from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setCategory } from '../../Redux/Reducers/FilterReducer';


const Categories = ({ categories }) => {

    const dispatch = useDispatch();
    const [categorieActive, setCategorieActive] = useState('Все');

    const onClickCategorie = (index) => {
        dispatch(setCategory(index));
    }

    const changeCategorie = (categorie) => {
        setCategorieActive(categorie.name)
        onClickCategorie(categorie.type)
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((categorie, index) => {
                    return <li className={categorieActive === categorie.name ? 'active' : null} onClick={() => changeCategorie(categorie)} key={`${categorie.type}_${index}`}> {categorie.name} </li>
                })}
            </ul>
        </div>
    )
}

export default Categories;
