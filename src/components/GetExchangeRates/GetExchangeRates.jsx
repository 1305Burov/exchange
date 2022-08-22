import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ratesSelector } from "../../store/exchangeRates/selectors";
import { getRatesThunk } from "../../store/exchangeRates/thunk";
import { ExchangeRate } from "../ExchangeRate/ExchangeRate";

export const GetExchangeRates = () => {
    const dispatch = useDispatch();
    const rates = useSelector(ratesSelector)

    useEffect(() => {
        dispatch(getRatesThunk());
    }, [dispatch]);

    return (
        <div className="rates">
            {rates.map((rate, index) => {
                return <ExchangeRate key={index} rate={rate} />
            })}
        </div>
    );
}


