import Cards from "../../Components/Main/Cards";
import Categories from "../../Components/Main/Categories";
import Sort from "../../Components/Main/Sort";

import { fetchPizzas } from "../../Redux/Reducers/PizzasReducer";
import { setCategory, setSortBy } from "../../Redux/Reducers/FilterReducer";

import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

//========================================================================================================================================================

const Home = () => {

    const dispatch = useDispatch();

    const { items, isLoaded } = useSelector(({ pizzasReducer }) => pizzasReducer);
    const { category, sortBy } = useSelector(({ filterReducer }) => filterReducer);

    const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    const sortItems = [
        { name: 'популярности', type: 'popular', order: 'desc' },
        { name: 'цене', type: 'price', order: 'desc' },
        { name: 'алфавиту', type: 'name', order: 'asc' },
    ];

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
    }, [category, sortBy])

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames} />
                <Sort
                    activeSortType={sortBy.type}
                    items={sortItems}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <Cards items={items} isLoaded={isLoaded} />
        </div>
    )
}

//========================================================================================================================================================

export default Home;
