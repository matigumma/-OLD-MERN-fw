import React, { Component } from 'react';
import axios from 'axios'

function HandleErrors(props){
  if(props.msg){
      return <div class="alert alert-danger" role="alert">{props.msg}</div>
  }
}

class CameraView extends Component {
  constructor(){
    super()
    this.state = {
      error:{}
    }
  }
  componentWillMount(){
    this.setState(this.props.userState)
    //console.log('fetching camera data for: ',this.props.match.params.id)
    axios.get(`/api/camara/${this.props.match.params.id}`)
    .then(response => {
			console.log('fetching camera data: ',response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
    })
    .catch(err => console.log('axios get camerar error: ',err))
  }
  render() {
    return (
      <div className="mt-4 pt-4">
        {/* <HandleErrors msg={this.state.error} /> */}
      </div>
    );
  }
}

export default CameraView