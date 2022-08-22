import { getExchangeRates } from "../../api/exchangeRates";
import { getRatesAction } from "./actionCreators";

export function getRatesThunk() {
    return (dispatch, getState) => {
        getExchangeRates()
        .then((rates) => dispatch(getRatesAction(rates)))
        .catch((error) => {
            alert('Something went wrong! Try again later.');
            console.error(error);
        });
    }
}
