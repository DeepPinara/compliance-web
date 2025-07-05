import React, { useState } from 'react'

import menuData from '../Data/menu.json'
import { Link } from 'react-router';

function Menu() {
    const [activeLabel, setActiveLabel] = useState(menuData.menu[0]?.items[0]?.label || '');
    const isActive = (label) => label === activeLabel;

    return (
        <div className="w-full h-full bg-white p-4">
            {menuData.menu.map((section, index) => (
                <div key={index} className="mb-6">
                    <h2 className="text-xs font-semibold text-gray-400 mb-3 tracking-widest uppercase">{section.section}</h2>
                    <ul className="space-y-1">
                        {section.items.map((item, idx) => (

                            <Link to={item.slug}>
                                <li
                                    key={idx}
                                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors duration-150
                                ${isActive(item.label)
                                            ? 'bg-gray-100 text-blue-600 font-medium'
                                            : 'text-gray-700 hover:bg-gray-50'}
                                    `}
                                    onClick={() => setActiveLabel(item.label)}
                                >
                                    <span className="flex items-center justify-center h-6 w-6">
                                        <img src={item.icon} alt={item.label + ' icon'} className="h-5 w-5 object-contain" />
                                    </span>
                                    <span className="flex-1 text-sm">{item.label}</span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Menu
