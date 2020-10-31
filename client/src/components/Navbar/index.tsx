import React from 'react';
import EndItem from './EndItem';
import Header from './Header';
import Link from './Link';


const Navbar = () => {
    return (
        <Header>
            <Link to="/">Nakama</Link>
            <EndItem />
        </Header>
    );
}


export default Navbar;