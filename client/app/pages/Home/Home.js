import React, { Component } from 'react';
//import 'whatwg-fetch';
import axios from 'axios'
import Slider from '../../components/Slider/Slider';
import Footer from '../../components/Footer/Footer';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      description : '',
      error : ''
    };

  }

  componentDidMount() {
    if(this.props.user){
      this.setState({
        user: this.props.user
      })
    }
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
        
        <Footer />
      </div>
    );
  }
}

export default Home;
