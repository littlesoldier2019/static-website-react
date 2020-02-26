import React from 'react';
import HeaderUp from './HeaderUp';
import HeaderDown from './HeaderDown';
import HeaderBar from './HeaderBar';

const Header = () =>
{
    return (
        <div className='header'>
            <HeaderUp />
            <HeaderDown />
            <HeaderBar />
        </div>
    )
}

export default Header