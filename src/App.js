import React from 'react';
import Netflix from './components/netflix';
import Amazon from './components/amazon';
import Navbar from './components/navbar';

const fav = prompt('What u want amazon/netflix ?');

export default function App() {
    return (
        <>
            <Navbar lgn='login' sgn='Sign in' />
            {fav === 'netflix' ? <Netflix /> : fav === 'amazon' ? <Amazon /> : <h1>Unable to found:(</h1>}
        </>
    );
}