import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import './LoginScreen.css'; 

const LoginScreen = ({ isLoggedIn, setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const navigate = useNavigate(); // Get the navigate function


  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      setLoginMessage('Login successful');
      setIsLoggedIn(true); // Set isLoggedIn to true
      navigate('/FirstPage'); // Navigate to FirstPage route

    } else {
      setLoginMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <input
        className="input"
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        className="input"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
      <p className="login-message">{loginMessage}</p>

      {isLoggedIn && <Link to="/FirstPage">Go to FirstPage</Link>}
    </div>
  );
};

export default LoginScreen;
