// Icons
import React from 'react';
import { FiHome, FiGrid, FiBookmark, FiAperture, FiPhoneForwarded, FiBookOpen, FiInfo } from 'react-icons/fi';

const INITIAL_STATE = {
    activeMenu: {
        name: 'Dashboard',
        icon: <FiHome />,
        path: '/'
    },
    itens: [
        {
            name: 'Dashboard',
            icon: <FiHome />,
            path: '/'
        },
        {
            name: 'User List',
            icon: <FiGrid />,
            path: '/tables'
        },

        {
            name: 'User Notifications',
            icon: <FiBookmark />,
            path: '/cards'
        },
        {
            name: 'Reports',
            icon: <FiPhoneForwarded />,
            path: '/forms'
        },
        {
            name: 'Manage  Chatbots',
            icon: <FiInfo />,
            path: '/alerts'
        },
        {
            name: 'Feedback',
            icon: <FiBookOpen />,
            path: '/modals'
        },
    ],
};

export default function sidebarMenu(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_MENU_ACTIVE':
            return { ...state, activeMenu: action.menu }
        
        default:
            return state
         
    }
}
