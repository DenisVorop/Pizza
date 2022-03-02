import Card from "./Card";


const Cards = ({ pizzas }) => {
    return (
        <div className="content__items">
            {pizzas.map((obj, index) => {
                return <Card key={`${obj}_${index}`} imageUrl={obj.imageUrl} name={obj.name} price={obj.price} />
            })}
        </div>
    )
}

export default Cards;
