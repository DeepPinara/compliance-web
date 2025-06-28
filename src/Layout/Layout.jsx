import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Container from './Container'

function Layout() {
    return (
        <div>
            <div className="flex w-screen justify-between">
                <div className='w-1/8 primary-bg-color h-screen border-r-2 border-gray-200'>
                    <Sidebar />
                </div>
                <div className='w-7/8 primary-bg-color'>
                    <Header />
                    <Container className='bg-white h-full w-full' />
                </div>
            </div>
        </div>
    )
}

export default Layout