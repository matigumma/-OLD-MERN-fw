import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
class CamListHome extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentWillMount() {
        this.setState(this.props.userState);
        axios.get('http://127.0.0.1:3000/api/cameras-list').then(response => {
            if (response.data) {
                console.log('cam data: ',response.data)
                if (response.status === 200) {
                    this.setState({
                        camaras: response.data
                    })
                }
            }else{
                console.log('sin response data')
            }
        })
        .catch(err => console.log('axios get camerar error: ',err))
    }

    render() {
        return (
            <div className="">
                <section className="container m-auto">
                <div className="clearfix text-right my-1">
                    <span>ver en mapa</span>
                    <i className="fas fa-map-marker-alt"></i>
                </div>
                <h2 className="caption mr-auto my-2 h1">CAMARAS EN VIVO</h2> para 

                <div className="card-columns m-auto p-0">
                    {/* Map.camaras */}
                    {/* anuncio {pos,image,title,link,extra{titular, f.creacion, f.inicio, f.fin, clicks }}  */}
                    {/* {#each anunciosCamList as |ad adid|} 
                    <p>
                        {ad} 
                    </p>
                    {/* {#if_eq adid camId} 
                        <div className="card border-0">
                            <div className="card-body p-0 my-auto">
                            <a href="#ad.link" alt="ad.title" target="_blank" className="border-0">
                                <img className="m-auto adimg rounded" src="http://localhost:3000/content/ads/ad.image"  alt="ad.title"/>
                            </a>
                            </div>
                        </div>
                    {/* {/if_eq} */}
                    {/* {/each} */}

                    <div className="card">
                        <div className="card-body p-0">
                        <img className="m-0 cimg" src="https://srv.freewaves.live/images/cardiel.jpg" onError={()=>{this.src='https://srv.freewaves.live/images/cardiel.jpg'}} alt="cam.name"/>
                        <div className="ml-2 my-auto">
                            <h5 className="card-title mb-0 list-title">cam.title</h5>
                            <p className="card-text mb-0"><small>Mar del plata</small></p>
                            <p className="card-text"><small><i className="fas fa-map-marker-alt"></i> Ubicacion</small> KEY: camId</p>
                        </div>
                        </div>
                    </div>

                    {/* {/each} */}
                </div>
                </section>
            </div>
        );
    }
}

export default CamListHome;