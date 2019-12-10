import React, { Component } from "react";
import { Link } from 'react-router-dom';
import classnames from "classnames";
//import './styles.scss';
import 'bootstrap/dist/js/bootstrap.bundle';

const ListadoCamaras = React.memo(function ListadoCamaras(props){
//console.log(props.camaras.length)
  if(props.camaras.length > 0){
    return(
      <ul className="navbar-nav mr-auto">
        {props.camaras.map((cam) => (      
          <Link className="nav-link" to={'/cam/'+cam.id} onClick={props.toggle} key={cam.id}>
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
})

const UserPic = React.memo(function UserPic(props){
  if (props.userState.loggedIn){
    if(props.userState.user.photos.length > 0){
      return <img id="thumbIcon" className="" src={props.userState.user.photos[0]}/>
    }else{
      //return <img id="thumbIcon" className="far fa-user-circle fa-2x" src="/assets/img/user-image.jpg"/>
      //return <i id="thumbIcon" className="fa fa-user fa-2x" aria-hidden="true"></i>
      return <i id="thumbIcon" className="fa fa-user-circle-o fa-1x text-primary" aria-hidden="true"></i>
    }
  }else{
    console.log(props.userState.loggedIn)
    return <i id="thumbIcon" className="fa fa-user-circle fa-1x" aria-hidden="true"></i>
  }
})

const HolaUser = React.memo(function HolaUser(props){
    if(props.userState.loggedIn){
      return <li className="nav-item">{'Hola '+props.userState.user.local.username}</li>
    } else {
      return ''
    }
    //<HolaUser userState={this.props.state}/>
})

const UserNavMenu = React.memo(function UserNavMenu(props){
  console.log('UserNavMenu: ',props)
    if(props.userState.loggedIn){
      return (
      <ul className="navbar-nav ml-2">
        <li className="nav-item">
          <span className="nav-link">
            <i className="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp;{'Hola ' + props.userState.user.local.username }
          </span>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/user/' + props.userState.user._id} >User profile</Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link" onClick={props._logout}>LogOut</Link>
        </li>
      </ul>
      )
    } else {
      return (
        <ul className="navbar-nav ml-2">
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Registro</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">LogIn</Link>
          </li>
        </ul>
      )
    }
})

class Header extends Component {
  constructor() {
    super();

    this.state = {
      state:[],
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
/* 
  componentWillMount = () => {
    this.setState({
      state:this.props.state
    })
  } */
  // Adds an event listener when the component is mount.
  
  componentDidMount = () => {
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
  }


  
  render() {
    return (
      <nav className=
      {classnames("navbar navbar-light bg-light shadow", {
        "navbar hide": !this.state.visible
      })}
      id="header">
              
              <button id="usernav-menuToggler" className="navbar-toggler order-0 p-0" type="button" data-toggle="collapse" data-target="#usernav"
                  aria-controls="usernav" aria-expanded="false" aria-label="Toggle navigation">
                    <UserPic userState={this.props.state}/>
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
                  <UserNavMenu userState={this.props.state} _logout={this.props._logout} />
              </div>
              <div id="listadoCamaras" className="navbar-collapse offcanvas-collapse">                  
                  <ListadoCamaras camaras={this.state.listadoCamaras} toggle={this.toggleListadoCamaras} />
              </div>
      </nav>
    );
  }
}

export default Header