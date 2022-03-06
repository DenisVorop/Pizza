import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';

import filterReducer from "./Reducers/FilterReducer";
import pizzasReducer from "./Reducers/PizzasReducer";
import cartReducer from "./Reducers/CartReducer";

//========================================================================================================================================================

const reducers = combineReducers(
    {
        filterReducer,
        pizzasReducer,
        cartReducer,
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

window.store = store;

//========================================================================================================================================================

export default store;
