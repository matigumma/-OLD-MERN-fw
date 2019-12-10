import React, { Component } from 'react';
//import {Link} from 'react-router-dom';

class MediumHome extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentWillMount() {
        this.setState(this.props.userState)
    }

    render() {
        return (
            <div className="container">
            <div className="card-columns mt-4 mx-auto">
                {/* {!-- anuncioMedios {pos,image,title,link,extra{titular, f.creacion, f.inicio, f.fin, clicks }}  --} */}        
                {/* {#each anuncioMedio as |ad adId|} */}
                {/* {#if_eq ad.pos } */}
                    <div className="card border-0">
                        <div className="card-body p-0">
                            <a href="#ad.link" alt="{{ad.title}}" target="_blank" className="border-0">
                            <img className="rounded w-100" src="/assets/img/Bulluc.jpg"  alt="{{ad.title}}"/>
                            </a>
                        </div>
                    </div>
                    <div className="card border-0">
                        <div className="card-body p-0">
                            <a href="#ad.link" alt="{{ad.title}}" target="_blank" className="border-0">
                            <img className="rounded w-100" src="/assets/img/Bulluc.jpg"  alt="{{ad.title}}"/>
                            </a>
                        </div>
                    </div>
                    <div className="card border-0">
                        <div className="card-body p-0">
                            <a href="#ad.link" alt="{{ad.title}}" target="_blank" className="border-0">
                            <img className="rounded w-100" src="/assets/img/Bulluc.jpg"  alt="{{ad.title}}"/>
                            </a>
                        </div>
                    </div>
                {/* {/if_eq} */}
                {/* {/each} */}
            </div>
            </div>
        );
    }
}

export default MediumHome;