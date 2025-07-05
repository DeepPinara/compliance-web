import React from 'react'
import Menu from '../Components/Menu'

function Sidebar({ open, onClose }) {
    return (
        <>
            {/* Desktop sidebar */}
            <div className="hidden md:block md:w-64 h-screen border-r border-gray-200 bg-white">
                <Menu />
            </div>
            {/* Mobile sidebar overlay */}
            {open && (
                <div className="fixed inset-0 z-40 flex md:hidden">
                    {/* Overlay */}
                    <div className="fixed inset-0 bg-black bg-opacity-30" onClick={onClose} />
                    {/* Sidebar panel */}
                    <div className="relative w-64 h-full bg-white border-r border-gray-200 shadow-xl z-50 animate-slide-in">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            onClick={onClose}
                            aria-label="Close sidebar"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <Menu />
                    </div>
                </div>
            )}
        </>
    )
}

export default Sidebar
