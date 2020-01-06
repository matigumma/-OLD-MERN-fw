import React from 'react'
import {Link} from 'react-router-dom'

const imageSrcUrl = 'http://localhost:3000/content/'
const imageSrcPoster = 'https://srv.freewaves.live/images/'

const ImageBanner = ({imagen, name, slug}) => {
    function addDefaultSrc(ev){
        ev.target.src = '/assets/img/logo-footer.png'
    }
    function loaded(ev){
        ev.target.previousSibling.className="d-none"
        ev.target.className="m-0 cimg d-block"
    }
    if(imagen){
        return (
        <div>
            <Link to={slug}>
                <i className="fas fa-4x m-2 fa-sync fa-spin" style={{outerHeight:'90px'}}></i>
                <img className="m-0 cimg d-none" src={ imageSrcUrl + imagen } onLoad={loaded} onError={addDefaultSrc} alt={name}/>
            </Link>
        </div>)
    }else{
        return (
        <div>
            <Link to={slug}>
                <i className="fas fa-4x m-2 fa-sync fa-spin" style={{outerHeight:'90px'}}></i>
                <img className="m-0 cimg d-none" src={ imageSrcPoster + name + '.jpg' } onLoad={loaded} onError={addDefaultSrc} alt={name}/>
            </Link>
        </div>)
    }
}
export default ImageBanner