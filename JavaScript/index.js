import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
// You can import your custom CSS styles here
import './App.css';
import App from './App'; // Import the main App component
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
