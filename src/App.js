import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import routes from './routes';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="navbar">
            <Menu />
          </div>          
          <Switch>
            { this.showRoute() }
          </Switch>
        </div>
      </Router>
    );  
  }
  showRoute = () => {
    let result = null;
    result = routes.map((route, index) => {
      return(
        <Route path={route.path} key={index} exact={route.exact}>
          {route.main}
        </Route>
      )
    })
    return result;
  }
}

export default App;
