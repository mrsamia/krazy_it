import React from 'react';
import '../Styles/nav.css'
import { Link, NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function Nav(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navWrapper fixed-top">
                <div className='container d-flex justify-content-between'>
                    <Link to='/'> <img className='logo' src={require("../images/logo.png")} /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ paddingLeft: "150px" }}>
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item active navText"><NavLink className="nav-link navText" to="/">Home</NavLink></li>
                            <li className="nav-item active navText"><NavLink className="nav-link navText" to="/About">About</NavLink></li>
                            <li className="nav-item active navText"><NavLink className="nav-link navText" to="/Blogs">Blog</NavLink></li>
                            <li className="nav-item active navText"><NavLink className="nav-link navText" to="/Contact">Contact</NavLink></li>

                        </ul>
                        <div className="input-group">
                            <input type="text" className="form-control text-white" placeholder="Search.." />
                            <div className="input-group-append">
                                <button className="btn faSearch " type="button">
                                    <FaSearch />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;