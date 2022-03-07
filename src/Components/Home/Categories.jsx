import React from 'react';

//========================================================================================================================================================

const Categories = ({ activeCategory, items, onClickCategory }) => {
    return (
        <div className="categories">
            <ul>
                <li
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)}>
                    Все
                </li>
                {items.map((name, index) => {
                    return <li
                    className={activeCategory === index ? 'active' : null} onClick={() => onClickCategory(index)} key={`${name}_${index}`}> {name} </li>
                })}
            </ul>
        </div>
    )
}

//========================================================================================================================================================

export default Categories;
