import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import fakeAuth from './lib/fakeAuth';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import About from './pages/About';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/login" component={Login} />
      <PrivateRoute exact={true} path="/" component={Dashboard} />
      <PrivateRoute path="/about" component={About} />
    </div>
  </BrowserRouter>
);

export default App;
