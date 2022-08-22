import React from 'react';
import './ExchangeRate.scss'

export const ExchangeRate = ({rate}) => {
    return (
        <div className='rates__rate rate'>
            <span className='rate__name'>{rate.ccy} / {rate.base_ccy}</span>
            <p className='rate__rate'>{Number(rate.buy).toFixed(2)} | {Number(rate.sale).toFixed(2)}</p> 
        </div>
    );
}


