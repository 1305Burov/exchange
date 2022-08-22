import { GET_RATES } from "./actionTypes";

export function getRatesAction(rates) {
    return {
        type: GET_RATES,
        payload: rates
    }
}
