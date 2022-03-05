import Cards from "../../Components/Main/Cards";
import Categories from "../../Components/Main/Categories";
import Sort from "../../Components/Main/Sort";

import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzas } from "../../Redux/Reducers/PizzasReducer";

//========================================================================================================================================================

const Home = () => {

    const items = useSelector(({ pizzasReducer }) => pizzasReducer.items);
    const isLoaded = useSelector(({ pizzasReducer }) => pizzasReducer.isLoaded);
    const dispatch = useDispatch();

    const categoryNames = [
        { type: null, name: 'Все' },
        { type: 0, name: 'Мясные' },
        { type: 1, name: 'Вегетарианская' },
        { type: 2, name: 'Гриль' },
        { type: 3, name: 'Острые' },
        { type: 4, name: 'Закрытые' }
    ];
    const sortNames = [
        { type: 'popular', name: 'популярности' },
        { type: 'price', name: 'цене' },
        { type: 'alphabet', name: 'алфавиту' }
    ];

    useEffect(() => {
        dispatch(fetchPizzas());
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories categories={categoryNames} />
                <Sort sort={sortNames} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <Cards items={items} isLoaded={isLoaded} />
        </div>
    )
}

//========================================================================================================================================================

export default Home;
