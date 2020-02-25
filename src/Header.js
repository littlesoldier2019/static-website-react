import React from 'react'
import HeaderUp from './HeaderUp'
import HeaderDown from './HeaderDown'

const Header = () =>
{
    return (
        <div className='header'>
            <HeaderUp />
            <HeaderDown />
        </div>
    )
}

export default Header