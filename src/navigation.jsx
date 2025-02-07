import React from 'react';

const menuList = ['Home', 'Admission', 'Login', 'Counter_App',
        'State_Learning', 'Mathmetical_App', 'State_lifting',
        'label', 'userName', 'Form', 'Calculaion Area',
    ]

const NavigationComp = ({ selectedMenu, onSetSelectedMenu }) => {
    return <div className='d-flex justify-content-center mb-4'>
        <ul className='list-group d-flex flex-col'>
            {menuList.map((menuItem) => {
                return <li
                    key={menuItem}
                    className='list-group-item'
                    onClick={() => onSetSelectedMenu(menuItem)}
                    style={{ 
                        color: selectedMenu === menuItem ? 'white' : 'black',
                        backgroundColor: selectedMenu === menuItem ? 'black' : 'white'
                    }}
                >
                    {menuItem}
                </li>
            })}
        </ul>
    </div>
}

export default NavigationComp;