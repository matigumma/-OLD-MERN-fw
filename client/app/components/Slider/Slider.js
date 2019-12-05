import React from 'react';

function Slider(props) {
    return (
        <header className="bd">
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
            {/* todo: hacer los sliders administrables
            for each carousel 
        <li data-target="#carouselExampleCaptions" data-slide-to="{{@key}}" {{#if_eq @key 0}}className="active"{{/if_eq}}></li>
        */}
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
            {/* todo: hacer los sliders administrables
            for each carousel
            <div className="carousel-item {{#if_eq @key 0}}active{{/if_eq}}">
                <img src="/img/{{this.imagen}}" className="d-block w-100" alt="{{this.titulo}}"> 
                <div className="carousel-caption d-none d-lg-block text-left">  
                {{this.description}}
                </div>
            </div> */}
            
            <div className="carousel-item active">
                <img src="/assets/img/slide1.jpg" className="d-block w-100" alt="..."/> 
                <div className="carousel-caption d-none d-lg-block text-left">  
                <h1>ANTICIPATE A</h1>
                <h1>LAS OLAS</h1>
                <p>Freewaves es la forma mas fácil de viewpor<br/>
                    tu spot preferido en tiempo real esté<br/>
                    donde estés.<br/>
                </p>
                <span><b>VER CAMARAS</b></span>
                </div>
            </div>
            <div className="carousel-item">
                <img src="/assets/img/slide2.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-lg-block ">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src="/assets/img/slide3.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-lg-block ">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
            </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Prev</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
            <div className="espuma"></div>
        </div>
        </header>
    );
}

export default Slider;