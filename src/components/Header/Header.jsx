import React from 'react';
import { GetExchangeRates } from '../GetExchangeRates/GetExchangeRates';
import "./Header.scss";
export const Header = () => {
    return (
        <header className='header'>
            <GetExchangeRates />
        </header>
    );
}


