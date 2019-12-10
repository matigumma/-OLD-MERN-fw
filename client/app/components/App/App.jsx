import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.scss'
import LoginForm from '../Auth/LoginForm.jsx'
import SignupForm from '../Auth/SignupForm.jsx'
import Header from '../Header/Header'
import Home from '../../pages/Home/Home'
import CameraView from '../../pages/CameraView'

function UserProfile(props){
	console.log(props)
	return ('Hola User profile')
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}
	componentWillMount() {
		axios.get('/auth/user').then(response => {
			if (!!response.data.user) {
				console.log('THERE IS A USER: ', response.data.user)
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}

	render() {
	return (
	<Router>
	<div className="h-100">
		<Header state={this.state} _logout={this._logout} />
		<main className="h-100">
			<Route exact path="/" render={() => <Home userState={this.state} />} />
			<Route exact path="/login" render={() => <LoginForm _login={this._login} _googleSignin={this._googleSignin} />}/>
			<Route exact path="/user/:id" render={() => <UserProfile userState={this.state} />}/>
			<Route exact path="/cam/:id" render={(props) => <CameraView {...props} userState={this.state} />}/>
			{/* <Route exact path="/cam/:id" component={CameraView} userState={this.state}/> */}
			<Route exact path="/signup" component={SignupForm} />
		</main>
	</div>
	</Router>
	)
	}
}

export default App
