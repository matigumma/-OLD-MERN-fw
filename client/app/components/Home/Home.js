import React, { Component } from 'react';
//import 'whatwg-fetch';
import axios from 'axios'


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description : '',
      error : ''
    };

  }

  componentDidMount() {
    axios.get('/site/description')
      .then((response) => {
        this.setState({
          description : response.data.description
        })
      })
      .catch((error) => {
        this.setState({
          error : error.response.data.erorrMessage
        })
      })
  }


  render() {
    const {error, description} = this.state;
    return (
      <>
        <h1>Hola</h1>
        <p>
        {error ? ' description!' : description}
        </p>
      </>
    );
  }
}

export default Home;
