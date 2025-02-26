import React from 'react';

const menuList = ['Home', 'Admission', 'Login', 'Counter_App',
        'State_Learning', 'Mathmetical_App', 'State_lifting',
        'label', 'userName', 'Form', 'Calculaion Area', 'Learn_useEffect',
        'BasicCard', 'Table_Data', 'Apps', 'UserName', 'UserComp', 'UsersBiodata',
        'PhotosList', 'AlbumList', 'FetchUserById', 'FetchCommentById', 'FetchAlbumById', 'FetchPhotosByid',
        'TodosListByAPI', 'PostListByAPI', 'Props_practice', 'PropsSpreadOperator', 'RegistrationForm',
        'useReducer', 'countNumber', 'selectedArea', 'CalculateVolume', 'Area', 'LoginForm', 
        'Registration Form', 'FamilyName'
    ]

const NavigationComp = ({ selectedMenu, onSetSelectedMenu }) => {
    return <div className='d-flex justify-content-center mb-4' style={{maxHeight: '600px', overflowY: 'auto'}}>
        <ul className='list-group d-flex flex-col'>
            {menuList.reverse().map((menuItem) => {
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