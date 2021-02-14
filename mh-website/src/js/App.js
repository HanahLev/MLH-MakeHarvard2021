import { BrowserRouter as Router, Route, useHistory, Switch } from 'react-router-dom';
import React from 'react'
import '../sass/App.scss';

import Home from './home/home'
import Login from './login/login'
import About from './about/about'
import Solutions from './solutions/solutions'
import Dashboard from './dashboard/dashboard'

import { CustomLink } from './components'

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

          {routes.map((item, index) => (
            <Route key={index} path={item.to} >
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
          {item.children && item.children}
        </CustomLink>
      ))}

    </div>
  )
}

const routes = [

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
  },
  {
    to: '/dashboard',
    component: <Dashboard />,
    navbar: false
  },
  {
    to: '/',
    children: 'Home',
    component: <Home />,
    navbar: true
  },
]


