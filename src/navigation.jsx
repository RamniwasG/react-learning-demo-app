import React from 'react';

const menuList = ['Home', 'Admission', 'Login', 'About_Us', 'Contact']

const NavigationComp = (props) => {
    return <div className='d-flex justify-content-center mb-4'>
        <ul className='list-group d-flex flex-row'>
            {menuList.map((menuItem) => {
                return <li
                    key={menuItem}
                    className='list-group-item'
                    onClick={() => props.onSetSelectedMenu(menuItem)}
                    style={{ 
                        color: props.selectedMenu === menuItem ? 'white' : 'black',
                        backgroundColor: props.selectedMenu === menuItem ? 'black' : 'white'
                    }}
                >
                    {menuItem}
                </li>
            })}
        </ul>
    </div>
}

export default NavigationComp;