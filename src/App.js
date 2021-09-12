
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Contact from './Components/Contact';
import Games from './Components/Games';
import News from './Components/News';
import Projs from './Components/Projs';


import React, { Component } from 'react';

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className='componentWrapper'>
          <Switch>
            <Route exact path="/About" component={About} />
            <Route exact path="/">
              <Redirect to="/About" />
            </Route>
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/News" component={News} />
            <Route exact path="/Games" component={Games} />
            <Route exact path="/Projs" component={Projs} />
          </Switch>
        </div>

      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <p>
//           <NewComp />
//         </p>
//       </header>
//     </div>
//   );
// }

export default App;
