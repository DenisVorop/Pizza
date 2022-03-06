const ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART';
const CLEAR_CART = 'CLEAR_CART';
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
const ADD_ITEM_COUNT = 'ADD_ITEM_COUNT';
const REMOVE_ITEM_COUNT = 'REMOVE_ITEM_COUNT';

//========================================================================================================================================================

const initialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0
}

//=============REDUCER===========================================================================================================================================

// пробежаться по всем массивам, достать прайс, суммировать прайс
const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_TO_CART: {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                },
            };

            const items = Object.values(newItems).map(obj => obj.items);
            // создается пустой массив, с помощью метода concat все массивы объединяться в один массив
            const allPizzas = [].concat.apply([], items)
            const totalPrice = getTotalPrice(allPizzas);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                // totalCount: state.totalCount + 1, // ))))))))

                totalPrice: totalPrice,
                // totalPrice: state.totalPrice + action.payload.price, // ))))))))
            }
        }
        case CLEAR_CART: {
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0
            }
        }
        case REMOVE_CART_ITEM: {

            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalCount = newItems[action.payload].items.length;
            delete newItems[action.payload];

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            }
        }
        case ADD_ITEM_COUNT: {

            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ];
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            }
        }
        case REMOVE_ITEM_COUNT: {

            const oldItems = state.items[action.payload].items;
            const newObjItems =
                oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems),
                },
            };

            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            }
        }
        default: {
            return state;
        }
    }
}

//============ACTION CREATOR============================================================================================================================================

export const addPizza = (pizzaObj) => {
    return {
        type: ADD_PIZZA_TO_CART,
        payload: pizzaObj,
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART,
    }
}

export const removeCartItem = (id) => {
    return {
        type: REMOVE_CART_ITEM,
        payload: id,
    }
}

export const addItemCount = (id) => {
    return {
        type: ADD_ITEM_COUNT,
        payload: id,
    }
}

export const removeItemCount = (id) => {
    return {
        type: REMOVE_ITEM_COUNT,
        payload: id,
    }
}

//========================================================================================================================================================

export default cartReducer;
