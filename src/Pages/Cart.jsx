import EmptyCart from '../Components/Cart/EmptyCart';
import NotEmptyCart from '../Components/Cart/NotEmptyCart';

import { useSelector } from 'react-redux';

//========================================================================================================================================================

const Cart = () => {

    const { totalCount } = useSelector(({ cartReducer }) => cartReducer);

    return (
        <div className="content">
            <div className="container container--cart">
                {
                    totalCount === 0
                        ? <EmptyCart />
                        : <NotEmptyCart />
                }
            </div>
        </div>
    )
}

//========================================================================================================================================================

export default Cart;
