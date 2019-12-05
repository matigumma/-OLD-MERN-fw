import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../../pages/Home/Home';
import Cam from '../../pages/Cam/Cam';
import NotFound from '../../pages/NotFound';
import Splash from '../../pages/Splash/Splash';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      loggedIn: false,
      user: null,
      listado: []
    }
  }

componentDidMount(){
  if(!this.state.loggedIn){
    
  }
/*   fetch('/api/user/list')
  .then(res => res.json())
      .then(json => {
        this.setState({
          listado: json
        })
        console.log(json)
      }) */
}

User = () => <h1>users component</h1>;

render(){
      return (
        <Router>
        <div className="h-100">
          <Header />
          <main  className="h-100">
{/*             <ul>
            { this.state.listado.map((usr, i) => (
            <li key={i}>
              <span>{usr.email} </span>
              <span>{usr.name} </span>
            </li>
          )) }
            </ul> */}
            <Switch>
                <Route exact path={`/`} component={Splash}/>
                <Route exact path={`/home`} component={Home}/>
        {/*           <Route exact path={`/`} component={Home}/> */}
                <Route exact path={"/cam/:id"} component={Cam}/>
                <Route exact path={"/user/:id"} component={this.User}/>
                <Route component={NotFound}/>
            </Switch>
          </main>
        </div>
        </Router>
      );
  }
};

export default App;
