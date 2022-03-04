import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import filterReducer from "./Reducers/FilterReducer";
import pizzasReducer from "./Reducers/PizzasReducer";

//========================================================================================================================================================

const reducers = combineReducers(
    {
        filterReducer,
        pizzasReducer,
    }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()))

window.store = store;

//========================================================================================================================================================

export default store;
