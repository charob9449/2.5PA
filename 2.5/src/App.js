import React, { Component} from "react";

import {
  Route, Routes,
  NavLink,
  HashRouter,
  useLocation
} from "react-router-dom";

import './App.css';
import LoginScreen from './LoginScreen.js';
import FirstPage from './FirstPage.js';

const WelcomeMessage = () => {
  const location = useLocation();
  const hiddenPaths = ["/LoginScreen", "/FirstPage"];

  if (!hiddenPaths.includes(location.pathname)) {
    return (
      <h2>
        <p>
          Welcome to 2.5 PA! Select LoginScreen to Sign In.<br />
          The User is: user<br />
          The Password is: password
        </p>
      </h2>
    );
  }

  return null;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLogin = () => {
    // Simulate a delay to mimic server response time
    setTimeout(() => {
      const username = 'user'; // Hardcoded username
      const password = 'password'; // Hardcoded password
  
      // Retrieve username and password input values from the state
      const inputUsername = this.state.username;
      const inputPassword = this.state.password;
  
      if (inputUsername === username && inputPassword === password) {
        // If the input matches the hardcoded credentials
        this.setState({ isLoggedIn: true }, () => {
          // Navigate to the FirstPage after successful login
          this.props.navigate('/FirstPage');
        });
      } else {
        // If login fails
        this.setState({ loginMessage: 'Login failed. Please check your credentials.' });
      }
    }, 1000); // Simulate 1 second delay
  };
  render() {
    
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
          <h1>2.5 PA</h1>
          
          <ul className="header">
            <li><NavLink to="/LoginScreen">LoginScreen</NavLink></li>
            <li><NavLink to="/FirstPage">FirstPage</NavLink></li>

          </ul>
          </header>
          <div className="content">
            <Routes>
            <Route path="/LoginScreen" element={ <LoginScreen
              isLoggedIn={this.state.isLoggedIn}
              setIsLoggedIn={isLoggedIn => this.setState({ isLoggedIn })}
            />}/>
            <Route path="/FirstPage" element={<FirstPage isLoggedIn={this.state.isLoggedIn} />}/>
            </Routes>
          </div>
           {/* Conditionally render the welcome message */}
           <WelcomeMessage />
        </div>
      </HashRouter>
    );
  }
}

export default App;

