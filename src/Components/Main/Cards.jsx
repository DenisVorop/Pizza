import Card from "./Card";
import LoadingCard from "./LoadingCard";

//========================================================================================================================================================

const Cards = ({ items, isLoaded }) => {
    return (
        <div className="content__items">
            {isLoaded ?
                items.map((obj, index) => {
                    return <Card key={`${obj}_${index}`} imageUrl={obj.imageUrl} name={obj.name} price={obj.price} />
                })
                :
                Array(10).fill(0).map((obj, index) => {
                    return <LoadingCard key={`${obj}_${index}`} />
                })
            }
        </div>
    )
}

//========================================================================================================================================================

export default Cards;
