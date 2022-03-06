import Card from "./Card";
import LoadingCard from "./LoadingCard";

import { useDispatch, useSelector } from 'react-redux';

import { addPizza } from "../../Redux/Reducers/CartReducer";

//========================================================================================================================================================

const Cards = ({ items, isLoaded }) => {
    const dispatch = useDispatch();
    const countToCart = useSelector(({ cartReducer }) => cartReducer.items);

    const addPizzaToCart = (obj) => {
        dispatch(addPizza(obj));
    }

    return (
        <div className="content__items">
            {isLoaded
                ? items.map((obj, index) => {
                    return <Card
                        key={`${obj}_${index}`}
                        {...obj}
                        onAddPizza={addPizzaToCart}
                        countToCart={countToCart[obj.id] && countToCart[obj.id].items.length}
                    />
                })
                : Array(10).fill(0).map((obj, index) => {
                    return <LoadingCard
                        key={`${obj}_${index}`}
                    />
                })
            }
        </div>
    )
}

//========================================================================================================================================================

export default Cards;
