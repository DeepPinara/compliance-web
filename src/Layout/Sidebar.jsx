import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const location = useLocation();

    const platformNavigator = [
        { icon: "/Icons/ic_dashboard.svg", label: "Dashboard", to: "/" },
        { icon: "/Icons/ic_company.svg", label: "Principle Entity", to: "/principle-entity" },
    ];

    const tracker = [
        { icon: "/Icons/ic_company.svg", label: "Tracker", to: '/create-new-application-tracker' },
    ];

    const compliance = [
        { icon: "/Icons/ic_company.svg", label: "Contractor's", to: "/contractors" },
        { icon: "/Icons/ic_company.svg", label: "Worker's", to: "/workers" },
        { icon: "/Icons/ic_company.svg", label: "Wage Master", to: "/wage-master" },
        { icon: "/Icons/ic_company.svg", label: "Compliance Create", to: "/compliance-create" },
        { icon: "/Icons/ic_team.svg", label: "Team Management", to: "/team-management" },
        { icon: "/Icons/ic_wage_master.svg", label: "Minimum Wage Master", to: "/minimum-wage-master" },
    ];

    const isActive = (to) => location.pathname === to;

    return (
        <div className={`
            shadow-lg transition-all duration-300 ease-in-out
            h-screen flex flex-col
            border-r-2 border-gray-200
            ${isCollapsed ? 'w-16' : 'w-64'}
        `}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b-2 border-gray-200">
                {!isCollapsed && (
                    <h1 className="text-xl font-semibold text-gray-800">Compliance</h1>
                )}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-2 rounded hover:bg-gray-100 transition-colors"
                    aria-label="Toggle sidebar"
                >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4">
                <div className="space-y-6">
                    {/* Platform Navigator */}
                    <div>
                        {!isCollapsed && (
                            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                                Platform Navigator
                            </h2>
                        )}
                        <ul className="space-y-1">
                            {platformNavigator.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.to}
                                        className={`
                                            flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 w-full
                                            ${isActive(item.to)
                                                ? 'bg-blue-200 text-blue-700'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                            }
                                            group
                                        `}
                                    >
                                        <img
                                            src={item.icon}
                                            alt=""
                                            className={`w-5 h-5 mr-3 transition-all duration-200 ${isActive(item.to) ? 'filter brightness-0 saturate-100 invert-27 sepia-51 saturate-2878 hue-rotate-202 brightness-104 contrast-97' : ''}`}
                                        />
                                        {!isCollapsed && (
                                            <span className="font-medium">{item.label}</span>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tracker */}
                    <div>
                        {!isCollapsed && (
                            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                                Tracker
                            </h2>
                        )}
                        <ul className="space-y-1">
                            {tracker.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.to}
                                        className={`
                                            flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 w-full
                                            ${isActive(item.to)
                                                ? 'bg-blue-200 text-blue-700'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                            }
                                            group
                                        `}
                                    >
                                        <img
                                            src={item.icon}
                                            alt=""
                                            className={`w-5 h-5 mr-3 transition-all duration-200 ${isActive(item.to) ? 'filter brightness-0 saturate-100 invert-27 sepia-51 saturate-2878 hue-rotate-202 brightness-104 contrast-97' : ''}`}
                                        />
                                        {!isCollapsed && (
                                            <span className="font-medium">{item.label}</span>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Compliance */}
                    <div>
                        {!isCollapsed && (
                            <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                                Compliance
                            </h2>
                        )}
                        <ul className="space-y-1">
                            {compliance.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.to}
                                        className={`
                                            flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 w-full
                                            ${isActive(item.to)
                                                ? 'bg-blue-200 text-blue-700'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                            }
                                            group
                                        `}
                                    >
                                        <img
                                            src={item.icon}
                                            alt=""
                                            className={`w-5 h-5 mr-3 transition-all duration-200 ${isActive(item.to) ? 'filter brightness-0 saturate-100 invert-27 sepia-51 saturate-2878 hue-rotate-202 brightness-104 contrast-97' : ''}`}
                                        />
                                        {!isCollapsed && (
                                            <span className="font-medium">{item.label}</span>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar
