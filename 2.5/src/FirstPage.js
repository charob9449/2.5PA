import React from 'react';
import './FirstPage.css';
import bee from './bee-gf6c27aaf6_1280.jpg';

const FirstPage = ({ isLoggedIn }) => (
  <div className="firstpage">
    {isLoggedIn ? (
      <>
        <img alt="flower and bee" src={bee} />
        <p>Welcome to the first page.</p>
      </>
    ) : (
      <p>You need to log in first.</p>
    )}
  </div>
);

export default FirstPage;
