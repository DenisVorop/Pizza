import Card from "./Card";


const Cards = ({ items }) => {
    return (
        <div className="content__items">
            {items.map((obj, index) => {
                return <Card key={`${obj}_${index}`} imageUrl={obj.imageUrl} name={obj.name} price={obj.price} />
            })}
        </div>
    )
}

export default Cards;
