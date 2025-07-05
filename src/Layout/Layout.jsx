import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router';

function Layout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen((open) => !open);

    return (
        <div className="min-h-screen flex flex-col md:flex-row w-full">
            {/* Sidebar: hidden on mobile, visible on md+ */}
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 flex flex-col">
                <Header onMenuClick={toggleSidebar} />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout