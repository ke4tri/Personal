
import './App.css';
import NewComp from './NewComp';
import NavBar from './Components/NavBar';


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
      <div className="App">
        <NavBar />
        <header className="App-header">

          <h1 className="App=title">Wayne Collier</h1>
        </header>
        <NewComp />
        <p className="App-intro">{this.state.data}</p>
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
