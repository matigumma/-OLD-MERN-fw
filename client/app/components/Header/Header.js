import React, { Component } from "react";
import { Link } from 'react-router-dom';
import classnames from "classnames";
import './styles.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    if(window.innerWidth > 992) {
      const navMenu = document.getElementById('navbarSupportedContent');
      const menuToggler = document.getElementById('menuToggler');
      menuToggler.style.visibility='hidden';
      navMenu.className = 'navbar-nav navbar-expand order-2 ml-auto';
    }
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <nav className=
      {classnames("navbar navbar-light bg-light shadow", {
        "navbar hide": !this.state.visible
      })}
      id="header">
              
              <button id="usernav-menuToggler" className="navbar-toggler order-0 p-0" type="button" data-toggle="collapse" data-target="#usernav"
                  aria-controls="usernav" aria-expanded="false" aria-label="Toggle navigation">
                  {/* {#unless user.name} */}
                  <i className="far fa-user-circle fa-2x" id="thumbIcon"></i>
                  {/* {else} */}
                  <img src="/assets/img/user-image.jpg" alt="Menu" id="thumbIcon"/>
                  {/* <img src="{{user.profile-image}}" alt="Menu"/> */}
                  {/* {/unless} */}
              </button>

              <a className="navbar-brand order-1 ml-2" href="/" alt="Logo Freewaves.live">
                  <img src="/assets/img/logo.png" width="171" height="30" className="d-inline-block align-top"
                      alt="freewaves"/>
              </a>

              <button id="menuToggler" className="navbar-toggler order-3 ml-auto p-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
                  <span className="navbar-toggler-icon"></span>
              </button>

              <button id="camListIcon" className="navbar-toggler order-4 p-2" type="button" data-toggle="offcanvas" data-target="#listadoCamaras">
                  {/* <span className="oi oi-video" style={{lineHeight: 0}}></span> */}
                  <i className="fas fa-video"></i>
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
                      {/* {#unless user.name} */}
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
                      {/* {else} */}
                      {/* {/unless} */}
                  </ul>
              </div>
              <div id="listadoCamaras" className="navbar-collapse offcanvas-collapse">
                  <ul className="navbar-nav mr-auto">
                      {/* {#each r} */}
                      <li className="nav-item">
                          <a className="nav-link" href="/camaras/{{r._id}}">{/* {r.name} */}</a>
                      </li>
                      {/* {/each} */}
                  </ul>
              </div>
      </nav>
    );
  }
}
