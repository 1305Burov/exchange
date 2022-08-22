import { GET_RATES } from "./actionTypes";

const initialState = [];

export function ratesReducer(state = initialState, action) {
    switch (action.type) {
       case GET_RATES:
            return action.payload;
       
        default:
            return state;
    }
}

 