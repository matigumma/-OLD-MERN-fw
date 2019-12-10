import React, { Component } from 'react';
//import 'whatwg-fetch';
//import axios from 'axios'
import Slider from '../../components/Slider/Slider';
import Footer from '../../components/Footer/Footer';
import CamListHome from '../../components/CamListHome';
import MediumHome from '../../components/MediumHome'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  componentDidMount() {
    this.setState(this.props.userState)
/*     axios.get('/site/description')
      .then((response) => {
        this.setState({
          description : response.data.description
        })
      })
      .catch((error) => {
        this.setState({
          error : error.response.data.erorrMessage
        })
      }) */
  }


  render() {
    return (
      <div>
        <Slider />
        <CamListHome userState={this.props.userState}/>
        <MediumHome userState={this.props.userState}/>
        <Footer />
      </div>
    );
  }
}

export default Home;
