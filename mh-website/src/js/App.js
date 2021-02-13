import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import React from 'react'

import '../sass/App.scss';

import Home from './home/home'
import Login from './login/login'
function App() {
  return (
    <div className="App">
      <Router>

        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />

        <div className="nav-bar">


          <Link to="/" className="nav-item">Home</Link>
          <CustomLink to="/" className="nav-item">
            Home
          </CustomLink>
          <CustomLink to="/login" className="nav-item">
            Login
          </CustomLink>

        </div>
      </Router>
    </div>
  );
}

export default App;

function CustomLink(props) {
  let history = useHistory();

  function handleClick() {
    history.push(props.to);
  }
  return (
    <div {...props}
      onClick={handleClick}
    >
      {props.children}
    </div>
  )
}

