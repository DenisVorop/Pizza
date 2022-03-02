import Cards from "../../Components/Main/Cards";
import Categories from "../../Components/Main/Categories";
import Sort from "../../Components/Main/Sort";

const Home = ({ pizzas }) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories categories={[
                    'Все',
                    'Мясные',
                    'Вегетарианская',
                    'Гриль',
                    'Острые',
                    'Закрытые'
                ]} />
                <Sort sort={[
                    'популярности',
                    'цене',
                    'алфавиту'
                ]} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <Cards pizzas={pizzas} />
        </div>
    )
}

export default Home;
