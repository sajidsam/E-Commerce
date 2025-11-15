import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className="flex w-full h-screen bg-gray-100">
            
            <aside className="w-64 bg-blue-700 text-white flex flex-col p-6 space-y-6 rounded-r-3xl">
                <h2 className="text-2xl font-bold">Cash Market</h2>

                <nav className="flex-1 space-y-3">
                    <NavLink
                        to="/admin/dashboard"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-xl hover:bg-blue-600 ${isActive ? 'bg-blue-600' : ''
                            }`
                        }
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/admin/users"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-xl hover:bg-blue-600 ${isActive ? 'bg-blue-600' : ''
                            }`
                        }
                    >
                        Users
                    </NavLink>

                    <NavLink
                        to="/admin/products"
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-xl hover:bg-blue-600 ${isActive ? 'bg-blue-600' : ''
                            }`
                        }
                    >
                        Products
                    </NavLink>
                </nav>

                <p className="opacity-70 text-sm">Cash Market <br />All rights reserved</p>
            </aside>

            
            <main className="flex-1 p-6 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
