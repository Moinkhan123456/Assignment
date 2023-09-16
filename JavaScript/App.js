import React from 'react';
import './App.css';
import NavBar from './NavBar';
import AppRoutes from './Routes'; // Import the updated Routes component
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom-bootstrap.css'; // Import your custom Bootstrap styles
import './MyComponent';
// import './Login'; // Import the Login component
// import Login from './Login';





function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
      {/* <Login /> */}
    </div>
  );
}

export default App;

