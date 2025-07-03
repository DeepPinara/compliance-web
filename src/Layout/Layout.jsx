import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Container from './Container'

function Layout() {
    return (
        <div>
            <div className="flex w-screen justify-between">
                <div className='w-1/6 primary-bg-color h-screen'>
                    <Sidebar />
                </div>
                <div className='w-5/6 primary-bg-color'>
                    <Header />
                    <Container />
                </div>
            </div>
        </div>
    )
}

export default Layout