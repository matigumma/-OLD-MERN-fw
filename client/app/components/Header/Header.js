import React, { Component } from "react";
import { Link } from 'react-router-dom';
import classnames from "classnames";
//import './styles.scss';
import 'bootstrap/dist/js/bootstrap.bundle';

function ListadoCamaras(props){
console.log(props.camaras.length)
  if(props.camaras.length > 0){
    return(
      <ul className="navbar-nav mr-auto">
        {props.camaras.map((cam) => (      
          <Link className="nav-link" to={'/cam/'+cam.id} onClick={this.toggleListadoCamaras} key={cam.id}>
            <li className="nav-item text-right" >
              {cam.title}
            </li>
          </Link>
          )
        )}
      </ul>)
    }else{
      return <img className="no-list float-right" src="/assets/img/alert.png"/>
    }

}
function UserPic(props){
  if (props.photos && props.photos.length > 0){
    if(props.photos[0]!=''){
      return <img id="thumbIcon" className="far fa-user-circle fa-2x" src={props.photos[0]}/>
    }else{
      return <img id="thumbIcon" className="far fa-user-circle fa-2x" src="/assets/img/user-image.jpg"/>
    }
  }else{
    return <i id="thumbIcon" className="far fa-user-circle fa-2x"></i>
  }
}

class Header extends Component {
  constructor() {
    super();

    this.state = {
      user:null,
      listadoCamaras: [
        {
          id:1,
          title:'camara 1'
        },
        {
          id:2,
          title:'camara 2'
        }
      ],
      prevScrollpos: window.pageYOffset,
      visible: true,

    };
  }

  // Adds an event listener when the component is mount.
  
  componentDidMount = () => {
    if(this.props.user){
      this.setState({
        user: this.props.user
      })
    }

    if(window.innerWidth > 992) {
      const navMenu = document.getElementById('navbarSupportedContent');
      const menuToggler = document.getElementById('menuToggler');
      menuToggler.style.visibility='hidden';
      navMenu.className = 'navbar-nav navbar-expand order-2 ml-auto';
    }
    const camListIcon = document.getElementById('camListIcon');
    
    camListIcon.addEventListener('click', this.toggleListadoCamaras );
    window.addEventListener("scroll", this.handleScroll);
  }
  toggleListadoCamaras() {
    const offCanvas = document.getElementById('listadoCamaras');
    offCanvas.classList.toggle('open');
  }
  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    camListIcon.addEventListener('click', this.toggleListadoCamaras );
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu. (arrow function to access to this !)
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
                    <UserPic user={this.state.user}/>
              </button>

              <Link className="navbar-brand order-1 ml-2" to="/" alt="Logo Freewaves.live">
                  <img src="/assets/img/Logo.png" width="171" height="30" className="d-inline-block align-top"
                      alt="freewaves"/>
              </Link>

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
                          <Link className="nav-link" to="/camaras">Camaras</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/anuncios">Comunidad</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/users/list">Galeria</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/settings">Contacto</Link>
                      </li>
                  </ul>
              </div>
              <div className="navbar-collapse collapse order-6" id="usernav">
                  <ul className="navbar-nav ml-2">
                      {/* {#unless user.name} */}
                      <li className="nav-item">
                          <Link className="nav-link" to="/users/signin">Register</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/users/signin">SignIn</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/users/signout">User profile</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/users/signout">Sign Out</Link>
                      </li>
                      {/* {else} */}
                      {/* {/unless} */}
                  </ul>
              </div>
              <div id="listadoCamaras" className="navbar-collapse offcanvas-collapse">                  
                  <ListadoCamaras camaras={this.state.listadoCamaras} />
              </div>
      </nav>
    );
  }
}

export default Header