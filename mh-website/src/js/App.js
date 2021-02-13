import { BrowserRouter as Router, Route, useHistory, Switch } from 'react-router-dom';
import React from 'react'

import '../sass/App.scss';

import Home from './home/home'
import Login from './login/login'
import About from './about/about'
import Solutions from './solutions/solutions'

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          {routes.map((item, index) => (
            <Route key={index} exact path={item.to} >
              <>
                {item.component}
                {item.navbar && <NavBar />}
              </>


            </Route>
          ))}
        </Switch>


      </Router>
    </div>
  );
}

export default App;

function NavBar() {

  return (

    <div className="nav-bar">
      {routes.map((item, index) => (
        <CustomLink key={index} to={item.to} className="nav-item">
          {item.children}
        </CustomLink>
      ))}

    </div>
  )
}

const routes = [
  {
    to: '/',
    children: 'Home',
    component: <Home />,
    navbar: true
  },
  {
    to: '/solutions',
    children: 'Solutions',
    component: <Solutions />,
    navbar: true
  },
  {
    to: '/about',
    children: 'About',
    component: <About />,
    navbar: true
  },
  {
    to: '/login',
    children: 'Login',
    component: <Login />,
    navbar: true
  }
]


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

