import React from 'react';
import {Link} from "react-router-dom";

function Sidebar () {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Admin</div>
            </Link>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </Link>
            </li>

            <hr className="sidebar-divider" />
            <li className="nav-item">
                <Link className="nav-link" to="/users">
                    <i className="fas fa-users"></i>
                    <span>User</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/products">
                    <i className="fab fa-product-hunt"></i>
                    <span>Products</span>
                </Link>
            </li>

            <hr className="sidebar-divider d-none d-md-block"></hr>

            
        </ul>
    )
}

export default Sidebar;