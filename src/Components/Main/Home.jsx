import Cards from "../../Components/Main/Cards";
import Categories from "../../Components/Main/Categories";
import Sort from "../../Components/Main/Sort";
import { useSelector } from 'react-redux';

//========================================================================================================================================================

const Home = () => {

    const items = useSelector(({ pizzasReducer }) => pizzasReducer.items);
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

    return (
        <div className="container">
            <div className="content__top">
                <Categories categories={categoryNames} />
                <Sort sort={sortNames} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <Cards items={items} />
        </div>
    )
}

//========================================================================================================================================================

export default Home;
