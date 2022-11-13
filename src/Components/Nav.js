import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navWrapper fixed-top">
                <div className='container'>
               <Link to='/'> <img className='logo' src={require ("../images/logo.png")}/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item active navText">
                            <a className="nav-link navText" href="#">Home</a>
                        </li> */}
                        <li className="nav-item active navText"><NavLink className="nav-link navText" to="/">Home</NavLink></li>
                        <li className="nav-item active navText"><NavLink  className="nav-link navText" to="/About">About</NavLink></li>
                        <li className="nav-item active navText"><NavLink  className="nav-link navText" to="/Blogs">Blog</NavLink></li>
                        <li className="nav-item active navText"><NavLink  className="nav-link navText" to="/Contact">Contact</NavLink></li>
                        {/* <li className="nav-item "> 
                            <a className="nav-link navText" href="#">About</a>
                        </li>

                        <li className="nav-item navText">
                            <a className="nav-link navText" href="#">Blog</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link navText" href="#">Contact</a>
                        </li> */}
                    </ul>
                    <form className="form-inline my-2 my-lg-0 navText">
                        <input className="form-control mr-sm-2 search text-white" type="search" placeholder="Search" aria-label="Search" />

                    </form>
                </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;