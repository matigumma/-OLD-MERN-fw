import React from 'react';
import { Link } from 'react-router-dom';
import Script from 'react-inline-script';

const Header = () => (
  <header>
<nav className="navbar navbar-light bg-light shadow" id="header">
            <button id="usernav-menuToggler" className="navbar-toggler order-0 p-0" type="button" data-toggle="collapse" data-target="#usernav"
                aria-controls="usernav" aria-expanded="false" aria-label="Toggle navigation">
                {/* <i className="far fa-user-circle fa-2x" id="thumbIcon"></i> */}

                <img src="/assets/img/user-image.jpg" alt="Menu" id="thumbIcon"/>
                
            
            </button>

            <a className="navbar-brand order-1 ml-2" href="/" alt="Logo Freewaves.live">
                <img src="/assets/img/Logo.png" width="171" height="30" className="d-inline-block align-top"
                    alt="freewaves"/>
            </a>

            <button id="menuToggler" className="navbar-toggler order-3 ml-auto p-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
                <span className="navbar-toggler-icon"></span>
            </button>

            <button id="camListIcon" className="navbar-toggler order-4 p-2" type="button" data-toggle="offcanvas" data-target="#listadoCamaras">
                <span className="oi oi-video" style={{lineHeight: 0}}></span>
            </button>
            
            
            <div className="collapse navbar-collapse order-5" id="navbarSupportedContent">
                <ul className="navbar-nav ml-2">
                    <li className="nav-item">
                        <a className="nav-link" href="/camaras">Camaras</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/anuncios">Comunidad</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/users/list">Galeria</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/settings">Contacto</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-collapse collapse order-6" id="usernav">
                <ul className="navbar-nav ml-2">
            
                    <li className="nav-item">
                        <a className="nav-link" href="/users/signin">Register</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/users/signin">SignIn</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/users/signout">User profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/users/signout">Sign Out</a>
                    </li>

                </ul>
            </div>
            <div id="listadoCamaras" className="navbar-collapse offcanvas-collapse">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <a className="nav-link" href="/camaras/{{r._id}}"> </a>
                    </li>

                </ul>
            </div>
    </nav>
<Script>
    {`
var doc = document.documentElement;
var w = window;

var prevScroll = w.scrollY || doc.scrollTop;
var curScroll;
var direction = 0;
var prevDirection = 0;

var header = document.getElementById('header');

var checkScroll = function() {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) { 
    //scrolled up
    direction = 2;
    }
    else if (curScroll < prevScroll) { 
    //scrolled down
    direction = 1;
    }

    if (direction !== prevDirection) {
    toggleHeader(direction, curScroll);
    }
    
    prevScroll = curScroll;
};

var toggleHeader = function(direction, curScroll) {
    if (direction === 2 && curScroll > 40) { 
    
    //replace 52 with the height of your header in px

    header.classList.add('hide');
    prevDirection = direction;
    }
    else if (direction === 1) {
    header.classList.remove('hide');
    prevDirection = direction;
    }
};

window.addEventListener('scroll', checkScroll);

if(window.innerWidth > 992) {
    const navMenu = document.getElementById('navbarSupportedContent');
    const menuToggler = document.getElementById('menuToggler');
    menuToggler.style.visibility='hidden';
    navMenu.className = 'navbar-nav navbar-expand order-2 ml-auto';
}
    `}
</Script>
  </header>
);

export default Header;
