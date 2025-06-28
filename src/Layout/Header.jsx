import React, { useState } from 'react'

function Header() {
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <header className='shadow-sm h-1/10 border-b border-gray-200 px-4 py-3 lg:px-6 lg:py-4'>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                {/* Title Section */}
                <div className="flex-1 min-w-0">
                    <h1 className='text-xl lg:text-2xl font-semibold text-gray-900 truncate'>
                        Overview
                    </h1>
                    <p className="text-sm text-gray-600 mt-1">
                        Below is a Company Overview
                    </p>
                </div>

                {/* User Section */}
                <div className="flex items-center space-x-3">

                    {/* User Profile */}
                    <div className="relative">
                        <button
                            onClick={() => setShowUserMenu(!showUserMenu)}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            <div className="relative">
                                <img 
                                    src="/Icons/ic_user.svg" 
                                    alt="user" 
                                    className='w-10 h-10 rounded-full border-2 border-gray-200'
                                />
                                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            </div>
                            <div className="hidden sm:block text-left">
                                <h2 className='font-semibold text-sm text-gray-900 truncate max-w-32'>
                                    Deep Pinara (Admin)
                                </h2>
                                <p className="text-xs text-gray-500 truncate max-w-32">
                                    deepinara10@gmail.com
                                </p>
                            </div>
                            <svg 
                                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${showUserMenu ? 'rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {showUserMenu && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                <div className="px-4 py-2 border-b border-gray-100">
                                    <p className="text-sm font-medium text-gray-900">Deep Pinara</p>
                                    <p className="text-xs text-gray-500">Administrator</p>
                                </div>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150">
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <span>Profile</span>
                                    </div>
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150">
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>Settings</span>
                                    </div>
                                </a>
                                <div className="border-t border-gray-100 mt-1">
                                    <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150">
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                            <span>Sign out</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile User Info (shown only on small screens) */}
            <div className="sm:hidden mt-3 pt-3 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                    <img 
                        src="/Icons/ic_user.svg" 
                        alt="user" 
                        className='w-8 h-8 rounded-full border border-gray-200'
                    />
                    <div>
                        <h2 className='font-semibold text-sm text-gray-900'>
                            Deep Pinara (Admin)
                        </h2>
                        <p className="text-xs text-gray-500">
                            deepinara10@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
