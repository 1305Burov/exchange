import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ratesReducer } from "./exchangeRates/reducer";

const rootReducer = combineReducers({
    rates: ratesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));