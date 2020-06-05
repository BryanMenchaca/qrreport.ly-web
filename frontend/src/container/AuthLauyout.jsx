import React from 'react'

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const AuthLayout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <div className="d-flex align-items-stretch" style={{background: '#f2f6f9'}}>
                <Sidebar/>
                <div className="content p-4">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthLayout
