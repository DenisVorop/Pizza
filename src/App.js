import Header from "./Components/Header/Header";
import Cards from "./Components/Main/Cards";
import Categories from "./Components/Main/Categories";
import Sort from "./Components/Main/Sort";

function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
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
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
