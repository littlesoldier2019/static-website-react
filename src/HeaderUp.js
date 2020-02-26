import React from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
import HeaderDown from './HeaderDown';

const HeaderUp = () =>
{
    return (
        <div className='header_up'>
            <HeaderLeft />
            <HeaderRight />
        </div>
    )
}

export default HeaderUp