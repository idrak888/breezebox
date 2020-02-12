import React from 'react';
import logo from '../images/logo_transparent_white.png';
import bars from '../images/bars.png';

const Header = props => {
    const toggleNavbar = () => {
        const nav = document.querySelector('.responsive-nav');
        if (nav.style.display == 'none' || nav.style.display == '') {
            nav.style.display = 'block';
        } else {
            nav.style.display = 'none';
        }
    }
    return (
        <div className="Header">
            <nav class="navbar fixed-top navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#"><img src={logo}/></a>
                <button onClick={toggleNavbar} class="navbar-toggler" type="button">
                    <img width="20" src={bars}/>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About us</a>
                        </li>
                    </ul>
                </div>
                
            </nav>
            <div className="responsive-nav">
                <ul>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/services">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About us</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;