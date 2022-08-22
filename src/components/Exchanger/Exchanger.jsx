import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ratesSelector } from "../../store/exchangeRates/selectors";
import './Exchanger.scss';

export const Exchanger = () => {
    const dispatch = useDispatch();
    const rates = useSelector(ratesSelector);
    
    const [rate, setRate] = useState(null);
    const [firstInput, setFirstInput] = useState(1);
    const [firstSelect, setFirstSelect] = useState('EUR');
    const [secondInput, setSecondInput] = useState(1);
    const [secondSelect, setSecondSelect] = useState('UAH');
    const [isReverse, setIsReverse] = useState(false);
    
    useEffect(() => {
        
        setPriceRate();
        isReverse && reverse();
        setIsReverse(false);
    }, [rates, firstSelect, secondSelect]);

    useEffect(() => {
        setSecondInput(p => p = (firstInput * rate).toFixed(6));
    }, [rate]);

    const currencies = [...new Set (rates.reduce((currencies, rate) => {
        currencies = [...currencies, rate.base_ccy]
        return [...currencies, rate.ccy];
    }, []))];


    function setPriceRate() {
        rates.filter((rate, index, array) => {
            if (rate.ccy === firstSelect && rate.base_ccy === secondSelect || rate.ccy === secondSelect && rate.base_ccy === firstSelect) {
                setRate(p => p = rate.sale);
            }
        })
    }

    function reverse() {
        setRate(p => p = Number((firstInput/secondInput).toFixed(6)));
    }

    function setExchangeRate(e) {
        setRate(p => p = 0);
        if (e.target.name === 'first') {
            if (e.target.value !== secondSelect) {
                setFirstSelect(e.target.value);
            }else {
                setSecondSelect(firstSelect); 
                setFirstSelect(e.target.value);
                setIsReverse(true);
                
            }
        }

        if (e.target.name === 'second') {
            if (e.target.value !== firstSelect) {
                setSecondSelect(e.target.value);
            }else {
                setFirstSelect(secondSelect);
                setSecondSelect(e.target.value);
                setIsReverse(true);
                
            }
        }
    }

    return (
        <article className="exchanger">
            <div>
                <input className="exchanger__input" type="text" value={firstInput} onInput={(e) => {setFirstInput(e.target.value); setSecondInput((e.target.value * rate).toFixed(6)) }} />
                <select className="exchanger__select" value={firstSelect}  name='first' onChange={setExchangeRate} >
                    {currencies.map((currency, index) => {
                        return <option value={currency} key={index}>{currency}</option>
                    })}
                </select>    
            </div>
            <div>
                <input className="exchanger__input" type="text" value={secondInput} onInput={(e) => {setSecondInput(e.target.value); setFirstInput((e.target.value / rate)).toFixed(6) }} />
                <select className="exchanger__select" value={secondSelect}  name='second' onChange={setExchangeRate} >
                    {currencies.map((currency, index) => {
                        return <option value={currency} key={index}>{currency}</option>
                    })}
                </select>  
            </div>
        </article>
    );
}

 
